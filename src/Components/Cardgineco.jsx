import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardbody: {
    width: "600px",
    height: "255px",
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

export default function Cardgineco(props){
    const classes = useStyles();
    const [values,setValues]=React.useState({
        "Menarca":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        },
        "Ritmo menstrual":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        },
        "Partos":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        },
        "Abortos":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        },
        "Cesáreas":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        },
        "Métodos Anticonceptivos":{
            confirmacion:"",
            detalles:"",
            fecha:new Date()
        }
    })
    return(
        <Card className={classes.cardbody}>
      <CardContent className={classes.card}>
        <Typography style={{ textAlign: "center", marginTop: "1vh" }}>
           {props.name}
        </Typography>
        <FormGroup row style={{ justifyContent: "center" }}>
          <FormControlLabel
            control={<Checkbox value="si" color="primary" checked={values[props.name].confirmacion==="si"} onChange={e=> {setValues({...values,[props.name]:{...values[props.name],confirmacion:e.target.value}})}}/>}
            label="Si"
          />
          <FormControlLabel
            control={<Checkbox value="no" color="primary" checked={values[props.name].confirmacion==="no"} onChange={e=> {setValues({...values,[props.name]:{...values[props.name],confirmacion:e.target.value}})}} />}
            label="No"
          />
        </FormGroup>
        <TextField
            label="¿Cuantos?"
            helperText={"Ingresa los detalles"}
            disabled={values[props.name].confirmacion==="no"}
            onChange={e=> {setValues({...values,[props.name]:{...values[props.name],detalles:e.target.value}})}}
            variant="filled"
          />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="Fecha"
            disabled={values[props.name].confirmacion==="no"}
            value={values[props.name].fecha}
            onChange={date=> {setValues({...values,[props.name]:{...values[props.name],fecha:date}})}}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            style={{
              alignSelf: "center",
              width: "100%"
            }}
          />
        </MuiPickersUtilsProvider>
      </CardContent>
    </Card>
    )
}