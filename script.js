// const Player = (name, lvl) => {
//   this.name = name;
//   this.lvl = lvl;

//   const health = () => this.lvl * 3;
//   const moves = () => playerMoves(this.lvl, health());

//   return { lvl, health, moves };
// };

// const playerMoves = (lvl, health) => {
//   let attack = () => lvl * 40;
//   let defend = () => health() * 45;
//   return { attack, defend };
// };

// booard module
const Gameboard = (() => {
  const board = () => {
    let board = {
      t1: null,
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

  return { board, displayBoard };
})();

const Player = () => {
  const turn = (move = "X") => {
    return move == "X" ? "X" : "O";
  };
  return { turn };
};

const main = ((board = Gameboard.board()) => {
  const p1 = Player();
  const p2 = Player();

  Gameboard.displayBoard(board);
})(p1, p2);
