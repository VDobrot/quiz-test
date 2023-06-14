import React, { useState } from 'react';
import { ProgressBar } from "../ProgressBar/ProgressBar";

export interface QuestionsProps {
  questions: {
    question: string
    answers: string[]
  }[],
  submitButton: string,
  onSubmit: (answers: string[]) => void,
  nextPage: () => void
}

export const Questions = (props: QuestionsProps) => {
  const {questions, onSubmit, submitButton, nextPage} = props
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([''])
  const [lastQuestionAnswered, setLastQuestionAnswered] = useState(false)

  const handleAnswerClick = (answer: string) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers]
      newAnswers[currentQuestionIndex] = answer;
      if (currentQuestionIndex < questions.length - 1) {
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

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div>
      <ProgressBar onBack={handleBackClick} progress={progress} showBackButton={currentQuestionIndex > 0}/>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.answers.map((answer, index) => {
        return <button key={index} onClick={() => handleAnswerClick(answer)}>{answer}</button>
      })}
      {lastQuestionAnswered && <button onClick={handleSubmit}>{submitButton}</button>}
    </div>
  )
}
