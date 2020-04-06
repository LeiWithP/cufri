import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Content from '../../Components/ContentExp'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";
import CardnP from '../../Components/Cardnopatologic';
import {useHistory} from 'react-router-dom';

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
    "Tipo de Cosntrucción no favorable",
    "Suelo no regular",
    "Escaleras que dificulten actividades de la vida diaria",
    "Ventilación inadecuada",
    "Hacinamiento",
    "Adaptaciones y auxiliares para sus avd",
    "Servicios de agua",
    "Servicios de luz",
    "Servicios de drenaje inadecuados",
    "Hábitos personales de baño",
    "Higiene bucal",
    "Defecación",
    "Tabaquismo",
    "Alcoholismo",
    "Toxicomanías",
    "Alimentación",
    "Trabajo/Descanso",
    "Pasatiempo"
]
export default function Nopatologic(){
    const classes=useStyles();
    const history =useHistory();
    const [confirmacion,setConfirmacion]=React.useState("");
    const handleNext = ()=>{
      history.push("/Patients/Antecedentes patologicos")
    }
    return(
        <Content nombre="Pacientes" select="antnopatologicos">
             <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography className={classes.title}>
          Antecedentes No Patológicos
        </Typography>
        <Typography style={{alignSelf:"center",marginTop:"2vh"}}>
          Factores de riesgo en el hogar para el padecimiento actual
        </Typography>
        <FormGroup row style={{ justifyContent: "center" }}>
        <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  color="primary"
                  checked={confirmacion === "si"}
                  onChange={e=> {setConfirmacion(e.target.value)}}
                />
              }
              label="Si"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="no"
                  color="primary"
                  checked={confirmacion === "no"}
                  onChange={e=> {setConfirmacion(e.target.value)}}
                />
              }
              label="No"
            />
        </FormGroup>
        <div className={classes.container}>
         { Padecimientos.map((padecimiento)=>
            <CardnP name={padecimiento} disabled={confirmacion}/>
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
          disabled={confirmacion===""}
        >
          <NavigateNextIcon/>
        </Fab>
     </div>
        </Content>
    );
}
