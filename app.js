/* ************************************************** */

/* 
let maximum = parseInt(prompt("Enter a number range? "));
let randomNum = Math.floor(Math.random() * maximum);


let isFalse = true;

while(isFalse){
    let guess = parseInt(prompt("Guess the number:"));
    if (guess == randomNum){
        console.log(`Congratulations! You entered right. The number was ${randomNum}`);
        isFalse = false;
    }
    else if (guess > randomNum){
        console.log('Too High');
    }
    else if (guess < randomNum){
        console.log('Too Low');
    }
    else {
        console.log('Wrong! Try again.');
    }
}
*/
/* ************************************************** */

/* let isRunning = true;
let list = [];

while (isRunning) {
    let input = prompt("What do you want to do?");

 
    if (input.toLowerCase() == "quit"){
        isRunning = false;
        console.log("Good Bye, see you agian");
    }
    else if (input.toLowerCase() == "new"){
        let newTodo = prompt("Add a new todo item");
        list.push(newTodo);
        console.log(`${newTodo} added to list`);
    }
    else if (input.toLowerCase() == "list"){
        let i = 0;
        console.log(`*********************`);
        for (let item of list) {
            console.log(`${i}: ${item}`);
            i++;
        }
        console.log(`*********************`);
    }
    else if (input.toLowerCase() == "delete"){
        let index = prompt("Select the index you want to delete");
        list.splice(index, 1);
        console.log(`${index}: ${list[index]} is deleted`);
    }
    else {
        console.log("Wrong entry, try again!");
    }

} */

/* ************************************************** */
/* random color maker */
/* const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

btn.addEventListener('click', () => {
    const colorPicker = RandColor()
    document.body.style.backgroundColor = colorPicker
    h1.innerText = colorPicker
})

function RandColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
} */

/* ************************************************** */
/* form submission and adding to the list */

/* const form = document.querySelector("#form");
const input = document.querySelector("#input");
const catList = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    cats.append(newLi);
    input.value = "";
});
 */
/* ************************************************** */
/* input and change events */
/* const form = document.querySelector('#form');
const input = document.querySelector("#input");
const h1 = document.querySelector('h1');

form.addEventListener('input', function(e){
    e.preventDefault();
    h1.innerText = "Welcome,";
    h1.innerText += input.value;
})

h1.innerText = "Welcome back again"; */

/* ************************************************** */

const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const p1Display = document.querySelector('.p1Display');
const p2Display = document.querySelector('.p2Display');
const reset = document.querySelector('#reset');
const selectWinningScore = document.querySelector('#winningScore');



let p1Score = 0;
let p2Score = 0;
let winningScore;
let isGameOver = false;

p1Btn.addEventListener("click", function(){
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
    
})

p2Btn.addEventListener("click", function(){
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
    
})

selectWinningScore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetFunc();
} )

reset.addEventListener("click", resetFunc );

function resetFunc(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0; 
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}



