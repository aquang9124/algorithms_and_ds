'use strict';

// JavaScript blackjack game

// the blackjack class
function BlackJack() {
	let _data = {
		deck: [],
		cardCount: 0
	};

	this.get = (k) => {
		return _data[k];
	}

	this.set = (k, v) => {
		_data[k] = v;

		return true;
	};
}

BlackJack.prototype = {
	addCards() {
		let types = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
		let cCount = this.get('cardCount');

		for (let i = 0; i < types.length; i++) {

			let count = 4;

			while (count--) {
				this.get('deck').push(types[i]);
				cCount++;
			}
		}

		this.set('cardCount', cCount);
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

 		this.set('cardCount', this.get('deck').length);
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
	arrangeHand(deck) {
		let cards = deck.hit(2);
		let hand = this.get('hand');

		// concat cards to player's hand
		hand = hand.concat(cards);

		// get the total value of that hand
		let sum = this.calcTotal(hand);

		this.set('hand', hand);
		this.set('total', sum);

		return this.get('hand');
	},
	calcTotal(hand) {
		let sum = this.get('total');

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

		return sum;
	}
};

let game = new BlackJack();
game.addCards();
game.shuffle();

let p1 = new Player();
p1.arrangeHand(game);

let p2 = new Player();
p2.arrangeHand(game);

console.log(p1.get('total'));