import React from 'react';
import {Link} from 'react-router';

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
            <Link to={`/molecule/${this.props.data.name}/${this.props.type.split(" ")[0]}`}
                  className="img-rounded col-md-4" style={styles.surfaceButtonClickable}>{this.props.type}</Link> :
            <a className="img-rounded col-md-4" style={styles.surfaceButtonNotClickable}>{this.props.type}</a>
    }
}
