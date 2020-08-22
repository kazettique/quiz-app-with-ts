import React, { FC } from 'react'

// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

// types
import { AnswerObject } from '../App'

type Props = {
  question: string
  answers: string[]
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
  questionNumber: number
  totalQuestions: number
}

const QuestionCard: FC<Props> = props => {
  const { question, answers, callback, userAnswer, questionNumber, totalQuestions } = props

  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
            <button disabled={Boolean(userAnswer)} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard
