document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  const board = []
  const score = document.querySelector('.score')
  let whichOne
  const degrees = 0

  let playerIndex
  let playerIndexTwo
  let playerIndexThree
  let playerIndexFour

  // const initialShapes = {
  //   'I': [3,4,5,6],
  //   'Sq': [14,15,5,4],
  //   'L': [13,14,15,5],
  //   'T': [13,14,15,4],
  //   'J': [13,14,15,3],
  //   'S': [13,14,5,4],
  //   'Z': [14,15,4,3]
  // }

  const I = {
    name: 'I',
    playerIndex: [3,4,5,6]
  }
  const Sq = {
    name: 'Sq',
    playerIndex: [14,15,5,4]
  }
  const L = {
    name: 'L',
    playerIndex: [13,14,15,5]
  }
  const T = {
    name: 'T',
    playerIndex: [13,14,15,4]
  }
  const J = {
    name: 'J',
    playerIndex: [13,14,15,3]
  }
  const S = {
    name: 'S',
    playerIndex: [13,14,5,4]
  }
  const Z = {
    name: 'Z',
    playerIndex: [14,15,4,3]
  }

  const whatShapeArray = [I,Sq,L,T,J,S,Z]

  function whatShape(){

    whichOne = whatShapeArray[Math.floor(Math.random() * whatShapeArray.length)]


    playerIndex= whichOne.playerIndex[0]
    playerIndexTwo = whichOne.playerIndex[1]
    playerIndexThree = whichOne.playerIndex[2]
    playerIndexFour = whichOne.playerIndex[3]
    console.log(whichOne.name)

  }
  whatShape()

  console.log(whichOne.name,whichOne.playerIndex[0],degrees)

  // function rotate(){
  //   // playerIndex = whichOne.playerIndex[0]
  //   // playerIndexTwo = whichOne.playerIndex[1]
  //   // playerIndexThree = whichOne.playerIndex[2]
  //   // playerIndexFour = whichOne.playerIndex[3]
  //

  //   switch (whichOne.name){
  //     case 'I':
  //       if(degrees === 90){
  //         playerIndex = playerIndexThree,
  //         playerIndexTwo = playerIndexTwo + width + 1,
  //         playerIndexThree = playerIndexThree + (width * 2),
  //         playerIndexFour = playerIndexFour + (width * 3) - 1
  //       } else if(degrees === 180){
  //         playerIndex = playerIndex + (width * 2) + 1,
  //         playerIndexTwo = playerIndexTwo + width,
  //         playerIndexThree = playerIndexThree - 1,
  //         playerIndexFour = playerIndexFour - width - 2
  //       } else if(degrees === 270){
  //         playerIndex = playerIndex + (width * 2) - 2,
  //         playerIndexTwo = playerIndexTwo + width - 1,
  //         playerIndexThree = playerIndexThree + 0,
  //         playerIndexFour = playerIndexFour - width + 1
  //       }
  //       break
  //   }
  //
  //   if (degrees !== 270){
  //     degrees = degrees + 90
  //   } else {
  //     degrees = 0
  //   }
  // }

  // if(degrees === 0){
  //   degrees = degrees + 90
  // }
  // if(degrees === 90){
  //   degrees = degrees + 90
  // }
  // if(degrees === 180){
  //   degrees = degrees + 90
  // }
  // if(degrees === 270){
  //   degrees = 0
  // }



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
    // cantGoDown()
    // if (cantGoDown === true){
    //   console.log('stackOnTop')
    //   stackOnTop()
    // } else{
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
    // }
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
        //   rotate()
        //   break

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

  // true go down
  // false

  function cantGoDown(){
    const oneBelow = playerIndex + width
    const twoBelow = playerIndexTwo + width
    const threeBelow = playerIndexThree + width
    const fourBelow = playerIndexFour + width
    console.log(playerIndex, playerIndexTwo,playerIndexThree,playerIndexFour)
    console.log(oneBelow, twoBelow, threeBelow, fourBelow)


    // console.log(board[board.indexOf(playerIndex) + width])
    // console.log(Array.from(board[oneBelow].classList).includes('idle'))
    // console.log(Array.from(board[twoBelow].classList).includes('idle'))
    // console.log(Array.from(board[threeBelow].classList).includes('idle'))
    // console.log(Array.from(board[fourBelow].classList).includes('idle'))

    // ){
    return (Array.from(board[oneBelow].classList).includes('idle')) ||
    (Array.from(board[twoBelow].classList).includes('idle')) ||
    (Array.from(board[threeBelow].classList).includes('idle')) ||
    (Array.from(board[fourBelow].classList).includes('idle'))

    // console.log((board[oneBelow].classList.contains('idle')) ||
    // (board[twoBelow].classList.contains('idle')) ||
    // (board[threeBelow].classList.contains('idle')) ||
    // (board[fourBelow].classList.contains('idle')))
    //
    // return (board[oneBelow].classList.contains('idle')) ||
    // (board[twoBelow].classList.contains('idle')) ||
    // (board[threeBelow].classList.contains('idle')) ||
    // (board[fourBelow].classList.contains('idle'))
  }


  // return (board[board.indexOf(playerIndex) + width].classList.includes('idle')  || board[board.indexOf(playerIndexTwo) + width].classList.includes('idle') || board[board.indexOf(playerIndexThree) + width].classList.includes('idle') || board[board.indexOf(playerIndexFour) + width].classList.includes('idle')
  // )


  function stackOnTop(){
    // idleSpot.forEach(idleSpot => {


    board[playerIndex].classList.remove('activeItem')
    board[playerIndexTwo].classList.remove('activeItem')
    board[playerIndexThree].classList.remove('activeItem')
    board[playerIndexFour].classList.remove('activeItem')
    board[playerIndex].classList.add('idle')
    board[playerIndexTwo].classList.add('idle')
    board[playerIndexThree].classList.add('idle')
    board[playerIndexFour].classList.add('idle')
  }
  // })
  // }
  // setInterval(stackOnTop, 1000)

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
      //call new shape
    }
  }


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
  // console.log(bottomNums === [board[190],board[191],board[192],board[193],board[194],board[195],board[196],board[197],board[198],board[199]])
  // console.log(bottomRow)

  function giveScore(){
    let count = 0

    bottomNums.forEach(bottomRow => {
      if(bottomRow.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
      bottomNums.forEach(bottomRow => {
        bottomRow.classList.remove('idle')
      })

      const idleAround = document.querySelectorAll('.idle')
      idleAround.forEach(idleAround => {
        idleAround.classList.remove('idle')
        board[board.indexOf(idleAround) + width].classList.add('idle')
      })
    }
  }

  setInterval(giveScore, 1000)


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






  window.addEventListener('keydown', handleKeyDown)
  console.log(board)

})
