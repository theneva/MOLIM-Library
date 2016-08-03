import React from 'react';
import Home from './Home.jsx';
import MoleculeInformation from './MoleculeInformation.jsx';

const styles = {
    container: {
        padding: '1vh 3vw 1vh 3vw'
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            displayMolecule: undefined
        }
    }

    changePageState(molecule) {
        this.setState({
            home: false,
            displayMolecule: molecule
        })
    }

    render() {
        return <div style={styles.container}>
            {this.state.home ? <Home molecules={this.props.molecules}
                                     changePageState={this.changePageState.bind(this)}/> :
                <MoleculeInformation molecule={this.state.displayMolecule}/>}

        </div>
    }
}

