import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import {addSufferingAction} from '../store/actions/Suffering'
import { useEffect } from "react";

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

function Textcard({name,addSuffering}) {
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
  useEffect(()=>{
    addSuffering(values[name].detalles,name);
  },[values])
  return (
    <Card className={classes.cardbody}>
      <CardContent className={classes.card}>
        <Typography style={{ textAlign: "center", marginTop: "1vh" }}>
          {name}
        </Typography>
        <TextField
          label={name}
          multiline
          helperText={"Ingresa los detalles"}
          rows="4"
          onChange={e => {
            setValues({
              ...values,
              [name]: {...values[name],detalles: e.target.value }
            });
          }}
          variant="filled"
        />
      </CardContent>
    </Card>
  );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addSuffering: addSufferingAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Textcard);