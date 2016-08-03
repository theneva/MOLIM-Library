import React from 'react';
import MoleculeSurfaceDescription from './MoleculeSurfaceDescription.jsx'

const styles = {
  partContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  parts: {
    backgroundColor: '#DDDDDD',
    marginBottom: '2vh',
    width: '70vw',
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
    return <div>
      {this.props.data.array != undefined ?
        this.state.arrayNumber == undefined ? <div style={styles.partContainer}>
          {this.props.data.array.map((element, index)=> {
            return <a href="#" style={styles.parts}
              onClick={() => this.changeArrayNumber(index)}>{element.surfaceDescription}</a>
          })}
        </div> : <MoleculeSurfaceDescription name={this.props.name} data={this.props.data.array[this.state.arrayNumber]}/> :
        <MoleculeSurfaceDescription name={this.props.name} data={this.props.data}/>}
    </div>
  }
}
