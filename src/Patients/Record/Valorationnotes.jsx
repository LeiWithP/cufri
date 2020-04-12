import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography, Card, TextField, Button } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import Valnote from '../../Components/Valnote';
import { useHistory, useParams } from "react-router-dom";

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

const data =[
    {
        fecha:"06/04/2020",
        EVA:"Nada",
        Pfuncionales:"Correctas",
        Afuncional:"Fallas",
        Fuerza:"Normal",
        ROM:"Correcto"
    }
]

export default function Valnotes() {
  const classes = useStyles();
  const history = useHistory();
  const {id} = useParams();
  const [values, setValues] = React.useState({
    fecha: new Date(),
    EVA: "",
    Pfuncionales: "",
    Afuncional: "",
    Fuerza: "",
    ROM: "",
  });
  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };
  const handleNext = () => {
    history.push("/Patients/Notas de evolucion");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <Content nombre="Pacientes" select="nval">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Notas de Valoración</Typography>
        <Card className={classes.Card}>
          <form id="formulario" name="formulario" onSubmit={handleSubmit} className={classes.content}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="dialog"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha"
                style={{ margin: "initial" }}
                value={values.fecha}
                onChange={(e) => {
                  setValues({ ...values, fecha: e });
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                disablePast="true"
              />
            </MuiPickersUtilsProvider>
            <TextField
              variant="standard"
              label="EVA"
              onChange={handleChange("EVA")}
              style={{ width: "30%" }}
            />
            <TextField
              variant="standard"
              label="Pruebas funcionales"
              onChange={handleChange("Pfuncionales")}
              style={{ width: "30%" }}
            />
            <TextField
              variant="standard"
              label="Actividad funcional"
              onChange={handleChange("Afuncional")}
              style={{ width: "30%" }}
            />
            <TextField
              variant="standard"
              label="Fuerza"
              onChange={handleChange("Fuerza")}
              style={{ width: "30%" }}
            />
            <TextField
              variant="standard"
              label="ROM"
              onChange={handleChange("ROM")}
              style={{ width: "30%" }}
            />
          </form>
          <Button
          disabled={!id}
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#FFB700",
              marginBottom: "1%",
              marginRight: "1.5%",
              color: "white",
            }}
            type="submit"
            form="formulario"
          >
            Agregar nota de valoración
          </Button>
        </Card>
        <Typography className={classes.title}>Notas de valoración anotadas</Typography>
        {data.map(datos=>(
            <Valnote data={datos}/>
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
