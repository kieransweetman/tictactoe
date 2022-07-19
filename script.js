const Player = (name, lvl) =>{
    this.name = name;
    this.lvl = lvl;

    const health = () => this.lvl * 3;
    const moves = () => playerMoves(this.lvl, health()) ;

    return {lvl, health, moves} ;

};

const playerMoves = (lvl, health) =>{

    let attack = () => lvl*40;
    let defend = () => health()*45;
    return {attack, defend};



};
