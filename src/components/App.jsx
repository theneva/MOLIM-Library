import React from 'react';
import MoleculeList from './MoleculeList.jsx'

export default class App extends React.Component {
  render(){
    return <MoleculeList type="Diatomics" nameArray={['NaH', 'O2', 'CO2']}/>
  }
}

