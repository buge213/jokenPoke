
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0 
let machineScoreNumber = 0

//ENUMS

const GAME_OPTIONS = {
    ROCK: 'rock',             /* humanScoreNumber -> Camel case / GAME_OPTIONS --> Snake case */
    PAPER: 'paper',             
    SCISSORS: 'scissors'
}




const playHuman = (humanChoice) => {
    playThegame(humanChoice, playMachine())
    
}

const playMachine = () => {
    const  choises = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomnumber = Math.floor(Math.random() * 3)

    
    return choises[randomnumber]
}

const playThegame = (human, machine) => {
    console.log('humano:' + human + "Maquina:" + machine)

    if(human === machine) {
        result.innerHTML = "Deu EMAPTE!"

    } else if( human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK|| 
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER))
        {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu!"


    }
}
