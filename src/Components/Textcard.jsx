import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardbody: {
    width: "600px",
    height: "210px",
    marginTop: "2%",
    [theme.breakpoints.down(800)]: {
      width: "500px"
    }
  },
  card: {
    display: "flex",
    flexDirection: "column"
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
  const[values,setValues]=React.useState({
    "Diagnosticos anteriores":{
        detalles:""
    },
    "Estudios de gabinete/estudios de laboratorio":{
        detalles:""
    },
    "Tratamientos anteriores(Tiempo,tipo)":{
        detalles:""
    },
    "Inquietud subyacente":{
        detalles:""
    },
  });
  return (
    <Card className={classes.cardbody}>
      <CardContent className={classes.card}>
        <Typography style={{ textAlign: "center", marginTop: "1vh" }}>
          {props.name}
        </Typography>
        <TextField
          label={props.name}
          multiline
          helperText={"Ingresa los detalles"}
          rows="4"
          onChange={e => {
            setValues({
              ...values,
              [props.name]: { detalles: e.target.value }
            });
          }}
          variant="filled"
        />
      </CardContent>
    </Card>
  );
}