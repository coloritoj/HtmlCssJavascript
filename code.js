function playerBoxSelection(selection){
    alert("You chose " + selection);
}

function generateCorrectBox(){
    let boxArray = ['box1', 'box2', 'box3', 'box4'];

    let randomNum = Math.floor(Math.random() * 4);

    return boxArray[randomNum];
}



function game(box){
    let playerChoice = box;
    let correctBox = generateCorrectBox();
    let results = document.getElementById('gameResults');

    if (playerChoice === correctBox){
        results.innerHTML = 'YOU CHOSE CORRECTLY';
        results.style="color: green";
    }
    else{
        results.innerHTML = 'WRONG BOX';
        results.style="color: red";

    }
}