//created by Treyven Ambler

function findForestEnemy(){//Forest enemies
    var easyForestEnemies = ['e1', 'e2', 'e3', 'e4', 'e5'];
    var mediumForestEnemies = ['m1', 'm2', 'm3', 'm4', 'm5'];
    var hardForestEnemies = ['h1', 'h2', 'h3', 'h4', 'h5'];
    var extremeForestEnemies = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    //enemy categories
    var difficulty = document.getElementById('diff').value;
    var randomForestEnemy;
    
    if(difficulty <= 3){//picks a random easy enemy if difficulty value is 3 or less
        randomForestEnemy = easyForestEnemies[Math.floor(Math.random() * easyForestEnemies.length)];
    }
    else if(difficulty > 3 && difficulty <= 6){//picks a random medium enemy if difficulty value is between 4 and 6.
        randomForestEnemy = mediumForestEnemies[Math.floor(Math.random() * mediumForestEnemies.length)];
    }
    else if(difficulty > 6 && difficulty <= 9){//picks random hard enemy if difficulty value is between 7 and 9.
        randomForestEnemy = hardForestEnemies[Math.floor(Math.random() * hardForestEnemies.length)];
    }
    else if(difficulty = 10){//picks random extreme enemy if difficulty value is 10.
        randomForestEnemy = extremeForestEnemies[Math.floor(Math.random() * extremeForestEnemies.length)];
    }
    else{
        window.alert('The difficulty value must be between 1 and 10');
    }
    var foundForestEnemy = document.getElementById('foundEnemy').innerHTML = 'The party has encountered: ' + randomForestEnemy + '!';
}//Forest enemies

function findLabyrinthEnemy(){//Labyrinth enemies
    var easyLabyrinthEnemies = ['e1', 'e2', 'e3', 'e4', 'e5'];
    var mediumLabyrinthEnemies = ['m1', 'm2', 'm3', 'm4', 'm5'];
    var hardLabyrinthEnemies = ['h1', 'h2', 'h3', 'h4', 'h5'];
    var extremeLabyrinthEnemies = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    //enemy categories
    var difficulty = document.getElementById('diff').value;
    var randomLabyrinthEnemy;
    
    if(difficulty <= 3){//picks a random easy enemy if difficulty value is 3 or less
        randomLabyrinthEnemy = easyLabyrinthEnemies[Math.floor(Math.random() * easyLabyrinthEnemies.length)];
    }
    else if(difficulty > 3 && difficulty <= 6){//picks a random medium enemy if difficulty value is between 4 and 6.
        randomLabyrinthEnemy = mediumLabyrinthEnemies[Math.floor(Math.random() * mediumLabyrinthEnemies.length)];
    }
    else if(difficulty > 6 && difficulty <= 9){//picks random hard enemy if difficulty value is between 7 and 9.
        randomLabyrinthEnemy = hardLabyrinthEnemies[Math.floor(Math.random() * hardLabyrinthEnemies.length)];
    }
    else if(difficulty = 10){//picks random extreme enemy if difficulty value is 10.
        randomLabyrinthEnemy = extremeLabyrinthEnemies[Math.floor(Math.random() * extremeLabyrinthEnemies.length)];
    }
    else{
        window.alert('The difficulty value must be between 1 and 10');
    }
    var foundLabyrinthEnemy = document.getElementById('foundEnemy').innerHTML = 'The party has encountered: ' + randomLabyrinthEnemy + '!';
}//Labyrinth enemies

function findArenaEnemy(){//Arena enemies
    var easyArenaEnemies = ['e1', 'e2', 'e3', 'e4', 'e5'];
    var mediumArenaEnemies = ['m1', 'm2', 'm3', 'm4', 'm5'];
    var hardArenaEnemies = ['h1', 'h2', 'h3', 'h4', 'h5'];
    var extremeArenaEnemies = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    //enemy categories
    var difficulty = document.getElementById('diff').value;
    var randomArenaEnemy;
    
    if(difficulty <= 3){//picks a random easy enemy if difficulty value is 3 or less
        randomArenaEnemy = easyArenaEnemies[Math.floor(Math.random() * easyArenaEnemies.length)];
    }
    else if(difficulty > 3 && difficulty <= 6){//picks a random medium enemy if difficulty value is between 4 and 6.
        randomArenaEnemy = mediumArenaEnemies[Math.floor(Math.random() * mediumArenaEnemies.length)];
    }
    else if(difficulty > 6 && difficulty <= 9){//picks random hard enemy if difficulty value is between 7 and 9.
        randomArenaEnemy = hardArenaEnemies[Math.floor(Math.random() * hardArenaEnemies.length)];
    }
    else if(difficulty = 10){//picks random extreme enemy if difficulty value is 10.
        randomArenaEnemy = extremeArenaEnemies[Math.floor(Math.random() * extremeArenaEnemies.length)];
    }
    else{
        window.alert('The difficulty value must be between 1 and 10');
    }
    var foundArenaEnemy = document.getElementById('foundEnemy').innerHTML = 'The party has encountered: ' + randomArenaEnemy + '!';
}//Arena enemies

function findBadlandsEnemy(){//Badlands enemies
    var easyBadlandsEnemies = ['e1', 'e2', 'e3', 'e4', 'e5'];
    var mediumBadlandsEnemies = ['m1', 'm2', 'm3', 'm4', 'm5'];
    var hardBadlandsEnemies = ['h1', 'h2', 'h3', 'h4', 'h5'];
    var extremeBadlandsEnemies = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    //enemy categories
    var difficulty = document.getElementById('diff').value;
    var randomBadlandsEnemy;
    
    if(difficulty <= 3){//picks a random easy enemy if difficulty value is 3 or less
        randomBadlandsEnemy = easyBadlandsEnemies[Math.floor(Math.random() * easyBadlandsEnemies.length)];
    }
    else if(difficulty > 3 && difficulty <= 6){//picks a random medium enemy if difficulty value is between 4 and 6.
        randomBadlandsEnemy = mediumBadlandsEnemies[Math.floor(Math.random() * mediumBadlandsEnemies.length)];
    }
    else if(difficulty > 6 && difficulty <= 9){//picks random hard enemy if difficulty value is between 7 and 9.
        randomBadlandsEnemy = hardBadlandsEnemies[Math.floor(Math.random() * hardBadlandsEnemies.length)];
    }
    else if(difficulty = 10){//picks random extreme enemy if difficulty value is 10.
        randomBadlandsEnemy = extremeBadlandsEnemies[Math.floor(Math.random() * extremeBadlandsEnemies.length)];
    }
    else{
        window.alert('The difficulty value must be between 1 and 10');
    }
    var foundBadlandsEnemy = document.getElementById('foundEnemy').innerHTML = 'The party has encountered: ' + randomBadlandsEnemy + '!';
}//Badlands enemies

//onclick events for html buttons
document.getElementById('forestEnemies').addEventListener('click', findForestEnemy);
document.getElementById('labyrinthEnemies').addEventListener('click', findLabyrinthEnemy);
document.getElementById('arenaEnemies').addEventListener('click', findArenaEnemy);
document.getElementById('badlandsEnemies').addEventListener('click', findBadlandsEnemy);