import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="cards">
				<AjouterRecette ajouterRecette={this.props.ajouterRecette}></AjouterRecette>
				<footer>
					<button onClick={this.props.chargerExample}>Remplir</button>
				</footer>
			</div>

		);
	}
}

export default Admin;