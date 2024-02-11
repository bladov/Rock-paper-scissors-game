export const getGameResult = (playerChoice, botChoice) => {
  // paper = 1
  // scissors = 2
  // rock = 3
  const gameResult = `${playerChoice}${botChoice}`
  const result = {
    won: ['13', '21', '32'],
    lose: ['12', '23', '31'],
    draw: ['11', '22', '33']
  }

  for (const [resultText, tableResult] of Object.entries(result)) {
    if (tableResult.includes(gameResult)) return resultText
  }
}
