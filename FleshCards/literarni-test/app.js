// Quiz state
let currentQuestionIndex = 0
let userAnswers = {}
let currentQuestions = []
let currentWork = "all" // Track current literary work
let currentCategories = ['genre', 'author', 'authorDetails', 'authorPeriod'] // Track selected categories
let wrongAnswers = new Map() // Track wrong answers using Map to store user's answers and original question state
let showingWrongOnly = false // Track if we're showing only wrong answers
let lastAllQuestionsIndex = 0 // Track last position in all questions
let lastWrongQuestionsIndex = 0 // Track last position in wrong questions
let starredQuestions = new Set() // Track starred questions
let testMode = false // Track if we're in test mode

// Add shuffled data storage
let shuffledQuizData = []
let originalQuizData = []

// Module ranges - these will be determined dynamically
let moduleRanges = {}

// Add reference to shuffling functions
let shuffleEnabled = true // Set to false to disable shuffling for testing

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadState()
  setupEventListeners()
  setupKeyboardShortcuts()
  // Initially show work selection
  showWorkSelection()
})

// Event listeners
function setupEventListeners() {
  // Work selection buttons
  document.getElementById("gatsbyBtn").addEventListener("click", () => selectWork("gatsby"))
  document.getElementById("romeoBtn").addEventListener("click", () => selectWork("romeo"))
  document.getElementById("hamletBtn").addEventListener("click", () => selectWork("hamlet"))
  document.getElementById("bilaNemocBtn").addEventListener("click", () => selectWork("bilaNemoc"))
  document.getElementById("kyticeBtn").addEventListener("click", () => selectWork("kytice"))
  document.getElementById("allWorksBtn").addEventListener("click", () => selectWork("all"))
  
  // Category checkboxes
  document.getElementById("genreCheckbox").addEventListener("change", updateSelectedCategories)
  document.getElementById("authorCheckbox").addEventListener("change", updateSelectedCategories)
  document.getElementById("authorDetailsCheckbox").addEventListener("change", updateSelectedCategories)
  document.getElementById("authorPeriodCheckbox").addEventListener("change", updateSelectedCategories)
  
  // Start test button
  document.getElementById("startTestBtn").addEventListener("click", startTest)
  
  // Import/Export buttons
  document.getElementById("exportTemplateBtn").addEventListener("click", exportTemplate)
  document.getElementById("exportDataBtn").addEventListener("click", exportAllData)
  document.getElementById("importDataBtn").addEventListener("click", () => document.getElementById("importFileInput").click())
  document.getElementById("importFileInput").addEventListener("change", importDataFromFile)
  
  // Existing buttons
  document.getElementById("allQuestionsBtn").addEventListener("click", showAllQuestions)
  document.getElementById("wrongQuestionsBtn").addEventListener("click", showWrongQuestions)
  document.getElementById("resetBtn").addEventListener("click", resetQuiz)
  document.getElementById("backToSelectionBtn").addEventListener("click", showWorkSelection)
  document.getElementById("nextBtn").addEventListener("click", nextQuestion)
  document.getElementById("prevBtn").addEventListener("click", prevQuestion)
  document.getElementById("starBtn").addEventListener("click", toggleStarQuestion)
  document.getElementById("restartBtn").addEventListener("click", restartQuiz)
}

// Show work selection screen
function showWorkSelection() {
  // Hide quiz container and controls
  document.getElementById("quizContainer").classList.add("hidden")
  document.getElementById("controlsSection").classList.add("hidden")
  document.getElementById("completionScreen").classList.add("hidden")
  
  // Show work selection and category selection
  document.getElementById("workSelection").classList.remove("hidden")
  document.getElementById("categorySelection").classList.remove("hidden")
  
  // Reset selections
  currentWork = "all"
  currentCategories = ['genre', 'author', 'authorDetails', 'authorPeriod']
  
  // Update UI
  document.querySelectorAll(".work-btn").forEach(btn => {
    btn.classList.remove("active")
  })
  document.getElementById("allWorksBtn").classList.add("active")
  
  // Check all checkboxes by default
  document.getElementById("genreCheckbox").checked = true
  document.getElementById("authorCheckbox").checked = true
  document.getElementById("authorDetailsCheckbox").checked = true
  document.getElementById("authorPeriodCheckbox").checked = true
}

// Select literary work
function selectWork(work) {
  currentWork = work
  
  // Update active button
  document.querySelectorAll(".work-btn").forEach(btn => {
    btn.classList.remove("active")
  })
  document.getElementById(`${work}Btn`).classList.add("active")
}

