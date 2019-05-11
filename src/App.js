import React, { Component } from 'react';
// CSS
import './App.css';

import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';
import Card from './components/Card';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      pseudo: this.props.match.params.pseudo,
      recettes: {}
      
     }
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
