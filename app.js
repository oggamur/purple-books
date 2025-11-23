const throwDice = (dice) => {
  let diceType = Number(dice.split('').slice(1))
  return Math.floor(Math.random() * (diceType - 1 + 1) + 1)
}

console.log(throwDice('d6'))
