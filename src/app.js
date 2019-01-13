import React, { Fragment, useContext, useState } from 'react'
import { BoredContext } from './BoredContext'
import Chat from './components/Chat'
import { Button } from './components/Button'
import Reward from 'react-rewards'
import Loading from './components/Loading'
import {
  Card,
  Welcome,
  ChatContainer,
  Mobile,
  MobileBg
} from './components/Elements'
import mobileBg from './images/mobile-bg.svg'

export default () => {
  let reward
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getRandom } = useContext(BoredContext)
  const [messages, setMessages] = useState([
    {
      user: 'I am bored. Give me shit to do',
      bot: getRandom().activity
    }
  ])

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
  }

  const confetti = () => reward.rewardMe()

  return (
    <Fragment>
      <Card>
        <Welcome>
          <h2>Hello stranger!</h2>
          <h1>So you think you bored!</h1>
          <p>
            Our chatbot can tell you a cool thing to do. Just give it a try!
          </p>
        </Welcome>
        <ChatContainer>
          <MobileBg src={mobileBg} />
          <Mobile>
            <Chat messages={messages}>
              <Reward
                type="confetti"
                ref={ref => {
                  reward = ref
                }}
              >
                <Button onClick={() => (done ? confetti() : yes())}>
                  {done ? 'Amazing' : 'Yes 👍'}
                </Button>
              </Reward>
              {!done && (
                <Button onClick={() => no(getRandom().activity)}>No 👎</Button>
              )}
              {loading ? <Loading /> : null}
            </Chat>
          </Mobile>
        </ChatContainer>
      </Card>
    </Fragment>
  )
}
