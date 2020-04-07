import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around"
  },
  cardbody: {
    width: "600px",
    height: "225px",
    marginTop: "2%",
    [theme.breakpoints.down(800)]:{
        width:"500px"
    }
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
export default function Cardrecord(props) {
  const classes = useStyles();
  const [er, setEr] = React.useState({
    "Enfermedades Reumatológicas": {
      confirmacion: "",
      madre: "",
      abuelos: "",
      padre: "",
      hermano: "",
      otros: "",
      dtalles: ""
    },
    "Enfermedades del sistema nervioso": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Síndrome": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Malformaciones": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Congénitas": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Diabetes": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Hipertención arterial sistémica": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Cáncer": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Cardiopatías": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Vasculares": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Pulmonares": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Heptopatias": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Nefropatias": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Digestivos": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Endocrinopatias": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Transtornos Hematológicos": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Dislipidemias": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      },
      "Otras": {
        confirmacion: "",
        madre: "",
        abuelos: "",
        padre: "",
        hermano: "",
        otros: "",
        dtalles: ""
      }
  });
  return (
    <Card className={classes.cardbody} key={props.name}>
      <Typography className={classes.cardtitle}>
        {props.name}
      </Typography>
      <CardContent className={classes.card}>
        {/**
         * izquierda
         */}
        <div
          style={{
            width: "48%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <FormGroup row style={{ justifyContent: "space-between" }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  color="primary"
                  checked={er[props.name].confirmacion === "si"}
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],confirmacion:e.target.value}})}}
                />
              }
              label="Si"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="no"
                  color="primary"
                  checked={er[props.name].confirmacion === "no"}
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],confirmacion:e.target.value}})}}
                />
              }
              label="No"
              className={classes.checkbox}
            />
          </FormGroup>
          <FormGroup row style={{ justifyContent: "space-between" }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
                  color="primary"
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],madre:e.target.value}})}}
                />
              }
              label="Madre"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
                  color="primary"
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],abuelos:e.target.value}})}}
                />
              }
              label="Abuelos"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
                  color="primary"
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],padre:e.target.value}})}}
                />
              }
              label="Padre"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
                  color="primary"
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],hermano:e.target.value}})}}
                />
              }
              label="Hermano"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
                  color="primary"
                  onChange={e=> {setEr({...er,[props.name]:{...er[props.name],otros:e.target.value}})}}
                />
              }
              label="Otros"
              className={classes.checkbox}
            />
          </FormGroup>
        </div>
        {/**
         * derecha
         */}
        <div
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <TextField
            label="Detalles"
            multiline
            onChange={e=> {setEr({...er,[props.name]:{...er[props.name],detalles:e.target.value}})}}
            helperText={"Ingresa los detalles"}
            rows="4"
            variant="filled"
            disabled={er[props.name].confirmacion === "" || er[props.name].confirmacion === "no"}
          />
        </div>
      </CardContent>
    </Card>
  );
}
