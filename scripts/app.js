document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 20
  const board = []
  const score = document.querySelector('.score')
  let scoreNum = 0
  let highScoreNum = 0
  const scoreSound = document.querySelector('#scoreSound')
  const highscore = document.querySelector('.highscore')
  scoreSound.volume = 1

  let playerIndex
  let playerIndexTwo
  let playerIndexThree
  let playerIndexFour

  function makeGrid() {
    for (let i = 0; i < width * height; i++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.setAttribute('id', `${i}`)
      board.push(square)
      grid.append(square)
    }
  }

  makeGrid()

  const I = {
    name: 'I',
    playerIndex: [13, 14, 15, 16]
  }
  const Sq = {
    name: 'Sq',
    playerIndex: [14, 15, 5, 4]
  }
  const L = {
    name: 'L',
    playerIndex: [13, 14, 15, 5]
  }
  const T = {
    name: 'T',
    playerIndex: [13, 14, 15, 4]
  }
  const J = {
    name: 'J',
    playerIndex: [13, 14, 15, 3]
  }
  const S = {
    name: 'S',
    playerIndex: [13, 14, 4, 5]
  }
  const Z = {
    name: 'Z',
    playerIndex: [13, 14, 24, 25]
  }

  const whatShapeArray = [I, Sq, L, T, J, S, Z]
  let whichOne
  let degrees = 0


  function whatShape() {

    whichOne = whatShapeArray[Math.floor(Math.random() * whatShapeArray.length)]


    playerIndex = whichOne.playerIndex[0]
    playerIndexTwo = whichOne.playerIndex[1]
    playerIndexThree = whichOne.playerIndex[2]
    playerIndexFour = whichOne.playerIndex[3]
    console.log(whichOne.name)
    degrees = 0

    board[playerIndex].classList.add('activeItem')
    board[playerIndexTwo].classList.add('activeItem')
    board[playerIndexThree].classList.add('activeItem')
    board[playerIndexFour].classList.add('activeItem')
  }
  whatShape()

  function rotate() {
    switch (whichOne.name) {
      case 'I':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 8
          playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 10
          playerIndexFour = playerIndexFour + 19
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 21
          playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 1
          playerIndexFour = playerIndexFour - 12
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 8
          playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 10
          playerIndexFour = playerIndexFour - 19
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 31
          playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'L':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'T':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 11
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour + 9
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 11
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour - 9
        }
        break
      case 'J':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 2
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour - 20
        }
        break
      case 'S':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'Z':
        if (degrees === 0) {
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 90) {
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 180) {
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 2
        } else if (degrees === 270) {
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 20
        }
        break

    }
  }

  function idleCheck() {
    const oneBelow = playerIndex + width
    const twoBelow = playerIndexTwo + width
    const threeBelow = playerIndexThree + width
    const fourBelow = playerIndexFour + width
    // console.log(playerIndex, playerIndexTwo,playerIndexThree,playerIndexFour)
    // console.log(oneBelow, twoBelow, threeBelow, fourBelow)

    if ((Array.from(board[oneBelow].classList).includes('idle')) ||
      (Array.from(board[twoBelow].classList).includes('idle')) ||
      (Array.from(board[threeBelow].classList).includes('idle')) ||
      (Array.from(board[fourBelow].classList).includes('idle'))) {
      console.log('found idle below')
      return true

    } else {
      return false
    }

  }

  function sideCheck() {
    const oneRight = playerIndex + 1
    const oneLeft = playerIndex - 1
    const twoRight = playerIndexTwo + 1
    const twoLeft = playerIndexTwo - 1
    const threeRight = playerIndexThree + 1
    const threeLeft = playerIndexThree - 1
    const fourRight = playerIndexFour + 1
    const fourLeft = playerIndexFour - 1

    if ((Array.from(board[oneRight].classList).includes('idle')) ||
      (Array.from(board[oneLeft].classList).includes('idle')) ||
      (Array.from(board[twoRight].classList).includes('idle')) ||
      (Array.from(board[twoLeft].classList).includes('idle')) ||
      (Array.from(board[threeRight].classList).includes('idle')) ||
      (Array.from(board[threeLeft].classList).includes('idle')) ||
      (Array.from(board[fourRight].classList).includes('idle')) ||
      (Array.from(board[fourLeft].classList).includes('idle'))) {
      console.log('found idle side')
      return true
    } else {
      return false
    }
  }

  function bottomCheck() {
    if (playerIndex === 190 || playerIndex === 191 || playerIndex === 192 || playerIndex === 191 || playerIndex === 193 || playerIndex === 194 || playerIndex === 195 || playerIndex === 196 || playerIndex === 197 || playerIndex === 198 || playerIndex === 199 || playerIndexTwo === 190 || playerIndexTwo === 191 || playerIndexTwo === 192 || playerIndexTwo === 193 || playerIndexTwo === 194 || playerIndexTwo === 195 || playerIndexTwo === 196 || playerIndexTwo === 197 || playerIndexTwo === 198 || playerIndexTwo === 199 || playerIndexThree === 190 || playerIndexThree === 191 || playerIndexThree === 192 || playerIndexThree === 193 || playerIndexThree === 194 || playerIndexThree === 195 || playerIndexThree === 196 || playerIndexThree === 197 || playerIndexThree === 198 || playerIndexThree === 199 || playerIndexFour === 190 || playerIndexFour === 191 || playerIndexFour === 192 || playerIndexFour === 193 || playerIndexFour === 194 || playerIndexFour === 195 || playerIndexFour === 196 || playerIndexFour === 197 || playerIndexFour === 198 || playerIndexFour === 199) {
      console.log('found the bottom')
      return true

    } else {
      return false
    }
  }

  function changeClass() {
    board[playerIndex].classList.remove('activeItem')
    board[playerIndexTwo].classList.remove('activeItem')
    board[playerIndexThree].classList.remove('activeItem')
    board[playerIndexFour].classList.remove('activeItem')
    board[playerIndex].classList.add('idle')
    board[playerIndexTwo].classList.add('idle')
    board[playerIndexThree].classList.add('idle')
    board[playerIndexFour].classList.add('idle')

    whatShape()
    // setTimeout(whatShape, 500)
  }

  // Reset ******************************************************************
  const reset = document.querySelector('.reset')

  reset.addEventListener('click', () => {

    board.forEach(square => {
      square.classList.remove('idle')
    })

    console.log(scoreNum)
    if (highScoreNum < scoreNum || highScoreNum === 0){
      highScoreNum = scoreNum;
      highscore.innerHTML = scoreNum;
    }
    score.innerHTML = '0'
    scoreNum = 0
  })


  //adding classes to each line
  for (let i = 0; i < 10; i++) {
    board[i].classList.add('topLine')
  }
  for (let i = 10; i < 20; i++) {
    board[i].classList.add('two')
  }
  for (let i = 20; i < 30; i++) {
    board[i].classList.add('three')
  }
  for (let i = 30; i < 40; i++) {
    board[i].classList.add('four')
  }
  for (let i = 40; i < 50; i++) {
    board[i].classList.add('five')
  }
  for (let i = 50; i < 60; i++) {
    board[i].classList.add('six')
  }
  for (let i = 60; i < 70; i++) {
    board[i].classList.add('seven')
  }
  for (let i = 70; i < 80; i++) {
    board[i].classList.add('eight')
  }
  for (let i = 80; i < 90; i++) {
    board[i].classList.add('nine')
  }
  for (let i = 90; i < 100; i++) {
    board[i].classList.add('ten')
  }
  for (let i = 100; i < 110; i++) {
    board[i].classList.add('eleven')
  }
  for (let i = 110; i < 120; i++) {
    board[i].classList.add('twelve')
  }
  for (let i = 120; i < 130; i++) {
    board[i].classList.add('thirteen')
  }
  for (let i = 130; i < 140; i++) {
    board[i].classList.add('fourteen')
  }
  for (let i = 140; i < 150; i++) {
    board[i].classList.add('fifteen')
  }
  for (let i = 150; i < 160; i++) {
    board[i].classList.add('sixteen')
  }
  for (let i = 160; i < 170; i++) {
    board[i].classList.add('seventeen')
  }
  for (let i = 170; i < 180; i++) {
    board[i].classList.add('eighteen')
  }
  for (let i = 180; i < 190; i++) {
    board[i].classList.add('nineteen')
  }




  const line2 = [board[20], board[21], board[22], board[23], board[24], board[25], board[26], board[27], board[28], board[29]]
  const line3 = [board[30], board[31], board[32], board[33], board[34], board[35], board[36], board[37], board[38], board[39]]
  const line4 = [board[40], board[41], board[42], board[43], board[44], board[45], board[46], board[47], board[48], board[49]]
  const line5 = [board[50], board[51], board[52], board[53], board[54], board[55], board[56], board[57], board[58], board[59]]
  const line6 = [board[60], board[61], board[62], board[63], board[64], board[65], board[66], board[67], board[68], board[69]]
  const line7 = [board[70], board[71], board[72], board[73], board[74], board[75], board[76], board[77], board[78], board[79]]
  const line8 = [board[80], board[81], board[82], board[83], board[84], board[85], board[86], board[87], board[88], board[89]]
  const line9 = [board[90], board[91], board[92], board[93], board[94], board[95], board[96], board[97], board[98], board[99]]

  const line10 = [board[100], board[101], board[102], board[103], board[104], board[105], board[106], board[107], board[108], board[109]]
  const line11 = [board[110], board[111], board[112], board[113], board[114], board[115], board[116], board[117], board[118], board[119]]
  const line12 = [board[120], board[121], board[122], board[123], board[124], board[125], board[126], board[127], board[128], board[129]]
  const line13 = [board[130], board[131], board[132], board[133], board[134], board[135], board[136], board[137], board[138], board[139]]
  const line14 = [board[140], board[141], board[142], board[143], board[144], board[145], board[146], board[147], board[148], board[149]]
  const line15 = [board[150], board[151], board[152], board[153], board[154], board[155], board[156], board[157], board[158], board[159]]
  const line16 = [board[160], board[161], board[162], board[163], board[164], board[165], board[166], board[167], board[168], board[169]]
  const line17 = [board[170], board[171], board[172], board[173], board[174], board[175], board[176], board[177], board[178], board[179]]
  const line18 = [board[180], board[181], board[182], board[183], board[184], board[185], board[186], board[187], board[188], board[189]]
  const line19 = [board[190], board[191], board[192], board[193], board[194], board[195], board[196], board[197], board[198], board[199]]

  const whichLine = [line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19,]

  const topLine = document.querySelectorAll('.topLine')
  const two = document.querySelectorAll('.two')
  const three = document.querySelectorAll('.three')
  const four = document.querySelectorAll('.four')
  const five = document.querySelectorAll('.five')
  const six = document.querySelectorAll('.six')
  const seven = document.querySelectorAll('.seven')
  const eight = document.querySelectorAll('.eight')
  const nine = document.querySelectorAll('.nine')
  const ten = document.querySelectorAll('.ten')
  const eleven = document.querySelectorAll('.eleven')
  const twelve = document.querySelectorAll('.twelve')
  const thirteen = document.querySelectorAll('.thirteen')
  const fourteen = document.querySelectorAll('.fourteen')
  const fifteen = document.querySelectorAll('.fifteen')
  const sixteen = document.querySelectorAll('.sixteen')
  const seventeen = document.querySelectorAll('.seveneen')
  const eighteen = document.querySelectorAll('.eighteen')
  const nineteen = document.querySelectorAll('.nineteen')

  const title = document.querySelector('.title')




  // slow drop **********************************************************
  function slowDrop() {

    console.log('check now if the move will be possible')
    if (bottomCheck() === false && idleCheck() === false) {

      playerIndex += width
      playerIndexTwo += width
      playerIndexThree += width
      playerIndexFour += width

      board.forEach(square => square.classList.remove('activeItem'))

      board[playerIndex].classList.add('activeItem')
      board[playerIndexTwo].classList.add('activeItem')
      board[playerIndexThree].classList.add('activeItem')
      board[playerIndexFour].classList.add('activeItem')


    } else {
      console.log('cant go down')
      changeClass()
    }
    // }
  }
  setInterval(slowDrop, 1000)

  // arrow movements *****************************************************************
  function handleKeyDown(e) {

    switch (e.keyCode) {
      case 39:
        if (playerIndexFour % 10 === 9 || playerIndexThree % 10 === 9 || playerIndexTwo % 10 === 9 || playerIndex % 10 === 9) {
          console.log('wall')
        } else if (sideCheck() === true) {
          console.log('side')
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

        }
        break
      case 37:
        if (playerIndexFour % 10 === 0 || playerIndexThree % 10 === 0 || playerIndexTwo % 10 === 0 || playerIndex % 10 === 0) {
          console.log('wall')
        } else if (sideCheck() === true) {
          console.log('side')
        } else if (playerIndex % width > 0) {
          playerIndex--
          playerIndexTwo--
          playerIndexThree--
          playerIndexFour--
          board.forEach(square => square.classList.remove('activeItem'))

          board[playerIndex].classList.add('activeItem')
          board[playerIndexTwo].classList.add('activeItem')
          board[playerIndexThree].classList.add('activeItem')
          board[playerIndexFour].classList.add('activeItem')

        }
        break
      case 38:
        if (playerIndexFour % 10 === 8 || playerIndexThree % 10 === 8 || playerIndexTwo % 10 === 8 || playerIndex % 10 === 8 || 
          playerIndexFour % 10 === 1 || playerIndexThree % 10 === 1 || playerIndexTwo % 10 === 1 || playerIndex % 10 === 1 ||
          playerIndexFour % 10 === 9 || playerIndexThree % 10 === 9 || playerIndexTwo % 10 === 9 || playerIndex % 10 === 9 ||
          playerIndexFour % 10 === 0 || playerIndexThree % 10 === 0 || playerIndexTwo % 10 === 0 || playerIndex % 10 === 0) {
          console.log('wall')
        } else if (sideCheck() === true) {
          console.log('side')
        } else {
          console.log(whichOne.name, whichOne.playerIndex[0], whichOne.playerIndex[1], whichOne.playerIndex[2], whichOne.playerIndex[3], degrees)
          rotate()
        }
        break

      case 40:

        if (bottomCheck() === false && idleCheck() === false) {
          playerIndex += width
          playerIndexTwo += width
          playerIndexThree += width
          playerIndexFour += width
          board.forEach(square => square.classList.remove('activeItem'))

          board[playerIndex].classList.add('activeItem')
          board[playerIndexTwo].classList.add('activeItem')
          board[playerIndexThree].classList.add('activeItem')
          board[playerIndexFour].classList.add('activeItem')
        }
        break
      default:

    }
    console.log(playerIndex, playerIndexTwo, playerIndexThree, playerIndexFour)
  }



  // check lines and give score ************************************************************
  function giveScoreNineteen() {
    let count = 0

    line19.forEach(nineteen => {
      if (nineteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line19.forEach(nineteen => {
        nineteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines

      const removedSquares = []

      board.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      board.forEach(square => {
        square.classList.remove('idle')
      })

      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }


  function giveScoreEighteen() {
    let count = 0

    line18.forEach(eighteen => {
      if (eighteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line18.forEach(eighteen => {
        eighteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines

      const removedSquares = []
      const linesToIgnore = line18.concat(line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreSeventeen() {
    let count = 0

    line17.forEach(seventeen => {
      if (seventeen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line17.forEach(seventeen => {
        seventeen.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line17.concat(line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreSixteen() {
    let count = 0

    line16.forEach(sixteen => {
      if (sixteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line16.forEach(sixteen => {
        sixteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line16.concat(line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreFifteen() {
    let count = 0

    line15.forEach(fifteen => {
      if (fifteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line15.forEach(fifteen => {
        fifteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line15.concat(line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreFourteen() {
    let count = 0

    line14.forEach(fourteen => {
      if (fourteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line14.forEach(fourteen => {
        fourteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line14.concat(line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreThirteen() {
    let count = 0

    line13.forEach(thirteen => {
      if (thirteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line13.forEach(thirteen => {
        thirteen.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line13.concat(line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreTwelve() {
    let count = 0

    line12.forEach(twelve => {
      if (twelve.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line12.forEach(twelve => {
        twelve.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line12.concat(line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreEleven() {
    let count = 0

    line11.forEach(eleven => {
      if (eleven.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line11.forEach(eleven => {
        eleven.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line11.concat(line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreTen() {
    let count = 0

    line10.forEach(ten => {
      if (ten.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line10.forEach(ten => {
        ten.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line10.concat(line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreNine() {
    let count = 0

    line9.forEach(nine => {
      if (nine.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line9.forEach(nine => {
        nine.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line9.concat(line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreEight() {
    let count = 0

    line8.forEach(eight => {
      if (eight.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line8.forEach(eight => {
        eight.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line8.concat(line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreSeven() {
    let count = 0

    line7.forEach(seven => {
      if (seven.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line7.forEach(seven => {
        seven.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line7.concat(line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreSix() {
    let count = 0

    line6.forEach(six => {
      if (six.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line6.forEach(six => {
        six.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line6.concat(line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreFive() {
    let count = 0

    line5.forEach(five => {
      if (five.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line5.forEach(five => {
        five.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line5.concat(line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }
  function giveScoreFour() {
    let count = 0

    line4.forEach(four => {
      if (four.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10) {
      score.innerHTML = parseFloat(score.innerHTML) + 10
      scoreNum += 10
      console.log('10 points!')
      line4.forEach(four => {
        four.classList.remove('idle')
      })
      count = count - 10
      //drops lines
      const removedSquares = []
      const linesToIgnore = line4.concat(line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19)
      const filteredBoard = board.filter(index => !linesToIgnore.includes(index))

      filteredBoard.forEach((square, index) => {
        if (square.classList.contains('idle')) {
          removedSquares.push(index)
        }
      })
      filteredBoard.forEach(square => {
        square.classList.remove('idle')
      })
      removedSquares.forEach(index => {
        board[index + width].classList.add('idle')
      })
      scoreSound.src = 'sounds/menunote.wav'
      scoreSound.play()
    }
  }


  setInterval(giveScoreNineteen, 100)
  setInterval(giveScoreEighteen, 150)
  setInterval(giveScoreSeventeen, 200)
  setInterval(giveScoreSixteen, 250)
  setInterval(giveScoreFifteen, 300)
  setInterval(giveScoreFourteen, 350)
  setInterval(giveScoreThirteen, 400)
  setInterval(giveScoreTwelve, 450)
  setInterval(giveScoreEleven, 500)
  setInterval(giveScoreTen, 550)
  setInterval(giveScoreNine, 600)
  setInterval(giveScoreEight, 650)
  setInterval(giveScoreSeven, 700)
  setInterval(giveScoreSix, 750)
  setInterval(giveScoreFive, 800)
  setInterval(giveScoreFour, 850)


  //MUSIC SECTION
  //MUSIC SECTION

  const audio = document.querySelector('#audio')
  audio.volume = 0.2
  const music = document.querySelector('.music')
  const stopMusic = document.querySelector('.stopMusic')
  const tracks = ['sounds/atompilz.mp3', 'sounds/Glaubensfrage.mp3']
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
  // console.log(board)

})