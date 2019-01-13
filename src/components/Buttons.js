import React, { Fragment } from 'react'

const Buttons = () => (
  <Fragment>
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
  </Fragment>
)
