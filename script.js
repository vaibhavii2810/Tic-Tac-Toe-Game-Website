
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// playerX, PlayerO
let turnO =  true ;

//let arr = ["hel" ,"wow","bad"];
// 2D array
//let arr2 = [["app","choco"],["potato","pineapple"],["sad","happy"]];

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO= true;
   // count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {

        //console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO = false;
        }
        else
        {
            box.innerText="X";
            turnO = true;
        }
        box.disabled= true;

        checkWinner();
        //count++;

        // let isWinner = checkWinner();

        // if (count === 9 && !isWinner) {
        //   gameDraw();
        // }
    });
   
});

// const gameDraw = () => {
//     msg.innerText = `Game was a Draw.`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   };

const disableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{

    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =() => {
   for (let pattern of winPatterns)
   {
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(
    //             boxes[pattern[0]].innerText,
    //             boxes[pattern[1]].innerText,
    //              boxes[pattern[2]].innerText
    //              );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText; 
    let pos3Val = boxes[pattern[2]].innerText; 
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != "" )
    {
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
           // console.log("Winner",pos1Val);
            
            showWinner(pos1Val);
        }
    }

   } 
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



