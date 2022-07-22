// booard module
const Gameboard = (() => {
  const board = () => {
    let board = {
      t1: 1,
      t2: null,
      t3: null,
      m1: null,
      m2: null,
      m3: null,
      b1: null,
      b2: null,
      b3: null,
    };
    return board;
  };

  const displayBoard = (board) => {
    for (const square in board) {
      const value = board[square];
      const position = document.querySelector(`#${square}`);
      position.textContent = value;
    }
  };

  const marker = () => {
    //let user mark his choice
  };

  return { board, displayBoard };
})();

const Player = () => {
  const turn = (move = "X") => {
    return move == "X" ? "X" : "O";
  };
  return { turn };
};

const p1 = Player();
const p2 = Player();
const main = ((board = Gameboard.board()) => {
  const game = () => {
    for (let i = 0; i <= 9; i++) {
      console.log(i);
    }
  };

  Gameboard.displayBoard(board);
})();

// how can i split up my tasks so to not clutter my code
