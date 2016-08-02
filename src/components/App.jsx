import React from 'react';
import MoleculeList from './MoleculeList.jsx'

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
  }
}

export default class App extends React.Component {
  render(){
    return <div style={styles.container}>
      <MoleculeList type="Diatomics" nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==2)}/>
      <MoleculeList type="Triatomics" nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==3)}/>
      <MoleculeList type="Tetratomics" nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==4)}/>
      <MoleculeList type="Pentatomics" nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==5)}/>
      <MoleculeList type="Hexatomics" nameArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==6)}/>

    </div>
  }
}

