let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//initialize a count so that if no winner till 9 attempts then draw will be declared.
let count = 0;

// two players with alternate turn
let turnO = true; //playerX, playerY

// storing winning pattern with 2D-arrays
const WinPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// adding eventlistener on every box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked boxes");
    // now we can access all the boxes, now for alternate turn
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    //Now we need to disable that button cause we don't want other player to change its value
    box.disabled = true;
    //  count will be increased everytime
    count++;

    //function to check winner
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    
  });
});

//check winner function
const checkWinner = function () {
  // we have to take loop for checking the value in the WinPatterns
  // we are checking only in the winning pattern if all the 0th, 1st& 2nd index are of same value i.e., O or X then we can declare the winner
  // means boxes.pattern[i].innerText matches with each other for 0,1,2 position that is the winner
  for (pattern of WinPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    //all boxes should be clicked in the row of winArrayPattern
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      // condition for same value in those three array pattern
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner");

        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  //when the winner is shown then all the boxes will be disabled
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//when we get one winner then we disable all boxes
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// functionality of newGame and ResetGame
const resetGame = () => {
  //all boxes should be enabled , turnO will be started, msgContainer will now hide and shows only when we need to declare the result
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  // count will start from zero
  count = 0;
};

// when the game is draw
const gameDraw = () => {
  msg.innerText = `Game was Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




/*
------------------ EXPLANATION --------------------------
 give number to the boxes
 then point the winning pattern

 make 2d-array of the winning pattern and then match if all the pointer in the array is of one player i.e., same then that player wins
 which means 
  boxes[pattern[0]].innerText == boxes[pattern[1]].innerText == boxes[pattern[2]].innerText;

we can also check the condition for the draw 
take count till 9 increase count after every player click when the count reaches 9 and if there is no winner i.e. isWinner = false;

then innerText of the msg container will be according to draw

also check for enable and disable of boxes
*/