// Update selected categories based on checkboxes
function updateSelectedCategories() {
  currentCategories = []
  
  if (document.getElementById("genreCheckbox").checked) {
    currentCategories.push('genre')
  }
  if (document.getElementById("authorCheckbox").checked) {
    currentCategories.push('author')
  }
  if (document.getElementById("authorDetailsCheckbox").checked) {
    currentCategories.push('authorDetails')
  }
  if (document.getElementById("authorPeriodCheckbox").checked) {
    currentCategories.push('authorPeriod')
  }
}

// Start test with selected work and categories
function startTest() {
  if (currentCategories.length === 0) {
    alert("Vyberte alespoň jednu kategorii otázek.")
    return
  }
  
  // Filter questions based on selected work and categories
  currentQuestions = filterQuestionsByWorkAndCategory(currentWork, currentCategories)
  
  if (currentQuestions.length === 0) {
    alert("Pro vybrané nastavení nejsou dostupné žádné otázky.")
    return
  }
  
  // Hide selection screens
  document.getElementById("workSelection").classList.add("hidden")
  document.getElementById("categorySelection").classList.add("hidden")
  
  // Show quiz interface
  document.getElementById("controlsSection").classList.remove("hidden")
  document.getElementById("quizContainer").classList.remove("hidden")
  
  // Reset quiz state
  currentQuestionIndex = 0
  showingWrongOnly = false
  testMode = true
  
  // Update UI
  document.getElementById("allQuestionsBtn").classList.add("active")
  document.getElementById("wrongQuestionsBtn").classList.remove("active")
  
  showQuestion()
}

// Filter questions by work and category
function filterQuestionsByWorkAndCategory(work, categories) {
  // Use the actual literature data
  return getLiteratureQuestions(work, categories)
}

// Export template structure
function exportTemplate() {
  const template = {
    works: {
      "example-work": {
        title: "Název díla",
        author: "Jméno autora",
        period: "Historické období",
        genre: "Literární žánr",
        questions: {
          genre: [
            {
              question: "Otázka na žánr",
              answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
              correct: [0] // Index správné odpovědi (začíná od 0)
            }
          ],
          author: [
            {
              question: "Otázka na autora",
              answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3"],
              correct: [0]
            }
          ],
          authorDetails: [
            {
              question: "Detailní otázka na autora",
              answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
              correct: [0, 1] // Více správných odpovědí
            }
          ],
          authorPeriod: [
            {
              question: "Otázka na dobu autora",
              answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3"],
              correct: [0]
            }
          ]
        }
      }
    },
    metadata: {
      version: "1.0",
      created: new Date().toISOString(),
      description: "Šablona pro vytváření literárních otázek"
    }
  };
  
  downloadJSON(template, "literatura-template.json");
}

// Export all current data
function exportAllData() {
  const exportData = {
    works: literatureData,
    metadata: {
      version: "1.0",
      exported: new Date().toISOString(),
      worksCount: Object.keys(literatureData).length,
      totalQuestions: getTotalQuestionsCount()
    }
  };
  
  downloadJSON(exportData, "literatura-data.json");
}

// Import data from file
function importDataFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      
      // Validate imported data structure
      if (!validateImportedData(importedData)) {
        alert("Neplatná struktura importovaného souboru!");
        return;
      }
      
      // Merge or replace data
      if (importedData.works) {
        literatureData = {...literatureData, ...importedData.works};
        alert(`Úspěšně importováno ${Object.keys(importedData.works).length} děl!`);
        
        // Refresh UI
        showWorkSelection();
      }
    } catch (error) {
      alert("Chyba při čtení souboru: " + error.message);
    }
  };
  
  reader.readAsText(file);
  // Reset file input
  event.target.value = "";
}

// Helper function to download JSON
function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Validate imported data structure
function validateImportedData(data) {
  if (!data || typeof data !== "object") return false;
  
  // Check if it's template or full data
  if (data.works) {
    // Full data validation
    for (const [workKey, workData] of Object.entries(data.works)) {
      if (!workData.title || !workData.author || !workData.questions) {
        return false;
      }
      
      // Validate question categories
      const requiredCategories = ["genre", "author", "authorDetails", "authorPeriod"];
      for (const category of requiredCategories) {
        if (workData.questions[category]) {
          for (const question of workData.questions[category]) {
            if (!question.question || !Array.isArray(question.answers) || !Array.isArray(question.correct)) {
              return false;
            }
          }
        }
      }
    }
  }
  
  return true;
}

