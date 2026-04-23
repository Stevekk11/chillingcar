// Verification script to test that shuffling works correctly

// Function to verify that answer shuffling preserves correctness
function verifyAnswerShuffling() {
    // Test with the example from the user's request
    const originalQuestion = {
        question: "Information which was gained from data is the same as: (Choose Two)",
        answers: [
            "Raw Materials",
            "Knowledge",
            "Intelligence",
            "There is no difference between data and information."
        ],
        correct: [1, 2] // Knowledge and Intelligence
    };
    
    console.log("Original question:", originalQuestion);
    
    // Get the correct answers from the original question
    const originalCorrectAnswers = originalQuestion.correct.map(idx => originalQuestion.answers[idx]);
    console.log("Original correct answers:", originalCorrectAnswers);
    
    // Shuffle the question
    const shuffledQuestion = shuffleAnswers(originalQuestion);
    console.log("Shuffled question:", shuffledQuestion);
    
    // Get the correct answers from the shuffled question
    const shuffledCorrectAnswers = shuffledQuestion.correct.map(idx => shuffledQuestion.answers[idx]);
    console.log("Shuffled correct answers:", shuffledCorrectAnswers);
    
    // Verify they match (after sorting since order might be different)
    const matches = JSON.stringify(originalCorrectAnswers.slice().sort()) === 
                   JSON.stringify(shuffledCorrectAnswers.slice().sort());
    
    console.log("Verification result:", matches ? "PASS" : "FAIL");
    return matches;
}

// Function to verify that question shuffling works within modules
function verifyQuestionShuffling() {
    // Create a small test dataset with module structure
    const testData = [
        // Module 1
        { question: "Q1.1", answers: ["A", "B"], correct: [0] },
        { question: "Q1.2", answers: ["C", "D"], correct: [1] },
        { question: "Q1.3", answers: ["E", "F"], correct: [0] },
        // Module 2
        { question: "Q2.1", answers: ["G", "H"], correct: [0] },
        { question: "Q2.2", answers: ["I", "J"], correct: [1] }
    ];
    
    const testModuleRanges = {
        "Q1": { start: 0, end: 2 },
        "Q2": { start: 3, end: 4 }
    };
    
    console.log("Original test data:", testData);
    
    // Shuffle answers first
    const answerShuffledData = shuffleAllAnswers(testData);
    console.log("Answer-shuffled data:", answerShuffledData);
    
    // Then shuffle questions within modules
    const fullyShuffledData = shuffleQuestionsByModule(answerShuffledData, testModuleRanges);
    console.log("Fully shuffled data:", fullyShuffledData);
    
    // Verify that questions from the same module are still grouped together
    const module1Questions = fullyShuffledData.slice(0, 3);
    const module2Questions = fullyShuffledData.slice(3, 5);
    
    const module1AllFromQ1 = module1Questions.every(q => q.question.startsWith("Q1."));
    const module2AllFromQ2 = module2Questions.every(q => q.question.startsWith("Q2."));
    
    console.log("Module 1 verification:", module1AllFromQ1 ? "PASS" : "FAIL");
    console.log("Module 2 verification:", module2AllFromQ2 ? "PASS" : "FAIL");
    
    return module1AllFromQ1 && module2AllFromQ2;
}

// Run verification
console.log("=== Verifying Answer Shuffling ===");
const answerTestResult = verifyAnswerShuffling();

console.log("\n=== Verifying Question Shuffling ===");
const questionTestResult = verifyQuestionShuffling();

console.log("\n=== Overall Results ===");
console.log("Answer shuffling:", answerTestResult ? "PASS" : "FAIL");
console.log("Question shuffling:", questionTestResult ? "PASS" : "FAIL");
console.log("Overall:", (answerTestResult && questionTestResult) ? "ALL TESTS PASS" : "SOME TESTS FAIL");

// Additional verification for the specific example from the user
console.log("\n=== Specific Example Verification ===");
const exampleQuestion = {
    question: "Information which was gained from data is the same as: (Choose Two)",
    answers: [
        "Raw Materials",
        "Knowledge",
        "Intelligence",
        "There is no difference between data and information."
    ],
    correct: [1, 2]
};

console.log("Testing the specific example 5 times:");
for (let i = 0; i < 5; i++) {
    const shuffled = shuffleAnswers(exampleQuestion);
    const originalCorrect = exampleQuestion.correct.map(idx => exampleQuestion.answers[idx]);
    const shuffledCorrect = shuffled.correct.map(idx => shuffled.answers[idx]);
    const match = JSON.stringify(originalCorrect.slice().sort()) === JSON.stringify(shuffledCorrect.slice().sort());
    console.log(`Test ${i+1}: ${match ? "PASS" : "FAIL"} - Correct answers preserved`);
}