import React from 'react'

const styles = {
    surfaceContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    surfaceButtonClickable: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(242, 242, 242)",
        height: "5vh",
        marginBottom: "1vh",
        border: "solid 1px black"
    },
    surfaceButtonNotClickable: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(242, 242, 242)",
        height: "5vh",
        marginBottom: "1vh",
        border: "solid 1px black"
    }
    }

export default class MoleculeInformation extends React.Component {
    render() {
        return <div>
        <h1>{this.props.molecule[0].molecule}</h1>
            <div style={styles.surfaceContainer}>
            {this.props.molecule[0].potentialEnergySurface.exists ? <a href="#" className="img-rounded col-md-4" style={styles.surfaceButtonClickable}>Potential Energy Surface(s)</a> :<div className="img-rounded col-md-4" style={styles.surfaceButtonNotClickable}>No Potential Energy Surface(s) Available</div>}
            {this.props.molecule[0].dipoleMomentSurface.exists ? <a href="#" className="img-rounded col-md-4" style={styles.surfaceButtonClickable}>Dipole Moment Surface(s)</a> : <div className="img-rounded col-md-4" style={styles.surfaceButtonNotClickable}>No Dipole Moment Surface(s) Available</div>}
            </div>
            </div>
    }
}