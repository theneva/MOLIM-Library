import React from 'react'
import Molecule from './Molecule.jsx'

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
    return <a href="#" className="img-rounded" style={styles.button} onClick={this.props.changePageState}>
      <Molecule constituents={this.props.name}/>
    </a>
  }
}
