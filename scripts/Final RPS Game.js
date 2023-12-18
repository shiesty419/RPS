let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
   losses : 0,
    Ties : 0
}

updateScoreElement ();

/*
    if (!score === null) {
score = {
    wins : 0,
    losses : 0,
    Ties : 0
};
}
*/
    let isAutoPlaying = false;
    let intervalID; 

    // const  autoPlay = () => {

  //  };

    function autoPlay () {
    if(!isAutoPlaying) {
       intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
    
}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });


document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    })



document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r') {
            playGame('rock')
        } else if ( event.key === 'p') {
            playGame('paper')
        } else if ( event.key === 's') {
            playGame('scissors')
        }
    })

function playGame(playerMove) {
const computerMove = pickComputerMove();

    let result = '';

        if (playerMove === 'Scissors') {

             if (computerMove === 'rock') {
                result = 'You lose';
            } else if (computerMove === 'paper') {
                result = 'You win';
            } else if (computerMove === 'scissors') {
                result = 'Tie';
            }

        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'You win';
            } else if (computerMove === 'paper') {
                result = 'Tie';
            } else if (computerMove === 'scissors') {
                result = 'You lose';
            }

        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
            result = 'Tie'
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
        }
   
        if (result === 'You win') {
            score.wins += 1;
        } else if (result === 'You lose' ) {
            score.losses += 1;
        } else if (result ===  'Tie' ) {
            score.Ties += 1;
        }


        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement ();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
        <img src="images/${playerMove}-emoji.png" class="Move-icon">
        <img src="images/${computerMove}-emoji.png" class="Move-icon">

        computer`;
    }

function updateScoreElement () {

document.querySelector('.js-score')
.innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties : ${score.Ties} `;
}

function pickComputerMove() { 
let computerMove = '';
const random = Math.random();
if (random >=0 && random < 1/3) {
    computerMove = 'rock';

}   else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = 'paper';

}   else if(random >= 2 / 3 && random < 1 ) {
    computerMove ='scissors';
}


    return computerMove;
   
    /*
        The code won't run anything after the return statement
         console.log('after');
    */

         //This is a code curated by NAZIR AQIDAH
}