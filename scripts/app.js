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

  const I = {
    name: 'I',
    playerIndex: [13,14,15,16]
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
    playerIndex: [13,14,4,5]
  }
  const Z = {
    name: 'Z',
    playerIndex: [13,14,24,25]
  }

  const whatShapeArray = [I,Sq,L,T,J,S,Z]
  let whichOne
  let degrees = 0


  function whatShape(){

    whichOne = whatShapeArray[Math.floor(Math.random() * whatShapeArray.length)]


    playerIndex= whichOne.playerIndex[0]
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

  function rotate(){
    switch (whichOne.name){
      case 'I':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 8
          playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 10
          playerIndexFour = playerIndexFour + 19
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 21
          playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 1
          playerIndexFour = playerIndexFour - 12
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 8
          playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 10
          playerIndexFour = playerIndexFour - 19
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 31
          playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'L':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'T':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 11
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour + 9
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 11
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour - 9
        }
        break
      case 'J':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 2
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour - 20
        }
        break
      case 'S':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 20
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour + 2
        }
        break
      case 'Z':
        if(degrees === 0){
          degrees = degrees + 90
          playerIndex = playerIndex - 9
          // playerIndexTwo = playerIndexTwo + 1
          playerIndexThree = playerIndexThree - 11
          playerIndexFour = playerIndexFour - 2
        } else if (degrees === 90){
          degrees = degrees + 90
          playerIndex = playerIndex + 11
          // playerIndexTwo = playerIndexTwo + 10
          playerIndexThree = playerIndexThree - 9
          playerIndexFour = playerIndexFour - 20
        } else if (degrees === 180){
          degrees = degrees + 90
          playerIndex = playerIndex + 9
          // playerIndexTwo = playerIndexTwo - 1
          playerIndexThree = playerIndexThree + 11
          playerIndexFour = playerIndexFour + 2
        } else if (degrees === 270){
          degrees = degrees - 270
          playerIndex = playerIndex - 11
          // playerIndexTwo = playerIndexTwo - 20
          playerIndexThree = playerIndexThree + 9
          playerIndexFour = playerIndexFour + 20
        }
        break

    }
  }

  function idleCheck(){
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

  function bottomCheck(){
    if(playerIndex === 190 || playerIndex === 191 || playerIndex === 192 || playerIndex === 191 || playerIndex === 193 || playerIndex === 194 || playerIndex === 195 || playerIndex === 196|| playerIndex === 197|| playerIndex === 198|| playerIndex === 199 || playerIndexTwo === 190 || playerIndexTwo === 191 || playerIndexTwo === 192 || playerIndexTwo === 193 || playerIndexTwo === 194 || playerIndexTwo === 195 || playerIndexTwo === 196|| playerIndexTwo === 197|| playerIndexTwo === 198|| playerIndexTwo === 199 || playerIndexThree === 190 || playerIndexThree === 191 || playerIndexThree === 192 || playerIndexThree === 193 || playerIndexThree === 194 || playerIndexThree === 195 || playerIndexThree === 196|| playerIndexThree === 197|| playerIndexThree === 198|| playerIndexThree === 199 || playerIndexFour === 190 || playerIndexFour === 191 || playerIndexFour === 192 || playerIndexFour === 193 || playerIndexFour === 194 || playerIndexFour === 195 || playerIndexFour === 196|| playerIndexFour === 197|| playerIndexFour === 198|| playerIndexFour === 199){
      console.log('found the bottom')
      return true

    } else {
      return false
    }
  }

  function changeClass(){
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


  //scoreboardsendhelp
  //scoreboardsendhelp


  //line 2
  board[20].classList.add('two')
  board[21].classList.add('two')
  board[22].classList.add('two')
  board[23].classList.add('two')
  board[24].classList.add('two')
  board[25].classList.add('two')
  board[26].classList.add('two')
  board[27].classList.add('two')
  board[28].classList.add('two')
  board[29].classList.add('two')
  //line 3
  board[30].classList.add('three')
  board[31].classList.add('three')
  board[32].classList.add('three')
  board[33].classList.add('three')
  board[34].classList.add('three')
  board[35].classList.add('three')
  board[36].classList.add('three')
  board[37].classList.add('three')
  board[38].classList.add('three')
  board[39].classList.add('three')
  //line 4
  board[40].classList.add('four')
  board[41].classList.add('four')
  board[42].classList.add('four')
  board[43].classList.add('four')
  board[44].classList.add('four')
  board[45].classList.add('four')
  board[46].classList.add('four')
  board[47].classList.add('four')
  board[48].classList.add('four')
  board[49].classList.add('four')
  //line 5
  board[50].classList.add('five')
  board[51].classList.add('five')
  board[52].classList.add('five')
  board[53].classList.add('five')
  board[54].classList.add('five')
  board[55].classList.add('five')
  board[56].classList.add('five')
  board[57].classList.add('five')
  board[58].classList.add('five')
  board[59].classList.add('five')
  //line 6
  board[60].classList.add('six')
  board[61].classList.add('six')
  board[62].classList.add('six')
  board[63].classList.add('six')
  board[64].classList.add('six')
  board[65].classList.add('six')
  board[66].classList.add('six')
  board[67].classList.add('six')
  board[68].classList.add('six')
  board[69].classList.add('six')
  //line 7
  board[70].classList.add('seven')
  board[71].classList.add('seven')
  board[72].classList.add('seven')
  board[73].classList.add('seven')
  board[74].classList.add('seven')
  board[75].classList.add('seven')
  board[76].classList.add('seven')
  board[77].classList.add('seven')
  board[78].classList.add('seven')
  board[79].classList.add('seven')
  //line 8
  board[80].classList.add('eight')
  board[81].classList.add('eight')
  board[82].classList.add('eight')
  board[83].classList.add('eight')
  board[84].classList.add('eight')
  board[85].classList.add('eight')
  board[86].classList.add('eight')
  board[87].classList.add('eight')
  board[88].classList.add('eight')
  board[89].classList.add('eight')
  //line 9
  board[90].classList.add('nine')
  board[91].classList.add('nine')
  board[92].classList.add('nine')
  board[93].classList.add('nine')
  board[94].classList.add('nine')
  board[95].classList.add('nine')
  board[96].classList.add('nine')
  board[97].classList.add('nine')
  board[98].classList.add('nine')
  board[99].classList.add('nine')
  //line 10
  board[100].classList.add('ten')
  board[101].classList.add('ten')
  board[102].classList.add('ten')
  board[103].classList.add('ten')
  board[104].classList.add('ten')
  board[105].classList.add('ten')
  board[106].classList.add('ten')
  board[107].classList.add('ten')
  board[108].classList.add('ten')
  board[109].classList.add('ten')
  //line 11
  board[110].classList.add('eleven')
  board[111].classList.add('eleven')
  board[112].classList.add('eleven')
  board[113].classList.add('eleven')
  board[114].classList.add('eleven')
  board[115].classList.add('eleven')
  board[116].classList.add('eleven')
  board[117].classList.add('eleven')
  board[118].classList.add('eleven')
  board[119].classList.add('eleven')
  //line 12
  board[120].classList.add('twelve')
  board[121].classList.add('twelve')
  board[122].classList.add('twelve')
  board[123].classList.add('twelve')
  board[124].classList.add('twelve')
  board[125].classList.add('twelve')
  board[126].classList.add('twelve')
  board[127].classList.add('twelve')
  board[128].classList.add('twelve')
  board[129].classList.add('twelve')
  //line 13
  board[130].classList.add('thirteen')
  board[131].classList.add('thirteen')
  board[132].classList.add('thirteen')
  board[133].classList.add('thirteen')
  board[134].classList.add('thirteen')
  board[135].classList.add('thirteen')
  board[136].classList.add('thirteen')
  board[137].classList.add('thirteen')
  board[138].classList.add('thirteen')
  board[139].classList.add('thirteen')
  //line 14
  board[140].classList.add('fourteen')
  board[141].classList.add('fourteen')
  board[142].classList.add('fourteen')
  board[143].classList.add('fourteen')
  board[144].classList.add('fourteen')
  board[145].classList.add('fourteen')
  board[146].classList.add('fourteen')
  board[147].classList.add('fourteen')
  board[148].classList.add('fourteen')
  board[149].classList.add('fourteen')
  //line 15
  board[150].classList.add('fifteen')
  board[151].classList.add('fifteen')
  board[152].classList.add('fifteen')
  board[153].classList.add('fifteen')
  board[154].classList.add('fifteen')
  board[155].classList.add('fifteen')
  board[156].classList.add('fifteen')
  board[157].classList.add('fifteen')
  board[158].classList.add('fifteen')
  board[159].classList.add('fifteen')
  //line 16
  board[160].classList.add('sixteen')
  board[161].classList.add('sixteen')
  board[162].classList.add('sixteen')
  board[163].classList.add('sixteen')
  board[164].classList.add('sixteen')
  board[165].classList.add('sixteen')
  board[166].classList.add('sixteen')
  board[167].classList.add('sixteen')
  board[168].classList.add('sixteen')
  board[169].classList.add('sixteen')
  //line 17
  board[170].classList.add('seventeen')
  board[171].classList.add('seventeen')
  board[172].classList.add('seventeen')
  board[173].classList.add('seventeen')
  board[174].classList.add('seventeen')
  board[175].classList.add('seventeen')
  board[176].classList.add('seventeen')
  board[177].classList.add('seventeen')
  board[178].classList.add('seventeen')
  board[179].classList.add('seventeen')
  //line 18
  board[180].classList.add('eighteen')
  board[181].classList.add('eighteen')
  board[182].classList.add('eighteen')
  board[183].classList.add('eighteen')
  board[184].classList.add('eighteen')
  board[185].classList.add('eighteen')
  board[186].classList.add('eighteen')
  board[187].classList.add('eighteen')
  board[188].classList.add('eighteen')
  board[189].classList.add('eighteen')
  //line 19
  board[190].classList.add('nineteen')
  board[191].classList.add('nineteen')
  board[192].classList.add('nineteen')
  board[193].classList.add('nineteen')
  board[194].classList.add('nineteen')
  board[195].classList.add('nineteen')
  board[196].classList.add('nineteen')
  board[197].classList.add('nineteen')
  board[198].classList.add('nineteen')
  board[199].classList.add('nineteen')




  const line2 = [board[20],board[21],board[22],board[23],board[24],board[25],board[26],board[27],board[28],board[29]]
  const line3 = [board[30],board[31],board[32],board[33],board[34],board[35],board[36],board[37],board[38],board[39]]
  const line4 = [board[40],board[41],board[42],board[43],board[44],board[45],board[46],board[47],board[48],board[49]]
  const line5 = [board[50],board[51],board[52],board[53],board[54],board[55],board[56],board[57],board[58],board[59]]
  const line6 = [board[60],board[61],board[62],board[63],board[64],board[65],board[66],board[67],board[68],board[69]]
  const line7 = [board[70],board[71],board[72],board[73],board[74],board[75],board[76],board[77],board[78],board[79]]
  const line8 = [board[80],board[81],board[82],board[83],board[84],board[85],board[86],board[87],board[88],board[89]]
  const line9 = [board[90],board[91],board[92],board[93],board[94],board[95],board[96],board[97],board[98],board[99]]

  const line10 = [board[100],board[101],board[102],board[103],board[104],board[105],board[106],board[107],board[108],board[109]]
  const line11 = [board[110],board[111],board[112],board[113],board[114],board[115],board[116],board[117],board[118],board[119]]
  const line12 = [board[120],board[121],board[122],board[123],board[124],board[125],board[126],board[127],board[128],board[129]]
  const line13 = [board[130],board[131],board[132],board[133],board[134],board[135],board[136],board[137],board[138],board[139]]
  const line14 = [board[140],board[141],board[142],board[143],board[144],board[145],board[146],board[147],board[148],board[149]]
  const line15 = [board[150],board[151],board[152],board[153],board[154],board[155],board[156],board[157],board[158],board[159]]
  const line16 = [board[160],board[161],board[162],board[163],board[164],board[165],board[166],board[167],board[168],board[169]]
  const line17 = [board[170],board[171],board[172],board[173],board[174],board[175],board[176],board[177],board[178],board[179]]
  const line18 = [board[180],board[181],board[182],board[183],board[184],board[185],board[186],board[187],board[188],board[189]]
  const line19 = [board[190],board[191],board[192],board[193],board[194],board[195],board[196],board[197],board[198],board[199]]

  const whichLine = [line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,]


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


  // slow drop **********************************************************
  function slowDrop(){

    console.log('check now if the move will be possible')
    if (bottomCheck() === false && idleCheck() === false){

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

        }
        break
      case 37:
        if (playerIndexFour % 10 === 0 || playerIndexThree % 10 === 0 || playerIndexTwo % 10 === 0 || playerIndex % 10 === 0 ){
          console.log('wall')
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
        if (playerIndexFour % 10 === 8 || playerIndexThree % 10 === 8 || playerIndexTwo % 10 === 8 || playerIndex % 10 === 8 || playerIndexFour % 10 === 1 || playerIndexThree % 10 === 1 || playerIndexTwo % 10 === 1 || playerIndex % 10 === 1 ){
          console.log('wall')
        } else {
          console.log(whichOne.name,whichOne.playerIndex[0],whichOne.playerIndex[1],whichOne.playerIndex[2],whichOne.playerIndex[3],degrees)
          rotate()
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
        // if (playerIndex + width < width * height ) {
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
  function giveScoreNineteen(){
    let count = 0

    line19.forEach(nineteen => {
      if(nineteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
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

      // audio.src = tracks[Math.floor(Math.random() * tracks.length)]
      // audio.play()
    }
  }


  // for (let i = board.length-1; i >= 0; i--){
  //
  //   if(idleCheck() === false){
  //
  //   }
  // }

  // const removedSquares = []
  //
  // board.forEach((square, index) => {
  //   if (square.classList.contains('idle')) {
  //     removedSquares.push(index)
  //   }
  // })
  // board.forEach(square => {
  //   square.classList.remove('idle')
  // })
  //
  //
  // removedSquares.forEach(index => {
  //   board[index + width].classList.add('idle')
  // })

  // board[board.indexof(removedSquares).classList.add('idle')]
  //
  // = removedSquares.forEach(id => item + width)




  function giveScoreEighteen(){
    let count = 0

    line18.forEach(eighteen => {
      if(eighteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
      line18.forEach(eighteen => {
        eighteen.classList.remove('idle')
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
      // audio.src = tracks[Math.floor(Math.random() * tracks.length)]
      // audio.play()
    }
  }
  function giveScoreSeventeen(){
    let count = 0

    line17.forEach(seventeen => {
      if(seventeen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
      line17.forEach(seventeen => {
        seventeen.classList.remove('idle')
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
      // audio.src = tracks[Math.floor(Math.random() * tracks.length)]
      // audio.play()
    }
  }
  function giveScoreSixteen(){
    let count = 0

    line16.forEach(sixteen => {
      if(sixteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
      line16.forEach(sixteen => {
        sixteen.classList.remove('idle')
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
      // audio.src = tracks[Math.floor(Math.random() * tracks.length)]
      // audio.play()
    }
  }
  function giveScoreFifteen(){
    let count = 0

    line15.forEach(fifteen => {
      if(fifteen.classList.contains('idle')) {
        count = count + 1
      }
    })
    if (count === 10){
      score.innerHTML = parseFloat(score.innerHTML) + 10
      console.log('10 points!')
      line15.forEach(fifteen => {
        fifteen.classList.remove('idle')
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
      // audio.src = tracks[Math.floor(Math.random() * tracks.length)]
      // audio.play()
    }
  }

  setInterval(giveScoreNineteen, 1000)
  setInterval(giveScoreEighteen, 1000)
  setInterval(giveScoreSeventeen, 1000)
  setInterval(giveScoreSixteen, 1000)
  setInterval(giveScoreFifteen, 1000)


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
