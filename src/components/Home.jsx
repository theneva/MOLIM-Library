import React from 'react';
import MoleculeList from './MoleculeList.jsx'

const styles = {
    listContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default class Home extends React.Component {
    render(){
        return <div>
            <h1>Here you will find a list of potential energy surfaces (PESs) and dipole moment surfaces (DMSs) for a
                range of different molecules.</h1>

            <div style={styles.listContainer}>
                <MoleculeList type="Diatomics"
                              nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==2)}
                              changePageState={this.props.changePageState}/>
                <MoleculeList type="Triatomics"
                              nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==3)} changePageState={this.props.changePageState}/>
                <MoleculeList type="Tetratomics"
                              nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==4)} changePageState={this.props.changePageState}/>
                <MoleculeList type="Pentatomics"
                              nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==5)} changePageState={this.props.changePageState}/>
                <MoleculeList type="Hexatomics"
                              nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==6)} changePageState={this.props.changePageState}/>
            </div>
        </div>
    }
}
