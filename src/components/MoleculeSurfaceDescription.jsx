import React from 'react';
import Molecule from './Molecule.jsx';

const styles = {
    container: {
        marginLeft: '3vw',
        marginRight: '3vw',
        marginTop: '4vh'
    },
    sectionContainer: {
        background: 'rgb(242, 242, 242)',
        padding: '1vh 1vw 1vh 1vw'
    }
}

export default class MoleculeSurfaceDescription extends React.Component {

render() {
    return <div style={styles.container}>
    <h1><Molecule constituents={this.props.name}/></h1>
    <div className="col-md-7">
    <h3>Paper Information</h3>
    <div className="img-rounded" style={styles.sectionContainer}><h5>Title:</h5><p>{this.props.data.paperTitle}</p>
    <h5>Year of Publication:</h5><p>{this.props.data.year}</p>
    <h5>Surface Description:</h5><p>{this.props.data.surfaceDescription}</p>
    <h5>Supplementary Material Description:</h5><p>{this.props.data.supplementaryDescription}</p>
    <h5>Predicted Energy Level as Part of Paper:</h5><p>{this.props.data.predictedEnergyLevels}</p></div>
    </div>
    <div className="col-md-5">
    <h3>Links</h3>
    <div className="img-rounded" style={styles.sectionContainer}><h5>DOI:</h5><a href={"http://dx.doi.org/" + this.props.data.DOI}>{this.props.data.DOI}</a>
    <h5>Supplementary Material:</h5><a
    href={this.props.data.supplementaryLink}>{this.props.data.supplementaryLink}</a></div>
    <h3>References</h3>
    <div className="img-rounded" style={styles.sectionContainer}><h5>Reference 1:</h5><p>{this.props.data.references.one}</p>
    <h5>Reference 2:</h5><p>{this.props.data.references.two}</p></div>
    <h3>Contact</h3>
    <div className="img-rounded" style={styles.sectionContainer}><h5>Email:</h5><p>{this.props.data.email}</p></div>
    </div>
    </div>
}}

