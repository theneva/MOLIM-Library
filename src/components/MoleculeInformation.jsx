import React from 'react';
import SurfaceButtonDisplay from './SurfaceButtonDisplay.jsx';
import MoleculeDisplay from './MoleculeDisplay.jsx'

const styles = {
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

  changeDisplay(surfaceType) {
    console.log(surfaceType)
    this.setState({
      surfaces: false,
      surfaceType: surfaceType
    })
  }

  render() {
    return <div>
      {this.state.surfaces ?
        <SurfaceButtonDisplay data={this.props.molecule} changeDisplay={this.changeDisplay.bind(this)}/> :
        this.state.surfaceType == "Potential Energy Surface(s)" ? <MoleculeDisplay name={this.props.molecule.molecule} data={this.props.molecule.potentialEnergySurface}/> :
          <MoleculeDisplay name={this.props.molecule.molecule} data={this.props.molecule.dipoleMomentSurface}/> }
    </div>
  }
}
