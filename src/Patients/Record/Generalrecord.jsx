import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/Content";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import Cardyesno from '../../Components/Yesnocard';
import CardnP from '../../Components/Cardnopatologic';
import Cardtext from '../../Components/Textcard';
import {useHistory} from 'react-router-dom';

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
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center"
    },
  }));
  const Sintomas =[
    "Astenia",
    "Adinamia",
    "Anorexia",
    "Fiebre",
    "Perdida de peso",
]
const Padecimientos =[
    "Aparato digestivo",
    "Aparato cardiovacular",
    "Aparato Respiratorio",
    "Aparato Urinario",
    "Aparato genital",
    "Aparato hematológico",
    "Sistema endócrino",
    "Sistema nervioso",
    "Sistema sensorial",
    "Sistema osteomuscular"
]
const Otros =[
    "Diagnosticos anteriores",
    "Estudios de gabinete/estudios de laboratorio",
    "Tratamientos anteriores(Tiempo,tipo)",
    "Inquietud subyacente",
]
export default function Genecorecord(){
const classes = useStyles();
const history = useHistory();
const handleNext = ()=>{
  history.push("/Patients/Examen físico")
}
  return (
    <Content nombre="Pacientes" select="pacientes">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY:"scroll"
        }}
      >
        <Typography className={classes.title}>
          Sintomas Generales
        </Typography>
        <div className={classes.container}>
           { Sintomas.map((sintoma)=>
               <Cardyesno name={sintoma} key={sintoma}/>
               )}
        </div>
        <Typography className={classes.title}>
           Aparatos y sistemas
        </Typography>
        <div className={classes.container}>
           { Padecimientos.map((padecimiento)=>
               <CardnP name={padecimiento} key={padecimiento}/>
            )}
            { Otros.map((otro)=>
               <Cardtext name={otro} key={otro}/>
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