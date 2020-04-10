import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import {addAntecedentsHFAction} from '../store/actions/AHeredofamiliares'
import { Card, Typography, CardContent, TextField } from "@material-ui/core";
import { useEffect } from "react";

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
function Cardrecord({name, addAHF }) {
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
  const handleChange= (prop) =>(e) => {
    e.preventDefault();
    setEr({...er,[name]:{...er[name],[prop]:e.target.value}});
  }
  useEffect(()=>{
    addAHF(er[name],name);
  },[er])
  return (
    <Card className={classes.cardbody} key={name}>
      <Typography className={classes.cardtitle}>
        {name}
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
                  checked={er[name].confirmacion === "si"}
                  onChange={handleChange("confirmacion")}
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
                  checked={er[name].confirmacion === "no"}
                  onChange={handleChange("confirmacion")}
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
                  disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
                  color="primary"
                  onChange={handleChange("madre")}
                />
              }
              label="Madre"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
                  color="primary"
                  onChange={handleChange("abuelos")}
                />
              }
              label="Abuelos"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
                  color="primary"
                  onChange={handleChange("padre")}
                />
              }
              label="Padre"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
                  color="primary"
                  onChange={handleChange("hermano")}
                />
              }
              label="Hermano"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="si"
                  disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
                  color="primary"
                  onChange={handleChange("ortros")}
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
            onChange={handleChange("dtalles")}
            helperText={"Ingresa los detalles"}
            rows="4"
            variant="filled"
            disabled={er[name].confirmacion === "" || er[name].confirmacion === "no"}
          />
        </div>
      </CardContent>
    </Card>
  );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addAHF: addAntecedentsHFAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cardrecord);