// Get total questions count
function getTotalQuestionsCount() {
  let count = 0;
  for (const workData of Object.values(literatureData)) {
    if (workData.questions) {
      for (const categoryQuestions of Object.values(workData.questions)) {
        count += categoryQuestions.length;
      }
    }
  }
  return count;
}

// This function is now handled by the external literature-data.js file
// Keeping it for reference but it won't be called
function getSampleLiteratureQuestions(work, categories) {
  // Placeholder function - actual implementation is in literature-data.js
  console.log("Using external literature data instead of sample questions")
  return [];
}

// This function is no longer needed for literature quiz
// Keeping it for reference but it won't be called
function selectModule(module) {
  // Placeholder function - literature quiz uses different selection system
  console.log("Module selection not used in literature quiz")
}

// Create test with selected questions (replaces createTestQuestions)
function createLiteratureTest() {
  // This function is now handled by startTest() which filters by work and category
  return currentQuestions
}

// Show question
function showQuestion() {
  if (currentQuestionIndex >= currentQuestions.length) {
    showCompletionScreen()
    return
  }

  const question = currentQuestions[currentQuestionIndex]
  // For literature questions, create a unique identifier
  const questionId = `${question.work || "unknown"}_${question.category || "unknown"}_${currentQuestionIndex}`

  // Check if we're showing wrong answers
  let userAnswer = userAnswers[questionId]
  let wrongAnswerData = null
  
  // Create a copy of the question to avoid modifying the original
  let displayQuestion = {...question, answers: [...question.answers]}
  
  if (showingWrongOnly && window.wrongAnswersData) {
    wrongAnswerData = window.wrongAnswersData[currentQuestionIndex]
    if (wrongAnswerData) {
      userAnswer = wrongAnswerData.userAnswer
      // Use the preserved answer order when showing wrong answers
      if (wrongAnswerData.originalAnswers) {
        displayQuestion.answers = [...wrongAnswerData.originalAnswers]
      }
      // Also update the correct answers to match the preserved order
      if (wrongAnswerData.correct) {
        displayQuestion.correct = [...wrongAnswerData.correct]
      }
    }
  }

  const hasAnswered = userAnswer !== undefined

  document.getElementById("questionText").textContent = `${currentQuestionIndex + 1}. ${displayQuestion.question}`

  const answersContainer = document.getElementById("answersContainer")
  answersContainer.innerHTML = ""

  const isMultipleChoice = displayQuestion.correct.length > 1

  displayQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button")
    button.className = "answer-option"
    button.textContent = answer

    if (hasAnswered) {
      button.classList.add("disabled")

      if (Array.isArray(userAnswer)) {
        if (userAnswer.includes(index) && !displayQuestion.correct.includes(index)) {
          button.classList.add("incorrect")
        }
      } else {
        if (userAnswer === index && !displayQuestion.correct.includes(index)) {
          button.classList.add("incorrect")
        }
      }

      if (displayQuestion.correct.includes(index)) {
        button.classList.add("correct")
      }
    } else {
      if (isMultipleChoice) {
        // Only allow selection if not yet submitted
        button.addEventListener("click", (event) => toggleMultipleAnswer(index, questionId, event))
        if (userAnswer && Array.isArray(userAnswer) && userAnswer.includes(index)) {
          button.classList.add("selected")
        }
      } else {
        // Single choice questions
        button.addEventListener("click", (event) => selectAnswer(index, questionId, event))
      }
    }

    answersContainer.appendChild(button)
  })

  // Add submit button for multiple choice if not answered
  if (isMultipleChoice && !hasAnswered) {
    const submitBtn = document.createElement("button")
    submitBtn.id = "submitBtn"
    submitBtn.className = "nav-btn"
    submitBtn.textContent = "Odeslat odpověď"
    submitBtn.style.marginTop = "15px"
    submitBtn.addEventListener("click", () => submitMultipleAnswer(questionId))
    answersContainer.appendChild(submitBtn)
  }

  // Show feedback if already answered
  const feedbackEl = document.getElementById("feedback")
  if (hasAnswered) {
    const isCorrect = checkAnswer(userAnswer, displayQuestion.correct)
    feedbackEl.className = `feedback ${isCorrect ? "correct" : "incorrect"}`
    
    if (showingWrongOnly) {
      // Show detailed feedback for wrong answers
      let feedbackText = "✗ Špatně! Správná odpověď je zvýrazněna zeleně."
      
      // Add user's answer information
      if (Array.isArray(userAnswer)) {
        const userAnswerText = userAnswer.map(idx => displayQuestion.answers[idx]).join(", ")
        const correctAnswerText = displayQuestion.correct.map(idx => displayQuestion.answers[idx]).join(", ")
        feedbackText += ` Vaše odpověď: ${userAnswerText}. Správná odpověď: ${correctAnswerText}.`
      } else {
        const userAnswerText = displayQuestion.answers[userAnswer]
        const correctAnswerText = displayQuestion.correct.map(idx => displayQuestion.answers[idx]).join(", ")
        feedbackText += ` Vaše odpověď: ${userAnswerText}. Správná odpověď: ${correctAnswerText}.`
      }
      
      feedbackEl.textContent = feedbackText
    } else {
      feedbackEl.textContent = isCorrect ? "✓ Správně!" : "✗ Špatně! Správná odpověď je zvýrazněna zeleně."
      
      // Track wrong answers (only when not in wrong answers mode)
      if (!isCorrect) {
        // Preserve the original answer order when tracking wrong answers
        wrongAnswers.set(questionId, {
          question: question,
          userAnswer: userAnswer,
          originalAnswers: [...question.answers], // Preserve the current answer order
          correct: [...question.correct] // Preserve the correct answer indices
        })
        saveWrongAnswersState()
      } else if (wrongAnswers.has(questionId)) {
        // Remove from wrong answers if user corrected their mistake
        wrongAnswers.delete(questionId)
        saveWrongAnswersState()
      }
    }
  } else {
    feedbackEl.className = "feedback hidden"
  }

  // Update star button state
  const starBtn = document.getElementById("starBtn")
  if (starredQuestions.has(questionId)) {
    starBtn.classList.add("starred")
    starBtn.textContent = "★"
  } else {
    starBtn.classList.remove("starred")
    starBtn.textContent = "★"
  }

  updateNavigationButtons()
  updateStats()
}

