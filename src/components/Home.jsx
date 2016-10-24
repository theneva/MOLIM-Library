import React from 'react';
import MoleculeList from './MoleculeList.jsx'

const styles = {
    container: {
        padding: '1vh 3vw 1vh 3vw'
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '3vh'
    }
}

const moleculeTypes = ["Diatomics", "Triatomics", " Tetratomics", "Pentatomics", "Hexatomics"];

export default class Home extends React.Component {
    filterByNumberOfAtoms(number, index) {
        return <MoleculeList key={index} type={moleculeTypes[number - 2]}
                             moleculeArray={this.props.molecules.filter((molecule)=>molecule.numberOfAtoms==number)}/>
    }

    render() {
        return <div style={styles.container}>
            <h1>Potential energy surface and dipole moment surface library</h1>
            <h4>Here you will find a list of potential energy surfaces (PESs) and dipole moment surfaces (DMSs) for a
                range of different molecules.</h4>
            <p>This library was created as part of the <a href="http://www.exomol.com">ExoMol</a> and the <a href="http://www.cost-molim.eu">MOLIM</a> projects, with the work carried out by Cameron Voisey (with help in developing the website from Liam Eloie) in collaboration with Dr Sergey Yurchenko.</p>

            <div style={styles.listContainer}>
                {[2, 3, 4, 5, 6].map((number, index) => {
                    return this.filterByNumberOfAtoms(number, index)
                })}
            </div>
        </div>
    }
}
