// --- Parsování původních dat (author profiles) ---
function parseAuthorProfiles(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const authors = [];
    let currentAuth = null;
    let currentArray = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line === "Další důležitá díla autora") {
            currentAuth.otherWorks = [];
            currentArray = currentAuth.otherWorks;
        } else if (line === "Autoři stejné doby") {
            currentAuth.contemporaries = [];
            currentArray = currentAuth.contemporaries;
        } else if (line === "Důležité info / zajímavost") {
            currentAuth.info = "";
            currentArray = "info";
        } else if (line === "Český ekvivalent / srovnatelné dílo") {
            currentAuth.equivalent = "";
            currentArray = "equivalent";
        } else {
            if (!currentAuth) {
                currentAuth = {
                    title: line,
                    author: "",
                    origin: "",
                    era: "",
                    otherWorks: [],
                    contemporaries: [],
                    info: "",
                    equivalent: ""
                };
                if (i + 1 < lines.length && !isHeader(lines[i + 1])) {
                    currentAuth.author = lines[i + 1];
                    i++;
                }
                if (i + 1 < lines.length && !isHeader(lines[i + 1])) {
                    currentAuth.origin = lines[i + 1];
                    i++;
                }
                if (i + 1 < lines.length && !isHeader(lines[i + 1])) {
                    currentAuth.era = lines[i + 1];
                    i++;
                }
            } else if (currentArray === currentAuth.otherWorks) {
                currentAuth.otherWorks.push(line);
            } else if (currentArray === currentAuth.contemporaries) {
                currentAuth.contemporaries.push(line);
            } else if (currentArray === "info") {
                currentAuth.info += (currentAuth.info ? " " : "") + line;
            } else if (currentArray === "equivalent") {
                currentAuth.equivalent += (currentAuth.equivalent ? " " : "") + line;
                authors.push(currentAuth);
                currentAuth = null;
                currentArray = null;
            }
        }
    }
    return authors;
}

function isHeader(line) {
    return [
        "Další důležitá díla autora",
        "Autoři stejné doby",
        "Důležité info / zajímavost",
        "Český ekvivalent / srovnatelné dílo"
    ].includes(line);
}

