// Tennis

// The scoring system is rather simple:

// Each player can have either of these points in one game “love” “15” “30” “40”
// If you have 40 and you win the point you win the game, however there are special rules.
// If both have 40 the players are “deuce”.
// If the game is in deuce, the winner of a point will have advantage
// If the player with advantage wins the ball he wins the game
// If the player without advantage wins they are back at deuce.
// Alternate description of the rules per Wikipedia (http://en.wikipedia.org/wiki/Tennis#Scoring ):

// A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
// The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “15”, “30”, and “40” respectively.
// If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
// If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

const tennis_game = require('../source/tennis_kata');

describe('tennis game', () => {
    it('returns true', () => {
        let result = tennis_game();

        expect(result).toEqual(true);
    });

    it('returns score zero for player w/o points', () => {
        let result = tennis_game('playerOne');
        let expectedResult = [];
        expect(result).toEqual(expectedResult);
    });

    it('returns score 15 for player with 15 points', () => {
        let result = tennis_game('playerTwo');

        let expectedResult = [15];

        expect(result).toEqual(expectedResult);
    });

});