import React from 'react';
import Home from './Home.jsx';
import MoleculeInformation from './MoleculeInformation.jsx';

export default class App extends React.Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

