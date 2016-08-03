import React from 'react'

const styles = {
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
    border: "solid 1px black",
    textDecoration: 'none',
    color: 'black'
  }
}

export default class SurfaceButton extends React.Component {
  render() {
    return this.props.type.substring(0, 2) !== "No" ?
      <a href="#" className="img-rounded col-md-4" style={styles.surfaceButtonClickable}
        onClick={()=>this.props.changeDisplay(this.props.type)}>{this.props.type}</a> :
      <a className="img-rounded col-md-4" style={styles.surfaceButtonNotClickable}>{this.props.type}</a>
  }
}
