import React from 'react';
import MoleculeList from './MoleculeList.jsx'

const styles = {
  container: {
    padding: '1vh 3vw 1vh 3vw'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const moleculeTypes = ["Diatomics", "Triatomics"," Tetratomics", "Pentatomics", "Hexatomics"];

export default class Home extends React.Component {
  filterByNumberOfAtoms(number, index){
    return <MoleculeList key={index} type={moleculeTypes[number - 2]}
                         moleculeArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==number)}/>
  }

  render() {
    return <div style={styles.container}>
      <h1>Here you will find a list of potential energy surfaces (PESs) and dipole moment surfaces (DMSs) for a
        range of different molecules.</h1>

      <div style={styles.listContainer}>
          {[2,3,4,5,6].map((number, index) => {
             return this.filterByNumberOfAtoms(number, index)
          })}
      </div>
    </div>
  }
}
