const thumbWar = require('../../lib/thumb-war')
const utils = require('../../lib/utils')

jest.mock('../../lib/utils')

test.only('returns winner', () => {
  const winner = thumbWar('Teacher', 'Kent')
  expect(winner).toBe('Teacher')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Teacher', 'Kent')
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Teacher', 'Kent')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Teacher', 'Kent')

  // cleanup
  utils.getWinner.mockReset()
})
