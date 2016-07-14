'use strict';

// JavaScript blackjack game

// the blackjack class
function BlackJack() {
	let _data = {
		deck: []
	};

	this.get = (k) => {
		return _data[k];
	}
}

BlackJack.prototype = {
	addCards() {
		let types = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

		for (let i = 0; i < types.length; i++) {
			let count = 4;

			while (count--) {
				this.get('deck').push(types[i]);
			}
		}

		return this.deck;
 	},
 	shuffle() {
 		let cIdx = this.get('deck').length;
 		let tempValue;
 		let rIdx;

 		while (cIdx !== 0) {
 			rIdx = Math.floor(Math.random() * cIdx);
 			cIdx--;

 			// swap
 			tempValue = this.get('deck')[cIdx];
 			this.get('deck')[cIdx] = this.get('deck')[rIdx];
 			this.get('deck')[rIdx] = tempValue;
 		}

 		return this.deck;
 	},
 	hit(n) {
 		let hand = [];
 		while (n--) {
 			hand.push(this.get('deck').pop());
 		}

 		return hand;
 	}
};

function Player() {
	let _data = {
		hand: [],
		total: 0
	};

	this.get = (k) => {
		return _data[k];
	};

	this.set = (k, v) => {
		_data[k] = v;

		return true;
	};
}

Player.prototype = {
	initialize(gameInst) {
		let cards = gameInst.hit(2);
		let hand = this.get('hand');
		let sum = this.get('total');

		hand = hand.concat(cards);

		hand.forEach(function(card) {
			if (card === 'ace') {
				let tempSum = sum + 11;

				if (tempSum > 21) {
					sum += 1;
				}
				else {
					sum += 11;
				}
			}
			else if (card === 'king' || card === 'queen' || card === 'jack') {
				sum += 10;
			}
			else {
				sum += card;
			}
		});

		this.set('total', sum);

		return this.get('total');
	},
};

let game = new BlackJack();
game.addCards();
game.shuffle();

let p1 = new Player();

console.log(p1.initialize(game));