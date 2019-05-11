import React, { Component } from 'react';

class AjouterRecette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: '',
			image: '',
			ingredients: '',
			instructions: ''
		}
	}
	render() {
		return (
			<div className="card">
				<form  className="admin-form ajouter-rectee">
					<input name="nom" type="text" placeholder="nom de la recette"/>
					<input name="image" type="text" placeholder="nom de l'image"/>
					<textarea name="ingredients" rows="3" placeholder="liste des ingrédients"></textarea>
					<textarea name="instructions" rows="15" placeholder="liste des instruction"></textarea>
				</form>
			</div>
		);
	}
}

export default AjouterRecette;