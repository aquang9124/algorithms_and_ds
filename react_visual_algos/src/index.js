import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pad: '0'
		};
	}

	render() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.content'));