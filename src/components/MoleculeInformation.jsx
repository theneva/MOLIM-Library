import React from 'react'
import Molecule from './Molecule.jsx'
import SurfaceButton from './SurfaceButton.jsx'

const styles = {
  surfaceContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
}

export default class MoleculeInformation extends React.Component {
  render() {
    return <div>
      <Molecule constituents={this.props.molecule.molecule}/> {/* lol */}
      <div style={styles.surfaceContainer}>
        {this.props.molecule.potentialEnergySurface.exists ?
          <SurfaceButton type="Potential Energy Surface(s)"/> : <SurfaceButton type="No Potential Energy Surface(s)"/>}
        {this.props.molecule.dipoleMomentSurface.exists ?
          <SurfaceButton type="Dipole Moment Surface(s)"/> : <SurfaceButton type="No Dipole Moment Surface(s)"/>}
      </div>
    </div>
  }
}
