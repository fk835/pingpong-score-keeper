const resetBtn = document.querySelector('#reset');
const selectWinningScore = document.querySelector('#targetScore');

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('.p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('.p2Display')
}

let winningScore;
let isGameOver = false;


function updateScore(player, opponent){
    if (!isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function (){
    updateScore(p1, p2);
});

p2.button.addEventListener("click", function(){
    updateScore(p2, p1);
});

selectWinningScore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
} )

resetBtn.addEventListener("click", reset);

function reset(){
    isGameOver = false;
    for (let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
       
        p.display.classList.remove('has-text-success', 'has-text-danger');  
        p.button.disabled = false;
    }
}



