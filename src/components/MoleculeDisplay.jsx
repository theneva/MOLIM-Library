import React from 'react';
import MoleculeSurfaceDescription from './MoleculeSurfaceDescription.jsx';
import Molecule from './Molecule.jsx';

const styles = {
  partContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  parts: {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgb(242, 242, 242)',
    marginTop: '1vh',
    marginBottom: '1vh',
    paddingLeft: '5vh',
    paddingRight: '5vh',
    width: '70vw',
    border: 'solid 1px black'
  },
  title: {
    display: 'flex',
    alignSelf: 'flex-start',
  }
}

export default class MoleculeDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayNumber: undefined
    }
  }

  changeArrayNumber(index) {
    this.setState({
      arrayNumber: index
    })
  }

  render() {
    return <div style={styles.container}>
      {this.props.data.array != undefined ?
        this.state.arrayNumber == undefined ?
          <div style={styles.partContainer}>
            {this.props.data.array.map((element, index)=> {
              return <a className="img-rounded" href="#" style={styles.parts}
                onClick={() => this.changeArrayNumber(index)}>
                <h3>{element.paperTitle}</h3>
                <p>{element.surfaceDescription}</p>
              </a>
            })}
          </div> :
          <MoleculeSurfaceDescription name={this.props.name} data={this.props.data.array[this.state.arrayNumber]}/> :
        <MoleculeSurfaceDescription name={this.props.name} data={this.props.data}/>}
    </div>
  }
}
