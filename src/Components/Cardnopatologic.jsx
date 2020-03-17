import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardbody: {
    width: "600px",
    height: "225px",
    marginTop: "2%",
    [theme.breakpoints.down(800)]: {
      width: "500px"
    }
  },
  card:{
      display:"flex",
      flexDirection:"column"
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "larger",
    marginTop: "3vh"
  },
  cardtitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "2%"
  },
  checkbox: {
    width: "40%"
  }
}));

export default function Cardnopatologic(props) {
  const classes = useStyles();
  const [values,setValues]=React.useState({
    "Enfermedades Infecciosas de la infancia":{
        confirmacion:"",
        detalles:""
    },
    "Intervenciones Quirúrgicas":{
        confirmacion:"",
        detalles:""
    },
    "Traumatismos(Esguinces.fracturas,luxaciones,desgarres)":{
        confirmacion:"",
        detalles:""
    },
    "Infiltraciones":{
        confirmacion:"",
        detalles:""
    },
    "Hospitalizaciones":{
        confirmacion:"",
        detalles:""
    },
    "Perdida del Conocimiento":{
        confirmacion:"",
        detalles:""
    },
    "Intolerancia a medicamentos":{
        confirmacion:"",
        detalles:""
    },
    "Transfuciones":{
        confirmacion:"",
        detalles:""
    },
    "Medicamentos":{
        confirmacion:"",
        detalles:""
    },
    "ETS":{
        confirmacion:"",
        detalles:""
    },
    "Tipo de Cosntrucción no favorable":{
        confirmacion:"",
        detalles:""
    },
    "Suelo no regular":{
        confirmacion:"",
        detalles:""
    },
    "Escaleras que dificulten actividades de la vida diaria":{
        confirmacion:"",
        detalles:""
    },
    "Ventilación inadecuada":{
        confirmacion:"",
        detalles:""
    },
    "Hacinamiento":{
        confirmacion:"",
        detalles:""
    },
    "Adaptaciones y auxiliares para sus avd":{
        confirmacion:"",
        detalles:""
    },
    "Servicios de agua":{
        confirmacion:"",
        detalles:""
    },
    "Servicios de luz":{
        confirmacion:"",
        detalles:""
    },
    "Servicios de drenaje inadecuados":{
        confirmacion:"",
        detalles:""
    },
    "Hábitos personales de baño":{
        confirmacion:"",
        detalles:""
    },
    "Higiene bucal":{
        confirmacion:"",
        detalles:""
    },
    "Defecación":{
        confirmacion:"",
        detalles:""
    },
    "Tabaquismo":{
        confirmacion:"",
        detalles:""
    },
    "Alcoholismo":{
        confirmacion:"",
        detalles:""
    },
    "Toxicomanías":{
        confirmacion:"",
        detalles:""
    },
    "Alimentación":{
        confirmacion:"",
        detalles:""
    },
    "Trabajo/Descanso":{
        confirmacion:"",
        detalles:""
    },
    "Pasatiempo":{
        confirmacion:"",
        detalles:""
    },
  })
  return (
    <Card className={classes.cardbody}>
      <CardContent className={classes.card}>
        <Typography style={{ textAlign: "center", marginTop: "1vh" }}>
           {props.name}
        </Typography>
        <FormGroup row style={{ justifyContent: "center" }}>
          <FormControlLabel
            control={<Checkbox value="si" color="primary" checked={values[props.name].confirmacion==="si"} onChange={e=> {setValues({...values,[props.name]:{confirmacion:e.target.value}})}}/>}
            label="Si"
            disabled={(props.disabled==="no")||(props.disabled==="")}
          />
          <FormControlLabel
            control={<Checkbox value="no" color="primary" checked={values[props.name].confirmacion==="no"} onChange={e=> {setValues({...values,[props.name]:{confirmacion:e.target.value}})}} />}
            label="No"
            disabled={(props.disabled==="no")||(props.disabled==="")}
          />
        </FormGroup>
        <TextField
            id="filled-multiline-static"
            label="¿Cuál?"
            multiline
            helperText={"Ingresa los detalles"}
            rows="4"
            onChange={e=> {setValues({...values,[props.name]:{detalles:e.target.value}})}}
            disabled={(props.disabled==="no")||(props.disabled==="")||(values[props.name].confirmacion==="no")}
            variant="filled"
          />
      </CardContent>
    </Card>
  );
}
