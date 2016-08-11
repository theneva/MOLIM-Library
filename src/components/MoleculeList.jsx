import React from 'react'
import MoleculeName from './MoleculeName.jsx'

const styles = {
  container: {
    paddingRight: '5%'
  },
  title: {}
}


export default class MoleculeList extends React.Component {
  render() {
    return <div style={styles.container}>
      <h3 style={styles.title}>{this.props.type}</h3>
      {this.props.moleculeArray.sort((left, right) => left.molecule[0].value > right.molecule[0].value).map((name, index)=> (
        <MoleculeName key={index} name={name.molecule} urlName={name.name}/>
      ))}
    </div>

  }
}
