import React from "react";

const Question = ({ data, handleAnswerSelection }) => {
  const { question, options } = data;

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-6">{question}</h2>
      <div className="flex flex-col items-center">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(option)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full max-w-xs"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
