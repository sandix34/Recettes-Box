import React, { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
                <button onClick={this.props.chargerExample}>Remplir</button>
            </footer>
         );
    }
}
 
export default Admin;