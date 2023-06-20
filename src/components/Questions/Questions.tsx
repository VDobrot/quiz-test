import React, { useState } from 'react';
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { DataComponents } from "../../AppContext";

export interface QuestionsProps {
  data: DataComponents["questionsPage"];
  onSubmit: (answers: string[]) => void;
  nextPage: () => void;
}

export const Questions = (props: QuestionsProps) => {
  const {data, onSubmit, nextPage} = props
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([''])
  const [lastQuestionAnswered, setLastQuestionAnswered] = useState(false)

  const handleAnswerClick = (answerIndex: number) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers]
      newAnswers[currentQuestionIndex] = answerIndex.toString();
      if (currentQuestionIndex < data.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setLastQuestionAnswered(true);
      }
      return newAnswers;
    })
  }


  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(prevAnswers => prevAnswers.slice(0, -1));
      setLastQuestionAnswered(false);
    }
  };

  const handleSubmit = () => {
    onSubmit(answers)
    nextPage()
  }

  const currentQuestion = data.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / data.questions.length) * 100;

  return (
    <div>
      <ProgressBar onBack={handleBackClick} progress={progress} showBackButton={currentQuestionIndex > 0}/>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.answers.map((answer, index) => {
        return <button key={index} onClick={() => handleAnswerClick(index)}>{answer}</button>
      })}
      {lastQuestionAnswered && <button onClick={handleSubmit}>{data.submitButton}</button>}
    </div>
  )
}
