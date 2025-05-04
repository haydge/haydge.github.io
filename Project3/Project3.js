//Welcome!! Would you like to try guessing the number I'm thinking of? You'll have 10 chances to guess the correct number between 1 and 100.

//Enter the number for your  #(st, nd, rd, th) guess. - repeats 10 times.
//Try again. Your guess was too high.
//Try again. Your guess was too low.

//Please only enter numbers that are between 1 and 100.
//You've already guessed that number. Try a different one.

//Too bad. You didn't guess the correct number. The number was #. Would you like to play again?

//Congratulations. You guessed the number in # tries. You earned # points. Enter your initials for the score board.
//Your guessed right. Your might be psychic. You must be psychic.
// alert('Hello again!');
// alert('test');

let ranNumm= Math.floor(Math.random() * (101 - 1) + 1);
console.log(ranNumm);
let x=0;
let y=0;
let a='st';
let b='nd';
let c='rd';
let d='th';
let rep;
let guesses=[];
let score=10;

const input=document.querySelector('.input');
const btn=document.querySelector('.subButt');
const msg=document.querySelector('.pEntry');
const currentScore=document.querySelector('.cScore');
const highScore=document.querySelector('.hScore');
const reseter=document.querySelector('.startOver');
const replay=document.querySelector('#replay')
// const winScreen=document.querySelector('.mainMenu');
// const loseScreen=document.querySelector('.')

function addGuess(){
    const a2=input.value;
    const ul=document.querySelector('ul');

    const li=document.createElement('li');

    li.textContent=a2;

    ul.appendChild(li);
}

function clearGuess(){
    const ulElement = document.querySelector('ul');

    const liElement = document.querySelector('li');

    ulElement.removeChild(liElement);
    // ulElement.innerHTML;
}

function checkWishes(){
    if (Number(x)==10){
        loseMenu();
        msg.textContent='Oh no, you ran out of guesses. Better luck next time.';
        // guesses.splice(0);
        // x=0;
    }
    else{
        
    }
}

function winMenu(){
    document.getElementById('mainMenu').style.backgroundColor='lightBlue';
    document.getElementById('numGuess').style.opacity='0';
    document.getElementById('numGuess').style.pointerEvents='none';
    document.getElementById('play').style.opacity='0';
    document.getElementById('play').style.pointerEvents='none';
    document.getElementById('replay').style.opacity='1';
    document.getElementById('replay').style.pointerEvents='all';
}

function menuReset(){
    document.getElementById('mainMenu').style.backgroundColor='tan';
    document.getElementById('numGuess').style.opacity='1';
    document.getElementById('numGuess').style.pointerEvents='all';
    document.getElementById('play').style.opacity='1';
    document.getElementById('play').style.pointerEvents='all';
    document.getElementById('replay').style.opacity='0';
    document.getElementById('replay').style.pointerEvents='none';

}

function loseMenu(){
    document.getElementById('mainMenu').style.backgroundColor='orangeRed';
    document.getElementById('numGuess').style.opacity='0';
    document.getElementById('numGuess').style.pointerEvents='none';
    document.getElementById('play').style.opacity='0';
    document.getElementById('play').style.pointerEvents='none';
    document.getElementById('replay').style.opacity='1';
    document.getElementById('replay').style.pointerEvents='all';
}

// function emptyGuess(){
//     for(let v=0; v < 1+2*guesses.length; v++){
//         // delete guesses[v];
//         guesses.pop();
//     }
// }

// addGuess((input.value));

