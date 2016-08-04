import React from 'react';
import SurfaceButton from './SurfaceButton.jsx'
import Molecule from './Molecule.jsx'

const styles = {
  surfaceButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}

export default class SurfaceButtonDisplay extends React.Component {
  render() {
    return <div>
      <h1><Molecule constituents={this.props.data.molecule}/></h1> {/* lol */}
      <div style={styles.surfaceButtonContainer}>
        {this.props.data.potentialEnergySurface.exists ?
          <SurfaceButton type="Potential Energy Surface(s)" data={this.props.data} changeDisplay={this.props.changeDisplay}/> :
          <SurfaceButton type="No Potential Energy Surface(s)"/>}
        {this.props.data.dipoleMomentSurface.exists ?
          <SurfaceButton type="Dipole Moment Surface(s)" data={this.props.data} changeDisplay={this.props.changeDisplay}/> :
          <SurfaceButton type="No Dipole Moment Surface(s)"/>}
      </div>
    </div>
  }
}
