import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/Content";
import {Typography} from "@material-ui/core";
import Cardexp from '../../Components/Cardrecord';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "larger",
    marginTop: "3vh"
  },
  container: {
    display: "flex",
    width: "94%",
    height: "100%",
    overflowY: "scroll",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },
}));

const Padecimientos =[
    "Enfermedades Reumatológicas",
    "Enfermedades del sistema nervioso",
    "Síndrome",
    "Malformaciones",
    "Congénitas",
    "Diabetes",
    "Hipertención arterial sistémica",
    "Cáncer",
    "Cardiopatías",
    "Vasculares",
    "Pulmonares",
    "Heptopatias",
    "Nefropatias",
    "Digestivos",
    "Endocrinopatias",
    "Transtornos Hematológicos",
    "Dislipidemias",
    "Otras"
]

export default function Antecedentes() {
  const classes = useStyles();
  const history = useHistory(); 
  const handleNext= ()=>{
    history.push("/Patients/Antecedentes no patologicos")
  }
  return (
    <Content nombre="Pacientes" select="pacientes">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography className={classes.title}>
          Antecedentes Heredo Familiares
        </Typography>
        <div className={classes.container}>
           { Padecimientos.map((padecimiento)=>
               <Cardexp name={padecimiento} key={padecimiento}/>
               )}
        </div>
        <Fab
          color="primary"
          aria-label="next"
          onClick={handleNext}
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            position: "absolute",
            bottom:10,
            right:10
          }}
        >
          <NavigateNextIcon/>
        </Fab>
      </div>
    </Content>
  );
}
