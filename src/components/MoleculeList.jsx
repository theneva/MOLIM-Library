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
      {this.props.nameArray.map((name, index)=> (
        <MoleculeName key={index} name={name.molecule}
          changePageState={() => this.props.changePageState(this.props.nameArray[index])}/>
      ))}

    </div>

  }
}
