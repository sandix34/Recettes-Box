import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		const {recettes, ajouterRecette, majRecette, supprimerRecette, chargerExample} = this.props
		return (
			<div className="cards">
				<AjouterRecette ajouterRecette={ajouterRecette}></AjouterRecette>
				{
					Object.keys(recettes)
					 .map(key => <AdminForm
							key={key}
							id={key}
							majRecette={majRecette}
							supprimerRecette={supprimerRecette}
							recettes={recettes}
					 />) 
				}
				<footer>
					<button onClick={chargerExample}>Remplir</button>
				</footer>
			</div>

		);
	}
}

export default Admin;