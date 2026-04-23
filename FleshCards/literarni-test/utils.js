// Utility functions for shuffling questions and answers

/**
 * Fisher-Yates shuffle algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffle questions within each module while preserving module structure
 * @param {Array} quizData - Original quiz data
 * @param {Object} moduleRanges - Module ranges object
 * @returns {Array} - Shuffled quiz data
 */
function shuffleQuestionsByModule(quizData, moduleRanges) {
  const shuffledData = [...quizData];
  
  // Shuffle questions within each module
  for (const module in moduleRanges) {
    const { start, end } = moduleRanges[module];
    const moduleQuestions = shuffledData.slice(start, end + 1);
    const shuffledModuleQuestions = shuffleArray(moduleQuestions);
    
    // Put shuffled questions back in place
    for (let i = 0; i < shuffledModuleQuestions.length; i++) {
      shuffledData[start + i] = shuffledModuleQuestions[i];
    }
  }
  
  return shuffledData;
}

/**
 * Shuffle answers for a question while preserving correct answer indices
 * @param {Object} question - Question object with answers and correct indices
 * @returns {Object} - Question with shuffled answers and updated correct indices
 */
function shuffleAnswers(question) {
  // Create a copy of the question
  const shuffledQuestion = {
    ...question,
    answers: [...question.answers],
    correct: [...question.correct]
  };
  
  // Create array of answer-index pairs to maintain original indices
  const answerPairs = shuffledQuestion.answers.map((answer, index) => ({
    answer: answer,
    originalIndex: index
  }));
  
  // Shuffle the answer pairs
  const shuffledPairs = shuffleArray(answerPairs);
  
  // Update answers array with shuffled answers
  shuffledQuestion.answers = shuffledPairs.map(pair => pair.answer);
  
  // Update correct indices based on new positions
  shuffledQuestion.correct = shuffledQuestion.correct.map(originalCorrectIndex => {
    // Find the new index of the originally correct answer
    return shuffledPairs.findIndex(pair => pair.originalIndex === originalCorrectIndex);
  });
  
  return shuffledQuestion;
}

/**
 * Shuffle answers for all questions
 * @param {Array} quizData - Quiz data with questions
 * @returns {Array} - Quiz data with shuffled answers
 */
function shuffleAllAnswers(quizData) {
  return quizData.map(question => shuffleAnswers(question));
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    shuffleArray,
    shuffleQuestionsByModule,
    shuffleAnswers,
    shuffleAllAnswers
  };
}