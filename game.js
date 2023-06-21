const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  const help = [
    "  Type 'r' for Rock",
    "  Type 'p' for Paper",
    "  Type 's' for Scissors",
    "  Type 'q' to quit",
    "  Type 'h' for a list of valid commands\n"
];
  help.map(el => {
    console.log(el);
  });
};

function getWinner(move1, move2) {
  // Your code here
  const msg = [
    "You tie.\n",
    "You win!\n",
    "You lose...\n"
  ];

  let printMsg = (i) => {
    console.log(msg[i])
  };

  if (move1 === move2) { // tie
    printMsg(0);
    ties++;
    return 0;
  }
  else if (VALID_MOVES[move1].winsAgainst === move2) { // win
    printMsg(1);
    wins++;
    return 1;
  } else { // loss
    printMsg(2);
    losses++;
    return -1;
  }
}

function getCPUMove() {
  // Your code here
    const validMoveKeys = Object.keys(VALID_MOVES);
    const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
    const cpu = validMoveKeys[randomIndex];

    return cpu;
}

function processMove(cmd, cpu) {
  // Your code here
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  getWinner(cmd, cpu);
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
      // console.log("  Type 'r' for Rock");
      // console.log("  Type 'p' for Paper");
      // console.log("  Type 's' for Scissors");
      // console.log("  Type 'q' to quit");
      // console.log("  Type 'h' for a list of valid commands\n");
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      let cpu = getCPUMove(VALID_MOVES)
      // const validMoveKeys = Object.keys(VALID_MOVES);
      // const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      // const cpu = validMoveKeys[randomIndex];

      processMove(cmd, cpu)
      // console.log(`You pick ${cmd}, computer picks ${cpu}.`);
      // getWinner(cmd, cpu);

      // if (cmd === cpu) { // tie
      //   console.log("You tie.\n");
      //   ties++;
      // }
      // else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
      //   console.log("You win!\n");
      //   wins++;
      // } else { // loss
      //   console.log("You lose...\n");
      //   losses++;
      // }
    } else {
      console.log("\nInvalid command.\n");
      printHelp()
      // console.log("  Type 'r' for Rock");
      // console.log("  Type 'p' for Paper");
      // console.log("  Type 's' for Scissors");
      // console.log("  Type 'q' to quit");
      // console.log("  Type 'h' for a list of valid commands\n");
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();
  // console.log("  Type 'r' for Rock");
  // console.log("  Type 'p' for Paper");
  // console.log("  Type 's' for Scissors");
  // console.log("  Type 'q' to quit");
  // console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
