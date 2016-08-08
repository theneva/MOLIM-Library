import React from 'react';
import Molecule from './Molecule.jsx';

export default class MoleculeSurfaceDescription extends React.Component {
  render() {
    return <div>
      <h5>Paper Title:</h5><p>{this.props.data.paperTitle}</p>
      <h5>Year of Publication:</h5><p>{this.props.data.year}</p>
      <h5>Surface Description:</h5><p>{this.props.data.surfaceDescription}</p>
      <h5>Supplementary Material Description:</h5><p>{this.props.data.supplementaryDescription}</p>
      <h5>Supplementary Material Link:</h5><a href={this.props.data.supplementaryLink}>{this.props.data.supplementaryLink}</a>
      <h5>Predicted Energy Level as Part of Paper:</h5><p>{this.props.data.predictedEnergyLevels}</p>
      <h5>DOI:</h5><p>{this.props.data.DOI}</p>
      <h5>Reference I:</h5><p>{this.props.data.references.one}</p>
      <h5>Reference II:</h5><p>{this.props.data.references.two}</p>
      <h5>Contact email(s):</h5><p>{this.props.data.email}</p>
    </div>
  }
}
