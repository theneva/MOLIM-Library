import React from 'react';
import { Link } from 'react-router';
import Molecule from './Molecule.jsx';

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(242, 242, 242)",
    height: "5vh",
    marginBottom: "1vh",
    border: "solid 1px black"
  }
}

export default class MoleculeName extends React.Component {
  render(){
    return <Link to={`/molecule/${this.props.urlName}`} className="img-rounded" style={styles.button}>
      <Molecule constituents={this.props.name}/>
    </Link>
  }
}
