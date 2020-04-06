import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import Cardgineco from '../../Components/Cardgineco'
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
      overflowY: "scroll",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center"
    },
  }));
  const Padecimientos =[
    "Menarca",
    "Ritmo menstrual",
    "Partos",
    "Abortos",
    "Cesáreas",
    "Métodos Anticonceptivos",
]
export default function Genecorecord(){
const classes = useStyles();
const history = useHistory();
const handleNext= ()=>{
  history.push("/Patients/Aspectos generales")
}
  return (
    <Content nombre="Pacientes" select="agineco">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography className={classes.title}>
          Antecedentes Gineco-obstétricos 
        </Typography>
        <div className={classes.container}>
           { Padecimientos.map((padecimiento)=>
               <Cardgineco name={padecimiento} key={padecimiento}/>
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