import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    question: "What is React?",
    options: ["A Library", "A Language", "A Database", "An IDE"],
    answer: "A Library",
  },
  {
    question: "Who created React?",
    options: ["Google", "Facebook", "Twitter", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelection = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
      {!isQuizFinished ? (
        <Question
          data={questions[currentQuestionIndex]}
          handleAnswerSelection={handleAnswerSelection}
        />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Your final score: {score} / {questions.length}
          </h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
