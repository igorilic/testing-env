import React from 'react'
import {render} from 'react-testing-library'
import Calculator from '../calculator'

test('mounts', () => {
  const {container} = render(<Calculator />)
  console.log(container)
})