btn.addEventListener('click',function(){
    // typleof Number(input.value)
    if (!Number(input.value)||Number(input.value)>100||Number(input.value)<1){
        msg.textContent='ONLY enter numbers between 1 and 100!'
    }
    else if (Number(input.value)===ranNumm&&x<=score){
        msg.textContent='You got it. Good JOB!';
        winMenu();
        guesses.push(input.value);
        addGuess();
        x++;
        currentScore.textContent=`Score: ${x}`;
        highScore.textContent=`Score: ${x}`;
        score=x;
        x=0;
    }
        //  if (Number(currentScore)>Number(highScore)){
        //     highScore.textContent=`Score: ${currentScore}`;
        // }
    else if (Number(input.value)===ranNumm&&x>score){
        msg.textContent='You got it. Good JOB!';
        winMenu();
        guesses.push(input.value);
        addGuess();
        x++;
        currentScore.textContent=`Score: ${x}`;
        x=0;
    }
        

    else if(Number(input.value)>ranNumm){
        msg.textContent='Too high. Try a lower number.';
        guesses.push(input.value);
        addGuess();
        x++;
        checkWishes();
    }

    else if (Number(input.value)<ranNumm){
        msg.textContent='Too low. Guess again.';
        guesses.push(input.value);
        addGuess();
        x++;
        checkWishes();
    }
    // guesses.push(input.value);
    console.log(input.value);
    console.log(guesses);
    console.log(x);
    console.log(currentScore);
});


// let i = 0;
reseter.addEventListener('click', function(){
    // clearGuess();
    for(let i = 0; i < guesses.length; i++){
        clearGuess();
    }

    // emptyGuess();
    document.getElementById('numGuess').value = '';
    guesses.splice(0);
    x=0;
    menuReset();
    currentScore.textContent=`Score: ${x}`;
    ranNumm= Math.floor(Math.random() * (101 - 1) + 1);
    console.log(ranNumm);
    msg.textContent='Make a Guess!';

})

replay.addEventListener('click', function(){
    // clearGuess();
    for(let i = 0; i < guesses.length; i++){
        clearGuess();
    }

    // emptyGuess();
    document.getElementById('numGuess').value = '';
    guesses.splice(0);
    x=0;
    menuReset();
    currentScore.textContent=`Score: ${x}`;
    ranNumm= Math.floor(Math.random() * (101 - 1) + 1);
    console.log(ranNumm);
    msg.textContent='Make a Guess!';

})


//Reset button delets child elements and resets counter to start over.
//When out of guesses or when you win. hide the original button and guess window and replace them with play again button.

// while (x<10&&y==0){

// }




// $('p1').text('Hellos');
// const guess=prompt(`Enter the number for your ${x+1}${a} guess.`);

// if (x+1<2){
//     rep=a;
// }
// else if (x+1<3&&x+1>1){
//     rep=b;
// }
// else if (x=1<4&&x+1>2){
//     rep=c;
// }
// else{
//     rep=d;
// }

// const guess=prompt(`Enter the number for your ${x+1}${rep} guess.`);

// if (guess<ranNumm){
//     return //prompt('Try again. The number you guessed was too low.')
// }

// else if(guess>ranNumm){
//     return //prompt('Try again. Your guess was too high.')
// }

// else{
//     return //`Congratulations. You guessed the number in ${x} tries. You earned ${10-x} points. Enter your initials for the score board.`
// }

// bill.push(guess);

// if(x=10){
//     return //prompt(`Too bad. You didn't guess the correct number. The number was ${ranNum}. Would you like to play again?`)
// }


// document.writeln('<p2>Hellos</p2>')
// document.querySelector('p1').textContent="Hellos";
// document.body.onload = addelement;
// const currentScore=document.querySelector('.currentscore');
// function addelement() {
//     const newli = document.createElement('li');

//     const newContent = document.createTextNode('Hellos');

//     newli.appendChild(newContent);

//     const currentLi = document.getElementById('li1');
//     document.body.insertBefore(newli, currentLi);
// }

// class ExpandingList extends HTMLUListElement{
//     constructor(){
//         super();

//     }
//     }
// }

// const ul=document.querySelector('ul');

// const li=document.createElement('li');

// li.textContent='Hellos';

// ul.appendChild(li);


