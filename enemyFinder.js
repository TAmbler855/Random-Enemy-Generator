//created by Treyven Ambler

function findEnemy(){
    var easyEnemies = ['e1', 'e2', 'e3', 'e4', 'e5'];
    var mediumEnemies = ['m1', 'm2', 'm3', 'm4', 'm5'];
    var hardEnemies = ['h1', 'h2', 'h3', 'h4', 'h5'];
    var extremeEnemies = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    //enemy categories
    var difficulty = document.getElementById('diff').value;
    var randomEnemy;
    
    if(difficulty <= 3){//picks a random easy enemy if difficulty value is 3 or less
        randomEnemy = easyEnemies[Math.floor(Math.random() * easyEnemies.length)];
    }
    else if(difficulty > 3 && difficulty <= 6){//picks a random medium enemy if difficulty value is between 4 and 6
        randomEnemy = mediumEnemies[Math.floor(Math.random() * mediumEnemies.length)];
    }
    else if(difficulty > 6 && difficulty <= 9){//picks random hard enemy if difficulty value is between 7 and 9
        randomEnemy = hardEnemies[Math.floor(Math.random() * hardEnemies.length)];
    }
    else if(difficulty = 10){//picks random extreme enemy if difficulty value is 10
        randomEnemy = extremeEnemies[Math.floor(Math.random() * extremeEnemies.length)];
    }
    else{
        window.alert('The difficulty value must be between 1 and 10');
    }
    var foundEnemy = document.getElementById('foundEnemy').innerHTML = 'The party has encountered: ' + randomEnemy + '!';
}

document.getElementById('enemies').addEventListener('click', findEnemy);
