import React, { Component } from 'react';
// CSS
import './App.css';

import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';
import Card from './components/Card';

// Firebase
import base from './base';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      pseudo: this.props.match.params.pseudo,
      recettes: {}
      
     }
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  chargerExample = () => this.setState({ recettes })


  render() {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card  key={ key } details={ this.state.recettes[key] }></Card> )
    
    return ( 
      <div className='box'>
        <Header pseudo={ this.state.pseudo }/>
        <div className='cards'>
          { cards }
        </div>
        <Admin
          chargerExample={ this.chargerExample }
        ></Admin>
      </div>
     );
  }
}
 
export default App;
