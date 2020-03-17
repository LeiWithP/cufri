import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Content from '../../Components/Content'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import CardnP from '../../Components/Cardnopatologic';

const useStyles = makeStyles(theme => ({
    title: {
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: "larger",
      marginTop: "4vh"
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
    "Enfermedades Infecciosas de la infancia",
    "Intervenciones Quirúrgicas",
    "Traumatismos(Esguinces.fracturas,luxaciones,desgarres)",
    "Infiltraciones",
    "Hospitalizaciones",
    "Perdida del Conocimiento",
    "Intolerancia a medicamentos",
    "Transfuciones",
    "Medicamentos",
    "ETS"
]
export default function Nopatologic(){
    const classes=useStyles();
    return(
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
          Antecedentes personales patológicos
        </Typography>
        <div className={classes.container}>
         { Padecimientos.map((padecimiento)=>
            <CardnP name={padecimiento} />
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
