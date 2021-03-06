import React from 'react'
import '../styles/question.scss'

type QuestionProps = {
  content?: string
  author?: {
    name?: string
    avatar?: string
  }
}

export const Question = ({ content, author }: QuestionProps) => {
  console.log(content)

  return (
    <div className="question">
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author?.avatar} alt="Author Name" />
          <span>{author?.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  )
}
