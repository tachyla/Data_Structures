const tennis_game = (input) => {
    if(input === 'playerOne'){
        return [];
    }

    if(input === 'playerTwo'){
        return [15];
    }

    else{
        return true;
    }
}

module.exports = tennis_game;