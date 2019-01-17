import React from 'react'
import { WelcomeCard } from './Elements'

const Welcome = () => (
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
        <a
          href="https://airtable.com/shrsvsMAtGMlFvGP6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add an Activity
        </a>
      </p>
    </div>
  </WelcomeCard>
)

export default Welcome