// This function is no longer needed for literature quiz
// Keeping it for reference but it won't be called
function getOriginalQuestionIndex(question) {
  // Placeholder function - literature quiz uses question IDs instead of indexes
  console.log("Index lookup not used in literature quiz")
  return -1;
}

// Toggle multiple answer selection
function toggleMultipleAnswer(answerIndex, questionId, event) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = []
  }

  const answers = userAnswers[questionId]
  const idx = answers.indexOf(answerIndex)

  if (idx > -1) {
    answers.splice(idx, 1)
  } else {
    answers.push(answerIndex)
  }

  // Update the UI to reflect the selection
  const button = event.target;
  button.classList.toggle('selected');
}

// Submit multiple answer
function submitMultipleAnswer(questionId) {
  const userAnswer = userAnswers[questionId]
  if (!userAnswer || userAnswer.length === 0) {
    alert("Vyberte alespoň jednu odpověď.")
    return
  }

  const question = currentQuestions.find(q => `${q.work}_${q.category}_${currentQuestions.indexOf(q)}` === questionId)
  const isCorrect = checkAnswer(userAnswer, question.correct)

  saveState()
  showQuestion()
}

// Select single answer
function selectAnswer(answerIndex, questionId, event) {
  userAnswers[questionId] = answerIndex

  const question = currentQuestions.find(q => `${q.work}_${q.category}_${currentQuestions.indexOf(q)}` === questionId)
  const isCorrect = question.correct.includes(answerIndex)

  saveState()
  showQuestion()
}

// Check if answer is correct
function checkAnswer(userAnswer, correctAnswers) {
  if (Array.isArray(userAnswer)) {
    if (userAnswer.length !== correctAnswers.length) return false
    return userAnswer.every((a) => correctAnswers.includes(a))
  }
  return correctAnswers.includes(userAnswer)
}

// Toggle star for current question
function toggleStarQuestion() {
  const question = currentQuestions[currentQuestionIndex]
  const questionId = `${question.work || "unknown"}_${question.category || "unknown"}_${currentQuestionIndex}`
  
  if (starredQuestions.has(questionId)) {
    starredQuestions.delete(questionId)
  } else {
    starredQuestions.add(questionId)
  }
  
  saveStarredQuestionsState()
  showQuestion()
}

// Navigation
function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++
    showQuestion()
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--
    showQuestion()
  }
}

function updateNavigationButtons() {
  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0
  document.getElementById("nextBtn").disabled = currentQuestionIndex >= currentQuestions.length - 1
}

