
Built with HTML, CSS and JavaScript.

This is a two player game against the computer or against another player)

A win state - a way for the player to win the game

High score can be considered a win state

A lose state - a way for the player to lose the game

A way to keep playing if the game is not over

Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost

==***  Whack_A_Mole!! ***==

Welcome to this version of Whack_A_Mole. The scope of the program aligns with the rules of the game. The rules are simple and the code easily customized to showcase a variety of functions. 

To play: the player "whacks" as many moles within 10 seconds. A single mole will appear in a random square and a point is earned if the cursor clicks on the mole before it disappears. Both countdown and score are displayed on the game board. 

An alert message appears and indicates the game is over along with the final score. A second alert message informs the player to click on the start button to commence another round and beat the last score.

Properties, Methods, functions used in this version:
Boolean;
querySelector();
addEventListener();
setInterval and clearInterval;
classList;
forEach;
arrow functions;
window alert;
Math.floor; and
Math.Random

HTML contains: 
classes to build out
the gameboard uses a 9-square "grid", with each "square" uniquely(id) numbered 1-9;
two hyperlink anchors to display: "Time-Left" and "Score";
button to "start" and restart the game;

CSS contains: 
styling specifications for html, header and body elements;
"mole" graphic was created in PNG format (using "Canva" graphics platform) and migrated into the game repository and url-tracked in CSS.

JS contains:
functions: randomization of squares; move mole and timer countdown


Challenges:
Once the functionality to start and execute the game were determined, finessing the quality of the player experience was an area to improve. Initiating and then restarting the game after each round provided an opportunity to assess the code sequencing.

Several iterations were done to breakdown the game into three stages of the game: Initial Start, Game Over and Game Restart. Each phase involved adjustments to align mole movement, scoring, and timing at each phase.

Thanks for reading and Enjoy the GAME!







