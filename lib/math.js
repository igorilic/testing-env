// @flow
const sum = (a: number, b: number) => a + b
const substract = (a: number, b: number) => a - b
const sumAsync = (...args: number[]) => Promise.resolve(sum(...args))
const substractAsync = (...args: number[]) =>
  Promise.resolve(substract(...args))

module.exports = {sum, substract, sumAsync, substractAsync}