// Show all questions (filtered by current work and categories)
function showAllQuestions() {
  // Save current position if we're switching from wrong questions
  if (showingWrongOnly) {
    lastWrongQuestionsIndex = currentQuestionIndex
  }
  
  // Refilter questions based on current work and categories
  currentQuestions = filterQuestionsByWorkAndCategory(currentWork, currentCategories)
  
  // Restore last position
  currentQuestionIndex = lastAllQuestionsIndex
  if (currentQuestionIndex >= currentQuestions.length) {
    currentQuestionIndex = currentQuestions.length > 0 ? currentQuestions.length - 1 : 0
  }
  
  showingWrongOnly = false

  document.getElementById("allQuestionsBtn").classList.add("active")
  document.getElementById("wrongQuestionsBtn").classList.remove("active")
  document.getElementById("quizContainer").classList.remove("hidden")
  document.getElementById("completionScreen").classList.add("hidden")

  showQuestion()
}

// Show wrong questions (filtered by current work and categories)
function showWrongQuestions() {
  // Save current position if we're switching from all questions
  if (!showingWrongOnly) {
    lastAllQuestionsIndex = currentQuestionIndex
  }
  
  // Filter wrong answers for current work and categories
  let filteredWrongAnswers = []
  const wrongAnswersArray = Array.from(wrongAnswers.entries())
  
  // Filter based on work and categories
  wrongAnswersArray.forEach(([index, data]) => {
    // In literature quiz, we filter by the question properties
    const question = data.question || quizData[index]
    if (question) {
      // Check if question matches current work selection
      const questionWork = question.work || "all"
      const workMatches = (currentWork === "all") || (questionWork === currentWork)
      
      // Check if question matches current category selection
      const questionCategory = question.category || "genre"
      const categoryMatches = currentCategories.includes(questionCategory)
      
      if (workMatches && categoryMatches) {
        filteredWrongAnswers.push({
          question: question,
          originalIndex: index,
          userAnswer: data.userAnswer,
          originalAnswers: data.originalAnswers,
          correct: data.correct
        })
      }
    }
  })
  
  if (filteredWrongAnswers.length === 0) {
    alert("Nemáte žádné špatné odpovědi pro vybrané dílo a kategorie.")
    return
  }
  
  // Store the wrong answers data for display
  window.wrongAnswersData = filteredWrongAnswers
  
  currentQuestions = filteredWrongAnswers.map(item => item.question)
  
  // Restore last position
  currentQuestionIndex = lastWrongQuestionsIndex
  if (currentQuestionIndex >= currentQuestions.length) {
    currentQuestionIndex = currentQuestions.length > 0 ? currentQuestions.length - 1 : 0
  }
  
  showingWrongOnly = true

  document.getElementById("allQuestionsBtn").classList.remove("active")
  document.getElementById("wrongQuestionsBtn").classList.add("active")
  document.getElementById("quizContainer").classList.remove("hidden")
  document.getElementById("completionScreen").classList.add("hidden")

  showQuestion()
}

// Reset quiz - clear answers but keep settings
function resetQuiz() {
  if (confirm("Opravdu chcete resetovat odpovědi? Všechny vaše odpovědi budou smazány.")) {
    userAnswers = {}
    wrongAnswers = new Map()
    // Keep starred questions - don't reset them
    currentQuestionIndex = 0
    
    // Refilter questions based on current settings
    currentQuestions = filterQuestionsByWorkAndCategory(currentWork, currentCategories)

    localStorage.removeItem("quizAnswers")
    localStorage.removeItem("quizWrongQuestions")
    // Don't remove starred questions from localStorage

    document.getElementById("allQuestionsBtn").classList.add("active")
    document.getElementById("wrongQuestionsBtn").classList.remove("active")
    document.getElementById("quizContainer").classList.remove("hidden")
    document.getElementById("completionScreen").classList.add("hidden")

    showQuestion()
  }
}

// Restart quiz
function restartQuiz() {
  currentQuestionIndex = 0
  // Clear user answers when restarting but keep wrong answers and starred questions
  userAnswers = {}
  showingWrongOnly = false
  testMode = true
  
  // Refilter questions based on current settings
  currentQuestions = filterQuestionsByWorkAndCategory(currentWork, currentCategories)
  
  document.getElementById("allQuestionsBtn").classList.add("active")
  document.getElementById("wrongQuestionsBtn").classList.remove("active")
  document.getElementById("quizContainer").classList.remove("hidden")
  document.getElementById("completionScreen").classList.add("hidden")
  showQuestion()
}

