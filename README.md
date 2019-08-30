# Tetris

## Brief
Recreate the classic arcade game of Tetris using vanilla JavaScript.

I wanted to make Tetris as I've always been a fan of the sandbox type of games with randomised outcomes.

## Timeframe & Team
7 days, personal project

Project is live here https://davt49.github.io/sei-project-1/

![](pics/tetris.png)

## Technologies
- HTML5
- CSS
- Javascript ES6
- Git
- Github

## Theme

The theme is specifically inspired by an instrumental album I've been listening to. There are songs on the music player that provides the ambiance for this background of a luxurious, warm safe haven from the wintry cold outside. Overall I wanted to create a relaxing atmosphere for this game, I'd like to think the music is integral to the theme.

## Controls

⬅️,➡️,⬇️ for movement.

⬆️ to rotate within the central area.

Game starts automatically.
Reset button will clear the board and reset the score.

Play button will start a random song.
Stop button will stop the music.


## Javascript Overview

##### Grid

First I have to create a working grid for the game to be based on. Using a for loop to keep creating squares until the maximum number determined by height times width. The squares are given a grid-item class and then pushed onto the board array. Finally it's appended onto the grid.

![](pics/makeGrid.png)

##### Shape

The starting positions of the shapes are created by assigning numbers on the board to them. They receive an active class to their starting positions and all four of the blocks drop their position every second. Since the board width is 10, this is simply adding 10 to the number.

![](pics/slowDrop.png)

To rotate the shapes I set a new 'degrees' variable that switches numbers when set specifically for their shape.

![](pics/rotate.png)

##### Give Score/line manipulation

 When the shapes reach the bottom they will change to a class called 'idle'. When each line is filled completely, 10 points will be added to the scoreboard with a soothing sound effect, as well as dropping all the 'idle' lines above down one line. Due to the different circumstances for each line clear I have to create a seperate function for each. If any the shapes reach another 'idle' block they will be stopped and have their class switched to idle right away.

![](pics/giveScore.png)

To make sure the shapes don't physically pass through idle blocks I created a function to check for the 'idle' class on the sides.

![](pics/sideCheck.png)

##### Music Section

I added two mp3 tracks that I feel compliment the feel of the design well. They are linked to the buttons as well as the audio tag on the html.

![](pics/music.png)

## Wins

Being one of the harder games from the list we could pick from, I'm very happy that I created a smooth gameplay and overall pleasant experience. I also enjoyed the intuitiveness of vanilla JS, creating and experimenting with functions.

## Challenges and Main Takeaways

There were many challenges while making this. Most notably making sure the lines clear correctly as well as making sure 'idle' blocks are impassable.

Because of the fact that each line clear affect the board differently I have a different function for each, for example, you clear a full line on row 17, all the blocks from above has to move down a line but the three lines below cannot be touched; But if I have a full line on row 19, only the bottom line cannot be touched. The current version functions well, but not perfect.

Originally there was not enough restrictions on the key controls, and a host of problems such as active blocks moving across the side border, which messed up the calculations for rotations, so I had to make sure the left and right key does not work on the side columns on the edge. After that, certain blocks, particularly 'I' and 'T' are still crossing the edge while rotating, and the fix was to make the rotate button not work on the 2 side columns on the edge. Later on, a fix was added to the left and right buttons to check that they are not passing through 'idle' blocks. A lot of functionality is attached to those 4 keys for the game, which was slightly surprising. Still a lot can be improved.


## Future Improvements

At over 1.3k lines, App.js is really long for the other Tetris makers at GA that I know. This is because of the function for each line of score giving/line clearing and dropping cannot just be the same and applied to every single instance. Finding a way to fix that will drastically reduce the length of the code required.

The way the rotations are set up (as a calculation) is not really optimal, as the user cannot rotate the shapes on the 2 side columns on the sides. Finding a way to improve this would be ideal.

Additional features such as difficulty modes as well as a background-changing design could bring more to the gaming experience.
