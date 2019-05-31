document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  const board = []
  let playerIndex = 3
  let playerIndexTwo = 4
  let playerIndexThree = 5
  let playerIndexFour = 6


  function makeGrid(){
    for (let i = 0; i < width * height; i++){
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.classList.add(`${i}`)
      square.innerHTML = i
      board.push(square)
      grid.append(square)
    }
  }


  // function moveItem() {
  //   board.forEach(square => square.classList.remove('activeItem'))
  //
  //   board[playerIndex].classList.add('activeItem')
  //   board[playerIndexTwo].classList.add('activeItem')
  //   board[playerIndexThree].classList.add('activeItem')
  //   board[playerIndexFour].classList.add('activeItem')
  //
  //   bottomCheck()
  // }


  let reachBottom = false

  function slowDrop(){

    if (reachBottom === false){

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
    } else if (reachBottom === true){
      console.log('reached Bottom')
    }

  }
  // handleKeyDown()

  setInterval(slowDrop, 1000)

  function handleKeyDown(e) {
    console.log('hi')
    let playerShouldMove = true
    switch(e.keyCode) {
      case 39:
        if (playerIndexFour % 10 === 9){
          console.log('wall')
        } else if (playerIndex % width < width) {
          playerIndex++
          playerIndexTwo++
          playerIndexThree++
          playerIndexFour++
        }
        break
      case 37:
        if (playerIndex % width > 0) {
          playerIndex--
          playerIndexTwo--
          playerIndexThree--
          playerIndexFour--
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
        }
        break
      default:
        playerShouldMove = false
    }
    console.log(playerIndex, playerIndexTwo, playerIndexThree, playerIndexFour)
    if (playerShouldMove){
      slowDrop()
    } else if (playerIndex.idle){
      playerShouldMove = false
    }
  }

  makeGrid()

//grant classes to new shape

  board[playerIndex].classList.add('activeItem')
  board[playerIndexTwo].classList.add('activeItem')
  board[playerIndexThree].classList.add('activeItem')
  board[playerIndexFour].classList.add('activeItem')

  window.addEventListener('keydown', handleKeyDown)

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
      reachBottom = true

    }

    //call new shape
  }




  console.log(board)

  // function movingObjectA(){
  //
  //
  //  [[0,1,0],
  //  [0,1,0],
  //  [0,1,1]]
  //
  //
  // }
  //
  // Shapes = {
  //           ZShape: [[0, -1], [0, 0], [-1, 0], [-1, 1]],
  //           SShape: [[0, -1], [0, 0], [1, 0], [1, 1]],
  //           IShape: [[0, -1], [0, 0], [0, 1], [0, 2]],
  //           TShape: [[-1, 0], [0, 0], [1, 0], [0, 1]],
  //           Square: [[0, 0], [1, 0], [0, 1], [1, 1]],
  //           LShape: [[-1, -1], [0, -1], [0, 0], [0, 1]],
  //           JShape: [[1, -1], [0, -1], [0, 0], [0, 1]]
  //       }


})
