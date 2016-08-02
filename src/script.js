import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'

const molecules = [
    {
        molecule: "NaH",
        numberOfAtoms: "2",

        potentialEnergySurface: {
            paperTitle: 'Dissociation energies and potential energy functions for the ground X1sigma+ and "avoided-crossing" A1sigma+ states of NaH',
            surfaceDescription: "Analytic PES determined from experimental data, incorporating the correct theoretically predicted long-range behaviour.",
            DOI: "10.1063/1.4906086",
            references: {one: "15WaSeLe", two: "J. Chem. Phys. 142, 044305 (2015)"},
            year: "2015",
            email: "leroy@uwaterloo.cq",
            supplementaryDescription: "A complete listing of the experimental data used in the analysis and the [calc.-obs.] difference associated with the final recommended model; listings of the first 68 'band constants' for all vibrational levels of X- and A-state NaH and NaD supported by the recommended PESs for this system; a listing of a complete parameters set determined for this system, together with a band-by-band summary of the RMS discrepancies for all of the data used in the analysis; sample data files for use in performing bound-state/Franck-Condon calculations using Program LEVEL; and, a Fortran subroutine for generating the recommended potential energy and effective centrifugal potential functions for the X and A states of NaH and NaD.",
            supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-142-028504",
            predictedEnergyLevels: ""
        },
    },
    {
        molecule: "SO2",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            paperTitle: "Highly accurate potential energy surface, dipole moment surface, rovibrational energy levels, and infrared line list for 32S16O2 up to 8000 cm−1",
            surfaceDescription: "Ab initio PES, Ames-1, refined with selected HITRAN data.",
            DOI: "10.1063/1.4868327",
            references: {one: "14HuScLe", two: "J. Chem. Phys. 140, 114311 (2014)"},
            year: "2014",
            email: "Xinchuan.Huang-1@nasa.gov or Timothy.J.Lee@nasa.gov or David.W.Schwenke@nasa.gov",
            supplementaryDescription: "A Fortran subroutine to calculate the PES, 'Ames-1'; and, the Ames-296K line list and comparison with HITRAN data and recent experiments.",
            supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-140-059411",
            predictedEnergyLevels: "Yes, rovibrational (J=0-80)"
        },
        dipoleMomentSurface: {
            paperTitle: "Highly accurate potential energy surface, dipole moment surface, rovibrational energy levels, and infrared line list for 32S16O2 up to 8000 cm−1",
            surfaceDescription: "Ab initio CCSD(T)/aug-cc-pV(Q+d)Z DMS without refinement.",
            DOI: "10.1063/1.4868327",
            references: {one: "14HuScLe", two: "J. Chem. Phys. 140, 114311 (2014)"},
            year: "2014",
            email: "Xinchuan.Huang-1@nasa.gov or Timothy.J.Lee@nasa.gov or David.W.Schwenke@nasa.gov",
            supplementaryDescription: "A Fortran subroutine to calculate the DMS, 'DMS-N1'; and, the Ames-296K line list and comparison with HITRAN data and recent experiments.",
            supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-140-059411",
            predictedEnergyLevels: "Yes, rovibrational (J=0-80)"
        },
    },
    {
        molecule: "CO2",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            paperTitle: "An isotopic-independent highly accurate potential energy surface for CO2 isotopologues and an initial 12C16O2 infrared line list",
            surfaceDescription: "Isotopic-independent PES, 'Ames-1', determined by refinement of ab initio PES, 'Ames-0', with selected, experimentally determined rovibrational energy levels. The authors start with the CCSD(T) method, use extrapolation to the one-particle basis set limit, and include corrections for scalar relativity and higher-order electron correlation (for the latter, using the ACPF method).",
            DOI: "10.1063/1.3697540",
            references: {one: "12HuScTa", two: "J. Chem. Phys. 136, 124311 (2012)"},
            year: "2012",
            email: "Xinchuan.Huang-1@nasa.gov (xinchuan@gmail.com) or David.W.Schwenke@nasa.gov or Timothy.J.Lee@nasa.gov",
            supplementaryDescription: "List of references for the experimental data used in this work; Fortran 90 codes of Ames-1 PES with testing program included; and, Ames-296K IR linelist for 12C16O2, with cutoff 1E-30 cm/molecule based on Ames-1 PES and the DMS, J=0-125 calculations.",
            supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-136-028213",
            predictedEnergyLevels: "Yes, rovibrational (J=0-125) - 'Ames-296K' IR line list"
        },
        dipoleMomentSurface: {
            paperTitle: "An isotopic-independent highly accurate potential energy surface for CO2 isotopologues and an initial 12C16O2 infrared line list",
            surfaceDescription: "Ab initio DMS.",
            DOI: "10.1063/1.3697540",
            references: {one: "12HuScTa", two: "J. Chem. Phys. 136, 124311 (2012)"},
            year: "2012",
            email: "Xinchuan.Huang-1@nasa.gov (xinchuan@gmail.com) or David.W.Schwenke@nasa.gov or Timothy.J.Lee@nasa.gov",
            supplementaryDescription: "List of references for the experimental data used in this work; Fortran 90 codes of the DMS (purely CCSD(T)/aug-cc-pVQZ based) with testing program included; and, Ames-296K IR linelist for 12C16O2, with cutoff 1E-30 cm/molecule based on Ames-1 PES and the DMS, J=0-125 calculations.",
            supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-136-028213",
            predictedEnergyLevels: "Yes, rovibrational (J=0-125) - 'Ames-296K' IR line list"
        },
    },
    {
        molecule: "H2O",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            one: {
                paperTitle: "Spectroscopically determined potential energy surface of H162OH216O up to 25 000 cm−1",
                surfaceDescription: "A PES is constructed by fitting to observed vibration-rotation energy levels of the system using the exact kinetic energy operator nuclear motion program DVR3D.",
                DOI: "10.1063/1.1532001",
                references: {one: "03ShPoZo", two: "J. Chem. Phys. 118, 2124 (2003)"},
                year: "2003",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "Fortran programs giving the PES for two different fits ('A' and 'B'); H16O levels regarded as suspicious; and, reassigned transitions.",
                supplementaryLink: "http://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-118-006305/ ",
                predictedEnergyLevels: "No"
            },
            two: {
                paperTitle: "The determination of an accurate isotope dependent potential energy surface for water from extensive ab initio calculations and experimental data",
                surfaceDescription: "Ab initio isotope dependent PES, computed at 771 points using the 5Z basis set. For the points below 40000 cm-1, the core contribution was also determined using the CQZ basis.",
                DOI: "10.1063/1.473987",
                references: {one: "97PaScxx", two: "J. Chem. Phys. 106, 4618 (1997)"},
                year: "1997",
                email: "partridge@pegasus.arc.nasa.gov",
                supplementaryDescription: "Fortran programs to evaluate the PES; V5Z ab initio data; the data displayed in Figure 8 of the manuscript; and, computed energy levels.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA-106-4618",
                predictedEnergyLevels: ""
            },
            three: {
                paperTitle: "CVRQD ab initio ground-state adiabatic potential energy surfaces for the water molecule",
                surfaceDescription: 'Ab initio adiabatic PESs of the ground electronic state of the water molecule, called "CVRQD", are extended. The CVRQD PESs are obtained from extrapolation to the complete basis set of nearly full configuration interaction valence-only electronic structure computations, augmented by core, relativistic, quantum electrodynamics, and diagonal Born-Oppenheimer corrections.',
                DOI: "10.1063/1.2378766",
                references: {one: "06BaShZo", two: "J. Chem. Phys. 125, 204307 (2006)"},
                year: "2006",
                email: "csaszar@ chem.elte.hu",
                supplementaryDescription: "Fortran routines for the CVRQD PESs for the water isotopologues to be used with the program suite DVR3D.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-125-303643",
                predictedEnergyLevels: ""
            },
            four: {
                paperTitle: "Water line lists close to experimental accuracy using a spectroscopically determined potential energy surface for H2O16H2O16, H2O17H2O17, and H2O18",
                surfaceDescription: "Semitheoretical PES obtained by morphing an ab initio potential using experimental energy levels.",
                DOI: "10.1063/1.2927903",
                references: {one: "08ShZoOv", two: "J. Chem. Phys. 128, 224306 (2008)"},
                year: "2008",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "Fortran programs containing the fitted PESs for the 16O, 17O, and 18O isotopologues.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-128-046821",
                predictedEnergyLevels: ""
            },
        },
        dipoleMomentSurface: {
            one: {
                paperTitle: "",
                surfaceDescription: "",
                DOI: "",
                references: {one: "", two: ""},
                year: "",
                email: "",
                supplementaryDescription: "",
                supplementaryLink: "",
                predictedEnergyLevels: ""
            },
            two: {
                paperTitle: "",
                surfaceDescription: "",
                DOI: "",
                references: {one: "", two: ""},
                year: "",
                email: "",
                supplementaryDescription: "",
                supplementaryLink: "",
                predictedEnergyLevels: ""
            },
            three: {
                paperTitle: "",
                surfaceDescription: "",
                DOI: "",
                references: {one: "", two: ""},
                year: "",
                email: "",
                supplementaryDescription: "",
                supplementaryLink: "",
                predictedEnergyLevels: ""
            },
            four: {
                paperTitle: "",
                surfaceDescription: "",
                DOI: "",
                references: {one: "", two: ""},
                year: "",
                email: "",
                supplementaryDescription: "",
                supplementaryLink: "",
                predictedEnergyLevels: ""
            },
        },
    },
];

/** exists: true,
 paperTitle: "",
 surfaceDescription: "",
 DOI: "",
 references: {one: "", two: ""},
 year: "",
 email: "",
 supplementaryDescription: "",
 supplementaryLink: "",
 predictedEnergyLevels: "" **/


ReactDOM.render(
  <App molecules = {molecules}/>,
  document.getElementById('react-container')
)
