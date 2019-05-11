import React, { Component } from 'react';
// CSS
import './App.css';

import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';

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
    return ( 
      <div className='box'>
        <Header pseudo={ this.state.pseudo }/>
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin
          chargerExample={ this.chargerExample }
        ></Admin>
      </div>
     );
  }
}
 
export default App;
