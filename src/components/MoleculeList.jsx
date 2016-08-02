import React from 'react'
import MoleculeName from './MoleculeName.jsx'

export default class MoleculeList extends React.Component {
  render() {
    return <div>
      <h4>{this.props.type}</h4>
      {this.props.nameArray.map((name)=>{
      return <MoleculeName name={name}/>
    })}

    </div>

  }
}
