let score = JSON.parse(localStorage.getItem('score')) || 
{
  wins : 0,
  loose : 0,
  ties : 0
  };

  function playGame(yourMove){
    computerMove = pickComputerMove();
    result = compareResult(yourMove,computerMove);
    displayResult(yourMove, computerMove, result);
  }

  let intervalId;
  function autoPlay(){
    intervalId = setInterval(function(){
      let playerMove = pickComputerMove();
      computerMove = pickComputerMove();
      result = compareResult(playerMove,computerMove);
      displayResult(playerMove, computerMove, result);
    } , 1000);
  }

// PICK COMPUTER MOVE
function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  // Computer selects its move
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }
  else if(randomNumber > 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }
  else if(randomNumber > 2/3 && randomNumber <= 1){
    computerMove = 'Scissor';
    // console.log(randomNumber)
  }
  return computerMove;
}


// COMPARE RESULT
function compareResult(yourMove, computerMove){
  let result = '';

  // SCISSOR
  if(yourMove=='Scissor'){
    if(computerMove === 'Rock'){
    result = 'You Loose.';
    }
    else if(computerMove === 'Paper'){
      result = 'You Win!';
    }
    else if(computerMove === 'Scissor'){
      result = 'Tie.';
    }
    updateScore(result);
    return result;
  }

// PAPER
  else if(yourMove=='Paper'){
    if(computerMove === 'Rock'){
    result = 'You Win!';
    }
    else if(computerMove === 'Paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'Scissor'){
      result = 'You Loose.';
    }
    updateScore(result);
    return result;
  }

  // ROCK
  else if(yourMove=='Rock'){
    if(computerMove === 'Rock'){
    result = 'Tie.';
    }
    else if(computerMove === 'Paper'){
      result = 'You Loose.';
    }
    else if(computerMove === 'Scissor'){
      result = 'You Win!';
    }
    updateScore(result);
    return result;
  }
}

function updateScore(result){
    if(result === 'You Win!'){
      score.wins += 1;
    }
    else if(result === 'You Loose.'){
      score.loose += 1;
    }
    else if(result === 'Tie.'){
      score.ties += 1;
    }

  localStorage.setItem('score' , JSON.stringify(score))
  }

function resetResult(){
  score.wins = 0;
  score.loose = 0;
  score.ties = 0;
  localStorage.removeItem('score');

  // console.log(score)
  // console.log(typeof score)
  
//       alert(`Score Reseted
// Wins : ${score.wins} , Losses : ${score.loose}, Ties : ${score.ties}`)
  document.querySelector('.score').innerHTML = `Wins : ${score.wins} , Losses : ${score.loose}, Ties : ${score.ties}`
}

// localStorage.setItem('message' , 'hello')

// DISPLAY RESULT
function displayResult(yourMove, computerMove, result){
//       alert(`You choose ${yourMove}. Computer Choose ${computerMove}.${result}.
// Wins : ${score.wins} , Losses : ${score.loose}, Ties : ${score.ties}`);

document.querySelector('.showResult').innerHTML = `${result}`;

document.querySelector('.score').innerHTML = `Wins : ${score.wins} , Losses : ${score.loose}, Ties : ${score.ties}`;

document.querySelector('.showMoves').innerHTML = `You 
<img class="icon" src="${yourMove}-emoji.png">
<img class="icon" src="${computerMove}-emoji.png">
Computer`

}