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

	handleCchange = event => {
		const {name, value} = event.target 
			this.setState({[name]: value})
	}

	handleSubmit = event => {
		event.preventDefault()
		const recette = { ...this.state }
		this.props.ajouterRecette(recette)
		// Reset
		Object.keys(recette).forEach(item => {
			recette[item] = ''
		})
		this.setState({ ...recette })
	}

	render() {
		return (
			<div className="card">
				<form  className="admin-form ajouter-rectee" onSubmit={this.handleSubmit}>
					<input value={this.state.nom} onChange={this.handleCchange} name="nom" type="text" placeholder="nom de la recette"/>
					<input value={this.state.image} onChange={this.handleCchange} name="image" type="text" placeholder="nom de l'image"/>
					<textarea value={this.state.ingredients} onChange={this.handleCchange} name="ingredients" rows="3" placeholder="liste des ingrédients"></textarea>
					<textarea value={this.state.instructions} onChange={this.handleCchange} name="instructions" rows="15" placeholder="liste des instruction"></textarea>
					<button type="submit">+ Ajouter uen recette </button>
				</form>
			</div>
		);
	}
}

export default AjouterRecette;