import React from 'react';
import Molecule from './Molecule.jsx';

export default class MoleculeSurfaceDescription extends React.Component {
  render() {
    return <div>
      <Molecule constituents={this.props.name}/>
      <h2>{this.props.data.surfaceDescription}</h2>
    </div>
  }
}