// Update answer selection UI without re-rendering the whole question
function updateAnswerSelection(questionIndex) {
  // Make sure we have a valid question index
  if (questionIndex === -1) return;
  
  const answersContainer = document.getElementById("answersContainer")
  const answerButtons = answersContainer.querySelectorAll('.answer-option')
  const userAnswer = userAnswers[questionIndex]
  
  // Update the visual state of answer buttons
  answerButtons.forEach((button, index) => {
    button.classList.remove('selected')
    if (userAnswer && Array.isArray(userAnswer) && userAnswer.includes(index)) {
      button.classList.add('selected')
    }
  })
}

// Update stats
function updateStats() {
  const totalQuestions = currentQuestions.length
  const answeredCount = currentQuestions.filter((q, idx) => {
    // For literature questions, we check if the question has been answered
    const questionId = `${q.work || "unknown"}_${q.category || "unknown"}_${idx}`
    return userAnswers[questionId] !== undefined
  }).length

  document.getElementById("questionCounter").textContent = `Otázka ${currentQuestionIndex + 1} z ${totalQuestions}`
  document.getElementById("score").textContent = `Zodpovězeno: ${answeredCount}/${totalQuestions}`
}

// Completion screen
function showCompletionScreen() {
  const totalQuestions = currentQuestions.length
  const correctCount = currentQuestions.filter((q, idx) => {
    const questionId = `${q.work || "unknown"}_${q.category || "unknown"}_${idx}`
    const userAnswer = userAnswers[questionId]
    return userAnswer !== undefined && checkAnswer(userAnswer, q.correct)
  }).length

  const percentage = Math.round((correctCount / totalQuestions) * 100)

  document.getElementById("quizContainer").classList.add("hidden")
  document.getElementById("completionScreen").classList.remove("hidden")
  
  if (testMode) {
    document.getElementById("finalScore").textContent =
      `Test dokončen! Správně: ${correctCount}/${totalQuestions} (${percentage}%)`
  } else {
    document.getElementById("finalScore").textContent =
      `Získal jste ${correctCount} bodů z ${totalQuestions} (${percentage}%)`
  }
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (event) => {
    // Prevent default behavior for arrow keys to avoid page scrolling
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'a' || event.key === 'd' || event.key === ',') {
      event.preventDefault()
    }
    
    // Previous question - A key or Left arrow
    if (event.key === 'a' || event.key === 'ArrowLeft') {
      prevQuestion()
    }
    
    // Next question - D key or Right arrow
    if (event.key === 'd' || event.key === 'ArrowRight') {
      nextQuestion()
    }
    
    // Star/unstar question - Comma key or S key
    if (event.key === ',' || event.key === 's' || event.key === 'S') {
      toggleStarQuestion()
    }
  })
}

// Save state to localStorage
function saveState() {
  localStorage.setItem("quizAnswers", JSON.stringify(userAnswers))
  saveWrongAnswersState()
  saveStarredQuestionsState()
}

// Save wrong answers state to localStorage
function saveWrongAnswersState() {
  const wrongAnswersArray = Array.from(wrongAnswers.entries()).map(([id, data]) => [
    id,
    {
      question: data.question,
      userAnswer: data.userAnswer,
      originalAnswers: data.originalAnswers,
      correct: data.correct
    }
  ])
  localStorage.setItem("quizWrongQuestions", JSON.stringify(wrongAnswersArray))
}

// Save starred questions state to localStorage
function saveStarredQuestionsState() {
  localStorage.setItem("quizStarredQuestions", JSON.stringify(Array.from(starredQuestions)))
}

// Load state from localStorage
function loadState() {
  const savedAnswers = localStorage.getItem("quizAnswers")
  const savedWrongAnswers = localStorage.getItem("quizWrongQuestions")
  const savedStarredQuestions = localStorage.getItem("quizStarredQuestions")

  if (savedAnswers) {
    userAnswers = JSON.parse(savedAnswers)
  }
  
  if (savedWrongAnswers) {
    const wrongAnswersArray = JSON.parse(savedWrongAnswers)
    // Reconstruct the Map with proper objects
    wrongAnswers = new Map(wrongAnswersArray.map(([id, data]) => [id, data]))
  }
  
  if (savedStarredQuestions) {
    starredQuestions = new Set(JSON.parse(savedStarredQuestions))
  }
}