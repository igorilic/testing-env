import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render} from 'react-testing-library'
import CalculatorDisplay from '../calculator-display'

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value='0' />)
  console.log(container.innerHTML)
})
