import React from 'react';
import SurfaceButtonDisplay from './SurfaceButtonDisplay.jsx';
import MoleculeDisplay from './MoleculeDisplay.jsx';
import Molecule from './Molecule.jsx';

const styles = {
    container: {
        padding: '1vh 3vw 1vh 3vw'
    },
    surfaceContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
}

export default class MoleculeInformation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            surfaces: true,
            surfaceType: undefined
        }
    }

    findMoleculeByName(name) {
        return this.props.molecules.filter((molecule) => molecule.name == name)
    }

    componentWillMount() {
        this.setState({
            molecule: this.findMoleculeByName(this.props.path)[0]
        })
    }

    changeDisplay(surfaceType) {
        console.log(surfaceType);
        this.setState({
            surfaces: false,
            surfaceType: surfaceType
        })
    }

    render() {
        return <div style={styles.container}>
            <h1><Molecule constituents={this.state.molecule.molecule}/></h1> {/* lol */}
            <SurfaceButtonDisplay data={this.state.molecule} changeDisplay={this.changeDisplay.bind(this)}/>
        </div>
    }
}
