let score=JSON.parse(localStorage.getItem('score'))||{
    win:0,
    loss:0,
    tie:0,
}
update();


function playgame(playermove) {
    const computer=pick();
   
    let result = '';
    if (playermove === 'scissors')  {
        if (computer === 'rock') {
            result = 'YOU LOSE';
            score.lose++;
        }
        else if (computer === 'paper') {
            result = 'YOU WIN';
            score.win++;
        }
        else if (computer === 'scissors') {
            result = 'TIE';
            score.tie++;
        }
    }
    else if (playermove === 'paper') {
        
        if (computer === 'rock') {
            result = 'YOU WIN';
           score. win++;
        }
        else if (computer === 'paper') {
            result = 'TIE';
            score.tie++;
        }
        else if (computer === 'scissors') {
            result = 'YOU LOSE';
            score.lose++;
        }

    }

    else if (playermove === 'rock') {
        
        if (computer === 'rock') {
            result = 'TIE';
            score.tie++;
        }
        else if (computer === 'paper') {
            result = 'YOU LOSE';
            score.lose++;
        }
        else if (computer === 'scissors') {
            result = 'YOU WIN';
            score,win++;
        }
    }
    localStorage.setItem('score',JSON.stringify(score));
    
update();


    document.querySelector('.result').innerHTML=result;
    document.querySelector('.moves').innerHTML=`YOU
        <img src="images/${playermove} Emoji.png"  class="moveicon">
        COMPUTER
        <img src="images/${computer} Emoji.png" alt="" class="moveicon">
        `;
  


}


  function update()
 {
    document.querySelector('.js-score')
.innerHTML=` WIN= ${score.win} LOSE= ${score.lose} TIE= ${score.tie}`;
 }
function pick() {
    const random = Math.random();

    let computer = '';
    if (random >= 0 && random < 1 / 3) {
        computer = ('rock');
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computer = 'paper';
    }
    else if (random >= 2 / 3 && random < 1) {
        computer = ('scissors');
    }
    return computer;

}



