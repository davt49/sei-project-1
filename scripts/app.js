document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  const board = []
  const score = document.querySelector('.score')

  let playerIndex
  let playerIndexTwo
  let playerIndexThree
  let playerIndexFour


  const shapeI = {
    name: 'I',
    playerIndex: 3,
    playerIndexTwo: 4,
    playerIndexThree: 5,
    playerIndexFour: 6

  }
  const shapeSq = {
    name: 'Sq',
    playerIndex: 14,
    playerIndexTwo: 15,
    playerIndexThree: 5,
    playerIndexFour: 4

  }
  const shapeL = {
    name: 'L',
    playerIndex: 13,
    playerIndexTwo: 14,
    playerIndexThree: 15,
    playerIndexFour: 5

  }
  const shapeT = {
    name: 'T',
    playerIndex: 13,
    playerIndexTwo: 14,
    playerIndexThree: 15,
    playerIndexFour: 4

  }
  const shapeJ = {
    name: 'J',
    playerIndex: 13,
    playerIndexTwo: 14,
    playerIndexThree: 15,
    playerIndexFour: 3

  }
  const shapeS = {
    name: 'S',
    playerIndex: 13,
    playerIndexTwo: 14,
    playerIndexThree: 5,
    playerIndexFour: 4

  }
  const shapeZ = {
    name: 'Z',
    playerIndex: 14,
    playerIndexTwo: 15,
    playerIndexThree: 4,
    playerIndexFour: 3

  }

  const whatShapeArray = [shapeI,shapeSq,shapeL,shapeT,shapeJ,shapeS,shapeZ]
  function whatShape(){
    const whichOne = whatShapeArray[Math.floor(Math.random() * whatShapeArray.length)]
    playerIndex= whichOne.playerIndex
    playerIndexTwo = whichOne.playerIndexTwo
    playerIndexThree = whichOne.playerIndexThree
    playerIndexFour = whichOne.playerIndexFour
    console.log(whichOne.name)
  }
  whatShape()
  console.log(typeof whatShape())

  function makeGrid(){
    for (let i = 0; i < width * height; i++){
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.setAttribute('id',`${i}`)
      square.innerHTML = i
      board.push(square)
      grid.append(square)
    }
  }

  makeGrid()

  board[playerIndex].classList.add('activeItem')
  board[playerIndexTwo].classList.add('activeItem')
  board[playerIndexThree].classList.add('activeItem')
  board[playerIndexFour].classList.add('activeItem')

  function slowDrop(){

    playerIndex += width
    playerIndexTwo += width
    playerIndexThree += width
    playerIndexFour += width

    board.forEach(square => square.classList.remove('activeItem'))

    board[playerIndex].classList.add('activeItem')
    board[playerIndexTwo].classList.add('activeItem')
    board[playerIndexThree].classList.add('activeItem')
    board[playerIndexFour].classList.add('activeItem')
    bottomCheck()
  }
  setInterval(slowDrop, 1000)

  function handleKeyDown(e) {

    switch(e.keyCode) {
      case 39:
        if (playerIndexFour % 10 === 9 || playerIndexThree % 10 === 9 || playerIndexTwo % 10 === 9 || playerIndex % 10 === 9 ){
          console.log('wall')
        } else if (playerIndex % width < width) {
          playerIndex++
          playerIndexTwo++
          playerIndexThree++
          playerIndexFour++
          board.forEach(square => square.classList.remove('activeItem'))

          board[playerIndex].classList.add('activeItem')
          board[playerIndexTwo].classList.add('activeItem')
          board[playerIndexThree].classList.add('activeItem')
          board[playerIndexFour].classList.add('activeItem')
          bottomCheck()
        }
        break
      case 37:
        if (playerIndex % width > 0) {
          playerIndex--
          playerIndexTwo--
          playerIndexThree--
          playerIndexFour--
          board.forEach(square => square.classList.remove('activeItem'))

          board[playerIndex].classList.add('activeItem')
          board[playerIndexTwo].classList.add('activeItem')
          board[playerIndexThree].classList.add('activeItem')
          board[playerIndexFour].classList.add('activeItem')
          bottomCheck()
        }
        break
      // case 38:
      //   if (playerIndex - width >= 0) {
      //     playerIndex -= width
      //     playerIndexTwo -= width
      //     playerIndexThree -= width
      //     playerIndexFour -= width
      //   }
      //   break
      case 40:
        if (playerIndex + width < width * height) {
          playerIndex += width
          playerIndexTwo += width
          playerIndexThree += width
          playerIndexFour += width
          board.forEach(square => square.classList.remove('activeItem'))

          board[playerIndex].classList.add('activeItem')
          board[playerIndexTwo].classList.add('activeItem')
          board[playerIndexThree].classList.add('activeItem')
          board[playerIndexFour].classList.add('activeItem')
          bottomCheck()
        }
        break
      default:

    }
    console.log(playerIndex, playerIndexTwo, playerIndexThree, playerIndexFour)

  }



  function bottomCheck(){

    if(playerIndex === 190 || playerIndex === 191 || playerIndex === 192 || playerIndex === 191 || playerIndex === 193 || playerIndex === 194 || playerIndex === 195 || playerIndex === 196|| playerIndex === 197|| playerIndex === 198|| playerIndex === 199){
      board[playerIndex].classList.remove('activeItem')
      board[playerIndexTwo].classList.remove('activeItem')
      board[playerIndexThree].classList.remove('activeItem')
      board[playerIndexFour].classList.remove('activeItem')
      board[playerIndex].classList.add('idle')
      board[playerIndexTwo].classList.add('idle')
      board[playerIndexThree].classList.add('idle')
      board[playerIndexFour].classList.add('idle')

      // playerIndex = 3
      // playerIndexTwo = 4
      // playerIndexThree = 5
      // playerIndexFour = 6
      whatShape()
    }
    //call new shape
  }






  //MUSIC SECTION
  //MUSIC SECTION
  const audio = document.querySelector('#audio')
  const music = document.querySelector('.music')
  const stopMusic = document.querySelector('.stopMusic')
  const tracks = ['sounds/slowyShowdown.mp3','sounds/atompilz.mp3','sounds/Brechmittel.mp3','sounds/Glaubensfrage.mp3']
  music.addEventListener('click', () => {
    audio.src = tracks[Math.floor(Math.random() * tracks.length)]
    audio.play()
    console.log('pressed')
  })
  stopMusic.addEventListener('click', () => {
    audio.pause()
    console.log('pressed')
  })
  //MUSIC SECTION
  //MUSIC SECTION


  //scoreboardsendhelp
  //scoreboardsendhelp
  board[190].classList.add('bottom-row')
  board[191].classList.add('bottom-row')
  board[192].classList.add('bottom-row')
  board[193].classList.add('bottom-row')
  board[194].classList.add('bottom-row')
  board[195].classList.add('bottom-row')
  board[196].classList.add('bottom-row')
  board[197].classList.add('bottom-row')
  board[198].classList.add('bottom-row')
  board[199].classList.add('bottom-row')

  const bottomNums = [board[190],board[191],board[192],board[193],board[194],board[195],board[196],board[197],board[198],board[199]]
  const bottomRow = document.querySelectorAll('.bottom-row')

  console.log(bottomNums === [board[190],board[191],board[192],board[193],board[194],board[195],board[196],board[197],board[198],board[199]])
  console.log(bottomRow)

  function giveScore(){
    if(bottomNums.forEach(bottomRow => bottomRow.classList.contains('idle'))){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
    }
  }
  giveScore()
  //scoreboardsendhelp
  //scoreboardsendhelp



  window.addEventListener('keydown', handleKeyDown)
  console.log(board)

})
