class Hangman {
  constructor(word,remainingGuesses){
    this.word=word.toLowerCase().split('')
    this.remainingGuesses=remainingGuesses
    this.guessedLetters=[]
    this.status='playing'
  }calculateStatus(){
    const finished= this.word.every((letter)=>this.guessedLetters.includes(letter) || letter===' ')

  if(this.remainingGuesses===0){
   this.status='Failed'
  }else if(finished){
    this.status='Finished'
  }else{
    this.status='playing'
  }
  }get StatusMessage(){
    if(this.status==='playing'){
      return `Guesses left: ${this.remainingGuesses}`
    }else if(this.status==='Failed'){
    return `Nice try!the word was ${this.word.join('')}`
    }else{
      return 'great work you guessed the letters.'
    }
  }get Puzzle(){
    let puzzle=''
 this.word.forEach((letter)=>{
   if(this.guessedLetters.includes(letter) || letter===' '){
      puzzle +=letter
   }else{
     puzzle +='*'
   }
 })


 return puzzle
  }makeGuess(guess){
    if(this.status !=='playing'){
      return 
      }
      
      
      
       guess=guess.toLowerCase()
       const isUnique=!this.guessedLetters.includes(guess)
       const isBadGuess=!this.word.includes(guess)
       if(isUnique){
         this.guessedLetters.push(guess)
       }
       if(isUnique && isBadGuess){
        this.remainingGuesses--
       }
       this.calculateStatus()
  }
}