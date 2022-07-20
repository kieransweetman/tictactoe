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
      t1: "",
      t2: "",
      t3: "",
      m1: "",
      m2: "",
      m3: "",
      b1: "",
      b2: "",
      b3: "",
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

const p1 = Player();
const p2 = Player();
const main = ((player1, player2, board = Gameboard.board()) => {
  console.log(board);
  board.t1 = player1.turn("X");
  board.m2 = player2.turn("O");
  board.t3 = player1.turn("X");
  board.b2 = player2.turn("O");
  console.log(board);
  Gameboard.displayBoard(board);
})(p1, p2);
