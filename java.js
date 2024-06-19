let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector(".rst");
let para = document.querySelector(".para");
let turn0 = true;

let winningsequence = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// for (const box of boxes) {
//   box.addEventListener("click", function () {
//       if (turn0) {
//           box.innerText = "O";
//           turn0 = false;
//       } else {
//           box.innerText = "X";
//           turn0 = true;
//       }
//       box.disabled = true;
//       checkWinner();
//   });
// }

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    if (turn0) {
      boxes[i].innerText = "O";
      turn0 = false;
    } else {
      boxes[i].innerText = "X";
      turn0 = true;
    }
    boxes[i].disabled = true;
    checkwinner();
  });
}

// const checkwinner = () => {
//   for (let pattern of winningsequence) {
//     let pos1Value = boxes[pattern[0]].innerText;
//     let pos2Value = boxes[pattern[1]].innerText;
//     let pos3Value = boxes[pattern[2]].innerText;

//     if (pos1Value === "" && pos2Value === "" && pos3Value === "") {
//       if (pos1Value === pos2Value && pos2Value === pos3Value) {
//         para.innerText = `Player  ${pos1Value}   Wins`;
//         disableBox();
//       }
//     }
//   }
// }
function checkwinner(){
  for (let i = 0; i < winningsequence.length; i++) {
    let pattern = winningsequence[i];
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" ) {
      if( pos1Val === pos2Val && pos2Val === pos3Val){
      console.log("winner");
      disableBox();
      para.innerText = `Player  ${pos1Val}   Wins`;
    }

    }
  }
}


restbtn.addEventListener("click", function () {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
    para.innerText = "Start the Game";
  }
});

// function disbalebox = () => {
//   for(let box of boxes){
//     box.disabled= true;
//   }}

function disableBox() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].disabled = true;
  }
}
// boxes.forEach((box)=>{
//     box.addEventListener("click", function(){
//         if(trun0){
//             box.innerText = "o";
//             trun0 = false;
//         }
//         else{
//             box.innerText = "x";
//             trun0 = true;
//         }
//     });
// });




