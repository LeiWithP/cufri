import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography, Card, TextField } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";

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
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    height:"fit-content",
    marginTop:"5%",
    overflow:"visible"
  },
  tf: {
    width: "90%",
    marginTop: "1.5%",
  },
}));
const planes=["Diagnóstico fisioterapéutico","Pronostico","Objetivos","Plan fisioterapéutico"]
export default function Genecorecord() {
  const classes = useStyles();
  const history = useHistory();
  const [detalles, setDetalles] = React.useState({
    "Diagnóstico fisioterapéutico":"",
    "Pronostico":"",
    "Objetivos":"",
    "Plan fisioterapéutico":""
  });
  const handleNext = () => {
    history.push("/Patients/Notas de valoracion");
  };
  return (
    <Content nombre="Pacientes" select="diagnostico">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Dermatomas, mitomas y pares craneales</Typography>
        {planes.map(plan=>(
            <Card className={classes.Card}>
            <Typography className={classes.title}>{plan}</Typography>
            <TextField
            rows ="8"
            variant="filled"
            multiline
            className={classes.tf}
            label={"Diagnóstico fisioterapéutico"}
            helperText="Escribe los detalles"
            onChange={e=>{setDetalles({...detalles,[plan]:e.target.value})}}
            />
        </Card>))}
        <Fab
          color="primary"
          aria-label="next"
          disabled={
            detalles===""
          }
          onClick={handleNext}
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
