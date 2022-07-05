let game
const puzzleEl=document.querySelector('#puzzle')
const guessEl=document.querySelector('#guesses')


window.addEventListener('keypress', (e)=>{
  const guess=String.fromCharCode(e.charCode)
  game.makeGuess(guess)
  render()
})

const render = ()=>{
  puzzleEl.innerHTML=''
  guessEl.textContent=game.StatusMessage

  game.Puzzle.split('').forEach((letter)=>{
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async ()=>{
 const puzzle = await getPuzzle('2')
 game= new Hangman(puzzle , 5)
 render()
}
document.querySelector('#reset').addEventListener('click' , startGame)
startGame()
// getPuzzle('2').then((puzzle)=>{
//  console.log(puzzle)
// }).catch((err)=>{
// console.log(`Error:${err}`)
// })

// getCurrentCountry().then((country)=>{
//   console.log(country.name.common)
// }).catch((error)=>{
//  console.log(error)
// })