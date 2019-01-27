import React, { useState } from 'react'
import { WelcomeCard, Button } from './Elements'
import Modal from './Modal'

const Welcome = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <WelcomeCard>
      <div>
        <h1>Hello stranger!</h1>
        <h2>So you think you bored!</h2>
        <p>Our chatbot can tell you a cool thing to do. Just give it a try!</p>
      </div>
      <div>
        <p>
          Made by{' '}
          <a
            href="https://twitter.com/miuki_miu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elizabet Oliveira
          </a>{' '}
          &{' '}
          <a
            href="https://twitter.com/NikkitaFTW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sara Vieira
          </a>{' '}
        </p>
        <p>
          Code on{' '}
          <a
            href="https://github.com/SaraVieira/bored.inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          Use the{' '}
          <a
            href="https://t.me/Bored_AF_Bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram Bot (by{' '}
            <a
              href="https://twitter.com/uur_oruc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uğur Oruç
            </a>
            )
          </a>
        </p>
        <p>
          <Button onClick={() => setModalOpen(true)}>Add an Activity</Button>
        </p>
      </div>
      <Modal open={modalOpen} close={() => setModalOpen(false)} />
    </WelcomeCard>
  )
}

export default Welcome