// --- Generování zmenšených kartiček (Atomic Flashcards) ---
function generateAtomicCards(authors, filters = { types: ['authors-works', 'eras-years', 'everything'] }) {
    let generatedCards = [];
    const seenEras = new Set(); // To prevent duplicate era-year cards

    authors.forEach(auth => {
        // --- Období a roky ---
        if (filters.types.includes('eras-years')) {
            const eraParts = auth.era.split(' · ');
            if (eraParts.length === 2) {
                const years = eraParts[0].trim();
                const eraName = eraParts[1].trim();
                const key = `${years}|${eraName}`;
                
                if (!seenEras.has(key)) {
                    seenEras.add(key);
                    
                    // Směr -> Roky
                    generatedCards.push({
                        type: 'Období ➔ Roky',
                        prompt: `Kdy probíhalo toto období / směr?\n\n"${eraName}"`,
                        answer: years
                    });
                    
                    // Roky -> Směr
                    generatedCards.push({
                        type: 'Roky ➔ Období',
                        prompt: `Který směr / období probíhalo v letech:\n\n${years}?`,
                        answer: eraName
                    });
                }
            }
        }


        // 0. Mixed Author <-> Work (requested by user)
        if (filters.types.includes('authors-works')) {
            const sideA = auth.author;
            const sideB = auth.title + (auth.otherWorks.length > 0 ? `\n\nDalší: ${auth.otherWorks.slice(0, 2).map(w => w.split(' — ')[0]).join(', ')}` : '');
            
            const isSwapped = Math.random() > 0.5;
            generatedCards.push({
                type: 'Autor ↔ Dílo',
                prompt: isSwapped ? sideB : sideA,
                answer: isSwapped ? sideA : sideB,
                isMixed: true
            });
        }

        if (filters.types.includes('everything')) {
            // 1. Znalost díla -> Autor
            generatedCards.push({
                type: 'Dílo ➔ Autor',
                prompt: `Kdo napsal dílo:\n"${auth.title}"?`,
                answer: auth.author
            });

            // 1b. Znalost autora -> Dílo
            generatedCards.push({
                type: 'Autor ➔ Dílo',
                prompt: `Jaké je stěžejní dílo autora:\n${auth.author}?`,
                answer: auth.title
            });

            // 2. Kontextové období
            if (auth.origin && auth.era) {
                generatedCards.push({
                    type: 'Umělecký směr',
                    prompt: `Do jakého směru a doby patří:\n${auth.author}?`,
                    answer: `${auth.origin}\n${auth.era}`
                });
            }

            // 3. Tvorba -> Díla
            if (auth.otherWorks.length > 0) {
                generatedCards.push({
                    type: 'Další tvorba',
                    prompt: `Vyjmenuj alespoň 2 další díla autora:\n${auth.author}`,
                    answer: auth.otherWorks.join('\n')
                });
            }

            // 4. Současníci
            if (auth.contemporaries.length > 0) {
               generatedCards.push({
                   type: 'Dobový kontext',
                   prompt: `Jmenuj současníky nebo vzory k autorovi:\n${auth.author}`,
                   answer: auth.contemporaries.join('\n')
               });
            }

            // 5. Zajímavosti (poznej autora)
            if (auth.info.length > 0) {
                generatedCards.push({
                    type: 'Zajímavost',
                    prompt: `K jakému autorovi se váže tato zajímavost?\n\n"${auth.info}"`,
                    answer: auth.author
                });
            }

            // 6. Ekvivalenty
            if (auth.equivalent && auth.equivalent !== "—" && !auth.equivalent.startsWith("—")) {
               generatedCards.push({
                   type: 'Srovnání / Ekvivalent',
                   prompt: `Jaký je český / světový ekvivalent k autorovi či dílu:\n${auth.author}?`,
                   answer: auth.equivalent
               });
            }
        }
    });

    // Shuffle result
    return generatedCards.sort(() => Math.random() - 0.5);
}


// Global stav
let rawAuthors = [];
let atomicDeck = [];
let currentCardIndex = 0;
let flashcardFlipped = false;

// Quiz stav
let quizActive = true;
let quizScore = 0;
let quizCard = null;

// Match stav
let matchActive = true;
let matchScore = 0;
let matchCard = null;
let currentSelectedOptions = new Set();
let correctMatchOptions = [];

// DOM Elementy
const tabStudy = document.getElementById('tab-study');
const tabQuiz = document.getElementById('tab-quiz');
const tabMatch = document.getElementById('tab-match');
const viewStudy = document.getElementById('view-study');
const viewQuiz = document.getElementById('view-quiz');
const viewMatch = document.getElementById('view-match');

const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const progressText = document.getElementById('study-progress-text');
const totalCardsBadge = document.getElementById('total-cards-badge');

// Init
function init() {
    rawAuthors = parseAuthorProfiles(rawData);
    


    atomicDeck = generateAtomicCards(rawAuthors);
    
    totalCardsBadge.innerText = atomicDeck.length;
    renderStudyCard();
    setupEventListeners();
    generateQuizQuestion();
    generateMatchQuestion();
}

