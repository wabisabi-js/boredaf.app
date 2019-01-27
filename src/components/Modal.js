import React, { useState, useRef } from 'react'
import { Transition } from 'react-spring'
import Reward from 'react-rewards'
import Loading from './Loading'
import { Overlay, Input, SubmitButton, ModalContent } from './Elements'

const Modal = ({ open, close }) => {
  const rewardRef = useRef(null)
  const [activity, setActivity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitActivity = async e => {
    e.preventDefault()
    setLoading(true)
    const request = await fetch(
      `${
        process.env.NODE_ENV === 'development'
          ? 'https://bored-af.netlify.com'
          : ''
      }/.netlify/functions/airtable?activity=${activity}`
    )

    await request.json()
    setSubmitted(true)
    setActivity('')
    setLoading(false)
    rewardRef.current.rewardMe()
  }

  return (
    <Transition
      items={open}
      from={{ opacity: 0, y: 200 }}
      enter={{ opacity: 1, y: 0 }}
      leave={{ opacity: 0, y: -200 }}
    >
      {open => styles =>
        open && (
          <Overlay
            style={{ opacity: styles.opacity }}
            onDismiss={() => {
              setSubmitted(false)
              close()
            }}
          >
            <ModalContent
              style={{
                transform: `translate3d(0px, ${styles.y}px, 0px)`,
              }}
            >
              <h1>Add an awesome activity</h1>
              {submitted && <h2>You are the best</h2>}
              <form onSubmit={submitActivity}>
                <Input
                  placeholder="Go pet all the dogs"
                  required
                  value={activity}
                  onChange={e => setActivity(e.target.value)}
                />
                <Reward type="confetti" ref={rewardRef}>
                  <SubmitButton type="submit ">
                    {!loading ? (
                      'Ship it 🚀'
                    ) : (
                      <Loading style={{ margin: 0 }} />
                    )}
                  </SubmitButton>
                </Reward>
              </form>
            </ModalContent>
          </Overlay>
        )}
    </Transition>
  )
}

export default Modal
