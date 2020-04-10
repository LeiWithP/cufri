import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography} from "@material-ui/core";
import Archcard from '../../Components/Movearchcard'
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
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    overflowY: "visible",
    height: "fit-content",
    overflow:"initial"
  },
  content: {
    width: "97%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "2%",
    marginBottom: "2%",
  },
}));

const Arcos=[
    "Columna cervical",
    "Columna dorsal",
    "Columna lumbar",
    "Hombro",
    "Codo",
    "Muñeca",
    "Mano",
    "Cadera",
    "Rodilla",
    "Tobillo",
    "Pie"
]

export default function MoveArch() {
  const classes = useStyles();
  const history = useHistory();
  const handleNext = () => {
    history.push("/Patients/Notas de evolucion");
  };
  return (
    <Content nombre="Pacientes" select="amovimiento">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Arcos de movimiento</Typography>
        {Arcos.map(arco=>(
            <Archcard key={arco}titulo={arco}/>
        ))}
        <Fab
          color="primary"
          aria-label="next"
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
