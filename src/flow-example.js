// @flow

function add(a: number, b: number) {
  return a + b
}

type User = {
  name: {
    first: string,
    middle: string,
    last: string,
  },
}

function getFullName(user: User) {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join(' ')
}

add(1, 2)

getFullName({name: {first: 'Joe', middle: 'Bud', last: 'Doe'}})
