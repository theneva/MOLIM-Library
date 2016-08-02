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
            displayMolecule: ""
        }
    }

    changePageState(e) {
        console.log(this.props.molecules.filter((molecule)=>molecule.molecule == e.target.innerHTML));

        this.setState({
            home: false,
            displayMolecule: this.props.molecules.filter((molecule)=>molecule.molecule == e.target.innerHTML)
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

