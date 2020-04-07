import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card, Typography, CardContent} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardbody: {
    width: "600px",
    height: "100px",
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

export default function Yesnocard(props) {
  const classes = useStyles();
  const [values,setValues] = React.useState({
    "Astenia":{
        confirmacion:""
    },
    "Adinamia":{
        confirmacion:""
    },
    "Anorexia":{
        confirmacion:""
    },
    "Fiebre":{
        confirmaicion:""
    },
    "Perdida de peso":{
        confirmacion:""
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
            control={
              <Checkbox
                value="si"
                color="primary"
                checked={values[props.name].confirmacion === "si"}
                onChange={e => {
                  setValues({
                    ...values,
                    [props.name]: {...values[props.name],confirmacion: e.target.value }
                  });
                }}
              />
            }
            label="Si"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="no"
                color="primary"
                checked={values[props.name].confirmacion === "no"}
                onChange={e => {
                  setValues({
                    ...values,
                    [props.name]: {...values[props.name],confirmacion: e.target.value }
                  });
                }}
              />
            }
            label="No"
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
}
