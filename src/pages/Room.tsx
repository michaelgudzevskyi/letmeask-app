import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('')
  const params = useParams<RoomParams>()
  const { user } = useAuth()

  const roomId = params.id

  useEffect(() => {}, [])

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault()

    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('You must be logged in.')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`/rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />

          <RoomCode code={roomId} />
        </div>
      </header>

      <main onSubmit={handleSendQuestion}>
        <div className="room-title">
          <h1>Room React</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea
            placeholder="What do you want to ask?"
            value={newQuestion}
            onChange={event => setNewQuestion(event.target.value)}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt="User Avatar" />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                To ask your question, you have to be {''}
                <button type="button">authorized.</button>
              </span>
            )}

            <Button type="submit" disabled={!user}>
              Send your question
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
