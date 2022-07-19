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

  return { board };
})();

const Player = () => {
  const turn = (move = "X") => {
    return move == "X" ? "X" : "O";
  };
  return { turn };
};

const Computer = (() => {
  const turn = () => {
    let move = Math.floor(Math.random() * 2);
    return move;
  };

  return { turn };
})();

const p1 = Player();
const p2 = Player();

const main = ((player1, player2, board = Gameboard) => {
  board = Gameboard.board();

  board.t1 = player1.turn("X");
  board.m2 = player2.turn("O");
  console.log(board);
})(p1, p2);
