import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/Content";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import Cardgineco from '../../Components/Cardgineco'

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