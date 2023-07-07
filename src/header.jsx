import React from 'react'

const lastName = 'Toan'

const sum = (a, b) => a + b

const element = (
  <h1>
    Hello, world! I'm {lastName}. I'm {sum(10, 9)}
  </h1>
)

const element2 = <a href='google.com'>Google</a>

const element3 = React.createElement('h1', { className: 'greeting' }, 'Hello, world!')

const element4 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}
