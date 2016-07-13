'use strict';

// JavaScript blackjack game

// the blackjack class
function BlackJack() {
	this.deck = [];
}

BlackJack.prototype = {
	addCards() {
		let types = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

		for (let i = 0; i < types.length; i++) {
			let count = 4;

			while (count--) {
				this.deck.push(types[i]);
			}
		}

		return this.deck;
 	},

};

let game = new BlackJack();
console.log(game.addCards());