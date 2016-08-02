import React from 'react'

export default class MoleculeInformation extends React.Component {
    render() {
        return <div>
        <h1>{this.props.molecule[0].molecule}</h1>
            {this.props.molecule[0].dipoleMomentSurface.exists ? <div>Dipole Moment Surface</div> : <div>No Dipole Moment Surface</div>}
            {this.props.molecule[0].potentialEnergySurface.exists ? <div>Potential Energy Surface</div> :<div>No Potential Energy Surface</div>}
        </div>
    }
}