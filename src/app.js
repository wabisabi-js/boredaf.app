import React, { Fragment, useContext, useEffect, useState, useRef } from 'react'
import { BoredContext } from './BoredContext'
import Chat from './components/Chat'
import { Button } from './components/Button'
import Reward from 'react-rewards'
import Loading from './components/Loading'
import Welcome from './components/Welcome'
import {
  Card,
  ChatContainer,
  Mobile,
  MobileBg,
  SrOnly
} from './components/Elements'
import mobileBg from './images/mobile-bg.svg'
import { format } from 'date-fns'

export default () => {
  let reward
  const mobilePhone = useRef(null)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getRandom } = useContext(BoredContext)
  const newTime = () => ({ time: format(new Date(), 'HH:mm') })
  const defaultMessages = [
    {
      user: 'I am bored. Give me shit to do',
      bot: getRandom().activity,
      ...newTime()
    }
  ]
  const [messages, setMessages] = useState(defaultMessages)

  const no = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setMessages([
        ...messages,
        {
          user: 'No 👎',
          bot: getRandom().activity,
          ...newTime()
        }
      ])
      mobilePhone.current.scrollTop = mobilePhone.current.scrollHeight
    }, 400)
  }

  const yes = () => {
    // reward is undefined when the 'y' key is pressed.
    // haven't been able to figure a way around this yet :(
    reward && reward.rewardMe()
    setMessages([
      ...messages,
      {
        user: 'Yes 👍',
        bot: 'Go do the Thing 🎉',
        ...newTime()
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

  const yPressed = useKeyPress('y')
  const nPressed = useKeyPress('n')

  return (
    <Fragment>
      <Card>
        <Welcome />
        <ChatContainer>
          <SrOnly as="h2">Chat</SrOnly>
          <MobileBg alt="background" src={mobileBg} />
          <Mobile ref={mobilePhone}>
            <Chat messages={messages}>
              <Reward
                type="confetti"
                ref={ref => {
                  reward = ref
                  console.log(reward)
                }}
              >
                <Button onClick={() => (done ? confetti() : yes())}>
                  {yPressed && !done && yes()}
                  {done ? (
                    'Amazing'
                  ) : (
                    <span role="img" aria-label="Yes.">
                      Yes 👍
                    </span>
                  )}
                </Button>
              </Reward>
              {!done ? (
                <Button onClick={() => no()}>
                  {nPressed && !loading && no()}
                  <span role="img" aria-label="No.">
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

const useKeyPress = (inputKey) => {
  const [keyPressed, setKeyPressed] = useState(false)
  const downHandle = ({ key }) => key === inputKey && setKeyPressed(true)
  const upHandle = ({ key }) => key === inputKey && setKeyPressed(false)

  useEffect(() => {
    // add event listeners
    window.addEventListener('keydown', downHandle)
    window.addEventListener('keyup', upHandle)
    // remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandle)
      window.removeEventListener('keyup', upHandle)
    }
  }, [])

  return keyPressed
}
