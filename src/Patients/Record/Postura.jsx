import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography, Card, TextField } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import Postura from "../../Images/postura.jpg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {addPosturaAction} from '../../store/actions/Postura'

const useStyles = makeStyles((theme) => ({
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "larger",
    marginTop: "3vh",
  },
  Card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    height:"80%"
  },
  tf: {
    width: "70%",
    marginTop: "1.5%",
  },
}));

function Posturaform({addPostura}) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    Anterior: "",
    Lateral: "",
    Posterior: "",
  });
  const handleNext = () => {
    addPostura(values);
    history.push("/Patients/Dermatomas mitomas y pares craneales");
  };
  return (
    <Content nombre="Pacientes" select="postura">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Postura</Typography>
        <Card className={classes.Card}>
          <img src={Postura} alt="" width="50%" style={{ height: "50%" }} />
          <form id="formulario" name="formulario" onSubmit={handleNext} style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center" }}>
          <TextField
            variant="filled"
            className={classes.tf}
            label="Anterior"
            helperText="Escriba los detalles"
            onChange={(e) => {
              setValues({ ...values, Anterior: e.target.value });
            }}
          />
          <TextField
            variant="filled"
            className={classes.tf}
            label="Lateral"
            helperText="Escriba los detalles"
            onChange={(e) => {
              setValues({ ...values, Lateral: e.target.value });
            }}
          />
          <TextField
            variant="filled"
            className={classes.tf}
            label="Posterior"
            helperText="Escriba los detalles"
            onChange={(e) => {
              setValues({ ...values, Posterior: e.target.value });
            }}
          />
          </form>
        </Card>
        <Fab
          color="primary"
          aria-label="next"
          disabled={
            values.Anterior === "" ||
            values.Lateral === "" ||
            values.Posterior === ""
          }
          type="submit"
          form="formulario"
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <NavigateNextIcon />
        </Fab>
      </div>
    </Content>
  );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addPostura: addPosturaAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posturaform);