function setupEventListeners() {
    // Tabs
    tabStudy.addEventListener('click', () => switchTab('study'));
    tabQuiz.addEventListener('click', () => switchTab('quiz'));

    // Study Controls
    flashcard.addEventListener('click', () => {
        flashcardFlipped = !flashcardFlipped;
        if (flashcardFlipped) {
            flashcard.classList.add('flipped');
        } else {
            flashcard.classList.remove('flipped');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            changeCard(currentCardIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < atomicDeck.length - 1) {
            changeCard(currentCardIndex + 1);
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        // Only if study view is active
        if (!viewStudy.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            if (currentCardIndex > 0) changeCard(currentCardIndex - 1);
        } else if (e.key === 'ArrowRight') {
            if (currentCardIndex < atomicDeck.length - 1) changeCard(currentCardIndex + 1);
        } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault(); // Prevent scrolling with space/arrows
            flashcard.click();
        }
    });

    shuffleBtn.addEventListener('click', () => {
        // Fisher-Yates zamíchání
        for (let i = atomicDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [atomicDeck[i], atomicDeck[j]] = [atomicDeck[j], atomicDeck[i]];
        }
        currentCardIndex = 0;
        changeCard(0);
    });

    // Quiz Controls
    document.getElementById('quiz-next-btn').addEventListener('click', () => {
        generateQuizQuestion();
    });

    // Match Controls
    tabMatch.addEventListener('click', () => switchTab('match'));
    document.getElementById('match-check-btn').addEventListener('click', handleMatchCheck);
    document.getElementById('match-next-btn').addEventListener('click', generateMatchQuestion);

    // Filter Controls
    const filterPanel = document.getElementById('filter-panel');
    document.getElementById('open-filters-btn').addEventListener('click', () => {
        filterPanel.classList.add('active');
    });
    document.getElementById('close-filters-btn').addEventListener('click', () => {
        filterPanel.classList.remove('active');
    });
    document.getElementById('apply-filters-btn').addEventListener('click', applyFilters);
}

function applyFilters() {
    const types = [];
    if (document.getElementById('type-authors-works').checked) types.push('authors-works');
    if (document.getElementById('type-eras-years').checked) types.push('eras-years');
    if (document.getElementById('type-everything').checked) types.push('everything');

    if (types.length === 0) {
        alert('Vyber alespoň jeden typ karet!');
        return;
    }

    const filters = {
        types: types
    };

    atomicDeck = generateAtomicCards(rawAuthors, filters);
    totalCardsBadge.innerText = atomicDeck.length;
    currentCardIndex = 0;
    
    document.getElementById('filter-panel').classList.remove('active');
    
    if (atomicDeck.length > 0) {
        renderStudyCard();
    } else {
        alert('Pro tento výběr nebyly nalezeny žádné karty.');
    }
}

function switchTab(tab) {
    [tabStudy, tabQuiz, tabMatch].forEach(t => t.classList.remove('active'));
    [viewStudy, viewQuiz, viewMatch].forEach(v => v.classList.remove('active'));

    if (tab === 'study') {
        tabStudy.classList.add('active');
        viewStudy.classList.add('active');
    } else if (tab === 'quiz') {
        tabQuiz.classList.add('active');
        viewQuiz.classList.add('active');
    } else {
        tabMatch.classList.add('active');
        viewMatch.classList.add('active');
    }
}

function changeCard(newIndex) {
    flashcardFlipped = false;
    flashcard.classList.remove('flipped');
    currentCardIndex = newIndex;
    
    // Malý timeout pro zachování plynulosti animace otočení zpět před změnou obsahu
    setTimeout(() => {
        renderStudyCard();
    }, 200);
}

function renderStudyCard() {
    const card = atomicDeck[currentCardIndex];
    if (!card) return;

    const frontEl = document.getElementById('card-front-prompt');
    const backEl = document.getElementById('card-back-answer');

    progressText.innerText = `${currentCardIndex + 1} / ${atomicDeck.length}`;

    // Nastavení textů front/back
    document.getElementById('card-type-badge-front').innerText = card.type;
    document.getElementById('card-type-badge-back').innerText = card.type;
    
    // Convert newlines to breaks for HTML
    const formatText = (text) => text.replace(/\n/g, '<br>');
    
    frontEl.innerHTML = formatText(card.prompt);
    backEl.innerHTML = formatText(card.answer);

    // Speciální stylování pro "Další díla" v míchaných kartách
    if (card.isMixed) {
        frontEl.innerHTML = frontEl.innerHTML.replace('Další:', '<span class="mixed-authors">Další:</span>');
        backEl.innerHTML = backEl.innerHTML.replace('Další:', '<span class="mixed-authors">Další:</span>');
    }

    // Dynamické zmenšení textu pokud je moc dlouhý
    if (card.prompt.length > 80) {
        frontEl.style.fontSize = '1.6rem';
    } else if (card.prompt.length > 40) {
        frontEl.style.fontSize = '2rem';
    } else {
        frontEl.style.fontSize = '';
    }

    if (card.answer.length > 80) {
        backEl.style.fontSize = '1.4rem';
    } else if (card.answer.length > 40) {
        backEl.style.fontSize = '1.8rem';
    } else {
        backEl.style.fontSize = '';
    }
}

// --- Quiz Logic (založeno na základních profilech) ---
function generateQuizQuestion() {
    quizActive = true;
    document.getElementById('quiz-next-btn').classList.add('hidden');
    document.getElementById('quiz-feedback').innerText = '';
    
    const isAskAuthor = Math.random() > 0.5;
    
    // Vyber náhodného správného autora/dílo z původních dat (rawAuthors)
    const correctIndex = Math.floor(Math.random() * rawAuthors.length);
    quizCard = rawAuthors[correctIndex];

    const questionEl = document.getElementById('quiz-question');
    if (isAskAuthor) {
        document.querySelector('.quiz-header h3').innerText = 'Kdo napsal toto dílo?';
        questionEl.innerText = quizCard.title;
    } else {
        document.querySelector('.quiz-header h3').innerText = 'Které z těchto děl napsal tento autor?';
        questionEl.innerText = quizCard.author;
    }

    // Generuj možnosti (1 správná, 3 náhodné)
    let options = [{
        text: isAskAuthor ? quizCard.author : quizCard.title,
        correct: true
    }];

    while(options.length < 4) {
        const randCard = rawAuthors[Math.floor(Math.random() * rawAuthors.length)];
        const optText = isAskAuthor ? randCard.author : randCard.title;
        
        // Zabráníme duplikacím
        if (!options.find(o => o.text === optText)) {
            options.push({
                text: optText,
                correct: false
            });
        }
    }

    // Zamíchat možnosti
    options = options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt.text;
        btn.onclick = () => handleQuizAnswer(opt.correct, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(isCorrect, btn) {
    if (!quizActive) return;
    quizActive = false;

    const allOpts = document.querySelectorAll('.quiz-option');
    allOpts.forEach(b => b.disabled = true);

    const feedback = document.getElementById('quiz-feedback');

    if (isCorrect) {
        btn.classList.add('correct');
        feedback.innerText = 'Správně! 🎉';
        feedback.className = 'quiz-feedback success';
        quizScore++;
    } else {
        btn.classList.add('wrong');
        feedback.innerText = 'Špatně! 😢';
        feedback.className = 'quiz-feedback error';
        
        // Najdi správnou odpověď a obarvi ji
        allOpts.forEach(b => {
             const isThisCorrect = b.innerText === (document.getElementById('quiz-question').innerText === quizCard.title ? quizCard.author : quizCard.title) || 
            b.innerText === (document.getElementById('quiz-question').innerText === quizCard.author ? quizCard.title : quizCard.author);
            if(isThisCorrect) {
               b.classList.add('correct');
            }
        });
    }

    document.getElementById('quiz-score').innerText = quizScore;
    document.getElementById('quiz-next-btn').classList.remove('hidden');
}

// --- Match Logic ---
function generateMatchQuestion() {
    matchActive = true;
    currentSelectedOptions.clear();
    document.getElementById('match-next-btn').classList.add('hidden');
    document.getElementById('match-check-btn').classList.remove('hidden');
    document.getElementById('match-feedback').innerText = '';
    
    // Vyber náhodného autora
    const correctIndex = Math.floor(Math.random() * rawAuthors.length);
    matchCard = rawAuthors[correctIndex];
    document.getElementById('match-question').innerText = matchCard.author;

    // Sestav správné odpovědi (Díla, Jiná díla, Možná i něco dalšího)
    correctMatchOptions = [
        matchCard.title,
        ...matchCard.otherWorks.map(w => w.split(' — ')[0].trim())
    ];

    // Sestav mix (8 celkem)
    let allOptions = correctMatchOptions.map(text => ({ text, correct: true }));
    
    // Přidej distractory od jiných autorů
    while (allOptions.length < 8) {
        const randAuth = rawAuthors[Math.floor(Math.random() * rawAuthors.length)];
        if (randAuth.author === matchCard.author) continue;

        const possibleDistractors = [
            randAuth.title,
            ...randAuth.otherWorks.map(w => w.split(' — ')[0].trim())
        ];
        const dist = possibleDistractors[Math.floor(Math.random() * possibleDistractors.length)];
        
        if (!allOptions.find(o => o.text === dist)) {
            allOptions.push({ text: dist, correct: false });
        }
    }

    // Pokud máme náhodou víc než 4 správné, některé ubereme pro obtížnost (nebo necháme)
    // Ale raději omezíme na max 4 správné ať je tam dost špatných
    let correctOnes = allOptions.filter(o => o.correct);
    if (correctOnes.length > 4) {
        // Ponecháme jen 4 náhodné správné
        const toKeep = correctOnes.sort(() => Math.random() - 0.5).slice(0, 4);
        const incorrectOnes = allOptions.filter(o => !o.correct);
        allOptions = [...toKeep, ...incorrectOnes];
    }
    
    // Doplníme do 8 pokud jsme ubrali
    while (allOptions.length < 8) {
        const randAuth = rawAuthors[Math.floor(Math.random() * rawAuthors.length)];
        const dist = randAuth.title;
        if (!allOptions.find(o => o.text === dist)) {
            allOptions.push({ text: dist, correct: false });
        }
    }

    // Zamíchat
    allOptions = allOptions.sort(() => Math.random() - 0.5);

    const container = document.getElementById('match-options');
    container.innerHTML = '';

    allOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'match-option';
        btn.innerText = opt.text;
        btn.onclick = () => {
            if (!matchActive) return;
            if (currentSelectedOptions.has(opt.text)) {
                currentSelectedOptions.delete(opt.text);
                btn.classList.remove('selected');
            } else {
                currentSelectedOptions.add(opt.text);
                btn.classList.add('selected');
            }
        };
        container.appendChild(btn);
    });
}

function handleMatchCheck() {
    if (!matchActive) return;
    matchActive = false;

    const btns = document.querySelectorAll('.match-option');
    let allCorrect = true;
    let foundCorrectCount = 0;
    const actualCorrectOnes = correctMatchOptions; // These are strings

    btns.forEach(btn => {
        btn.disabled = true;
        const isSelected = currentSelectedOptions.has(btn.innerText);
        const isActuallyCorrect = actualCorrectOnes.includes(btn.innerText);

        if (isSelected && isActuallyCorrect) {
            btn.classList.add('correct');
            foundCorrectCount++;
        } else if (isSelected && !isActuallyCorrect) {
            btn.classList.add('wrong');
            allCorrect = false;
        } else if (!isSelected && isActuallyCorrect) {
            // Označíme ty, co měly být vybrány
            btn.style.borderColor = 'var(--success)';
            btn.style.borderStyle = 'dashed';
            allCorrect = false;
        }
    });

    // Musí vybrat VŠECHNY správné co tam jsou
    const totalCorrectInPool = Array.from(btns).filter(b => actualCorrectOnes.includes(b.innerText)).length;
    if (foundCorrectCount !== totalCorrectInPool) allCorrect = false;

    const feedback = document.getElementById('match-feedback');
    if (allCorrect) {
        feedback.innerText = 'Perfektní! Vybral jsi všechny správné. 🌟';
        feedback.className = 'quiz-feedback success';
        matchScore++;
    } else {
        feedback.innerText = 'Něco chybí nebo je navíc. 😕';
        feedback.className = 'quiz-feedback error';
    }

    document.getElementById('match-score').innerText = matchScore;
    document.getElementById('match-check-btn').classList.add('hidden');
    document.getElementById('match-next-btn').classList.remove('hidden');
}

// Spustit
init();
