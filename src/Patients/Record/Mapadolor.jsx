import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography, Card, TextField } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import MapaDolor from "../../Images/Mapadolor.jpg";
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
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    height:"fit-content"
  },
  tf: {
    width: "70%",
    marginTop: "1.5%",
  },
}));

export default function Genecorecord() {
  const classes = useStyles();
  const history = useHistory();
  const [detalles, setDetalles] = React.useState("");
  const handleNext = () => {
    history.push("/Patients/Examen físico");
  };
  return (
    <Content nombre="Pacientes" select="mapadolor">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Dermatomas, mitomas y pares craneales</Typography>
        <Card className={classes.Card}>
          <img src={MapaDolor} alt="" width="50%" style={{ height: "65%" }} />
          <TextField
            variant="filled"
            className={classes.tf}
            rows="8"
            multiline
            label="Escriba las zonas"
            helperText="Escriba los detalles"
            onChange={(e) => {
              setDetalles(e.target.value);
            }}
          />
        </Card>
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
