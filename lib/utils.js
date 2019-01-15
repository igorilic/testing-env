// returns the winning player or null for a tie
// Let's pretend this isn't using Math.random() but instead
// is making a call to some third party machine learning
// service that has a testing environment we don't control
// and is unreliable so we want to mock it out for tests.
function getWinner(player1, player2) {
  const winningNumber = Math.random()
  return winningNumber < 1 / 3
    ? player1
    : winningNumber < 2 / 3
    ? player2
    : null
}

function getFormattedValue(value, language = 'en-US') {
  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  })

  // Add back missing .0 in e.g. 12.0
  const match = value.match(/\.\d*?(0*)$/)

  if (match) {
    formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]
  }
  return formattedValue
}

export {getFormattedValue, getWinner}
