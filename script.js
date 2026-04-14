const exams = [
    { name: "Sloh", date: "2026-04-15T07:30:00" },
    { name: "Didaktické testy", date: "2026-05-04T07:30:00" },
    { name: "Ustní zkoušky", date: "2026-05-22T07:30:00" }
];

let targetDate = new Date(exams[0].date).getTime();
let countdownInterval;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const examTitleEl = document.getElementById("current-exam-title");
const examListEl = document.getElementById("exam-list");

function init() {
    renderExamsList();
    setExam(exams[0].name, exams[0].date);
    startCountdown();
}

function renderExamsList() {
    examListEl.innerHTML = "";
    exams.forEach((exam, index) => {
        const li = document.createElement("li");

        const dateObj = new Date(exam.date);
        const dateStr = dateObj.toLocaleDateString("cs-CZ");

        li.innerHTML = `
            <span class="exam-name">${exam.name}</span>
            <span class="exam-date">${dateStr}</span>
        `;

        // Hover changes the countdown
        li.addEventListener("mouseenter", () => {
            setExam(exam.name, exam.date);
            // highlight logic
            document.querySelectorAll("li").forEach(e => e.classList.remove("active"));
            li.classList.add("active");
        });

        if (index === 0) li.classList.add("active");

        examListEl.appendChild(li);
    });
}

function setExam(name, dateStr) {
    examTitleEl.textContent = name;
    targetDate = new Date(dateStr).getTime();
    updateCountdown();
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        daysEl.classList.add("finished");
        hoursEl.classList.add("finished");
        minutesEl.classList.add("finished");
        secondsEl.classList.add("finished");
        return;
    } else {
        daysEl.classList.remove("finished");
        hoursEl.classList.remove("finished");
        minutesEl.classList.remove("finished");
        secondsEl.classList.remove("finished");
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

function startCountdown() {
    updateCountdown();
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", init);
