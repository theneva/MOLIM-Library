import React from 'react';
import MoleculeSurfaceDescription from './MoleculeSurfaceDescription.jsx';
import Molecule from './Molecule.jsx';
import { Link } from 'react-router';

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
          <div style={styles.partContainer}>
            {this.props.data.array.map((element, index)=> {
              return <Link to={`/molecule/${this.props.urlName}/${this.props.type}/index/${index}`} className="img-rounded" href="" style={styles.parts}
                onClick={() => this.changeArrayNumber(index)}>
                <h3>{element.paperTitle}</h3>
                <p>{element.surfaceDescription}</p>
              </Link>
            })}
          </div>
    </div>
  }
}
