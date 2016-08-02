import React from 'react'
import MoleculeName from './MoleculeName.jsx'

const styles = {
  container: {
    paddingRight: '5%'
  },
  title:{

  }
}


export default class MoleculeList extends React.Component {
  render() {
    return <div style={styles.container}>
      <h4 style={styles.title}>{this.props.type}</h4>

      {this.props.nameArray.map((name)=> {
        return <MoleculeName name={name.molecule} changePageState={this.props.changePageState}/>
      })}

    </div>

  }
}
