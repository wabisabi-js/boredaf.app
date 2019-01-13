import React, { Fragment, useContext, useState, useRef } from 'react'
import { BoredContext } from './BoredContext'
import Chat from './components/Chat'
import { Button } from './components/Button'
import Reward from 'react-rewards'
import Loading from './components/Loading'
import Welcome from './components/Welcome'
import { Card, ChatContainer, Mobile, MobileBg } from './components/Elements'
import mobileBg from './images/mobile-bg.svg'

export default () => {
  let reward
  const mobilePhone = useRef(null)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getRandom } = useContext(BoredContext)
  const defaultMessages = [
    {
      user: 'I am bored. Give me shit to do',
      bot: getRandom().activity
    }
  ]
  const [messages, setMessages] = useState(defaultMessages)

  const no = message => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setMessages([
        ...messages,
        {
          user: 'No 👎',
          bot: message
        }
      ])
      mobilePhone.current.scrollTop = mobilePhone.current.scrollHeight
    }, 400)
  }

  const yes = () => {
    reward.rewardMe()
    setMessages([
      ...messages,
      {
        user: 'Yes 👍',
        bot: 'Go do the Thing 🎉'
      }
    ])
    setDone(true)
    setTimeout(() => {
      mobilePhone.current.scrollTop = mobilePhone.current.scrollHeight
    }, 0)
  }

  const confetti = () => reward.rewardMe()

  const restart = () => {
    setMessages(defaultMessages)
    setDone(false)
  }

  return (
    <Fragment>
      <Card>
        <Welcome />
        <ChatContainer>
          <MobileBg alt="background" src={mobileBg} />
          <Mobile ref={mobilePhone}>
            <Chat messages={messages}>
              <Reward
                type="confetti"
                ref={ref => {
                  reward = ref
                }}
              >
                <Button onClick={() => (done ? confetti() : yes())}>
                  {done ? (
                    'Amazing'
                  ) : (
                    <span role="img" aria-label="Yes">
                      Yes 👍
                    </span>
                  )}
                </Button>
              </Reward>
              {!done ? (
                <Button onClick={() => no(getRandom().activity)}>
                  <span role="img" aria-label="no">
                    No 👎
                  </span>
                </Button>
              ) : (
                <Button onClick={() => restart()}>Restart</Button>
              )}
              {loading ? <Loading /> : null}
            </Chat>
          </Mobile>
        </ChatContainer>
      </Card>
    </Fragment>
  )
}
