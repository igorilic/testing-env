/* eslint-disable */
const {sum, sumAsync, substract, substractAsync} = require('../lib/math')
describe('math functions', () => {
  test('sum', () => {
    const result = sum(3, 8)
    const expected = 11
    expect(result).toBe(expected)
  })
  test('substract', () => {
    const result = substract(9, 8)
    const expected = 1
    expect(result).toBe(expected)
  })
  test('async sum', async () => {
    const result = await sumAsync(3, 8)
    const expected = 11
    expect(result).toBe(expected)
  })
  test('substract', async () => {
    const result = await substractAsync(9, 8)
    const expected = 1
    expect(result).toBe(expected)
  })
})
