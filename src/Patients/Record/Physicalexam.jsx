import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, TextField } from "@material-ui/core";
import Content from "../../Components/Content";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "x-large",
    marginTop: "4vh"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "92%",
    alignSelf: "center",
    justifyContent: "center"
  },
  subtitle: {
    alignSelf: "left",
    fontWeight: "bold",
    fontSize: "x-large",
    marginTop: "4vh",
    marginLeft:"6%"
  },
}));

const ef = [
  "T.A",
  "F.C",
  "F.R",
  "Temp.",
  "Talla actual",
  "Talla anterior",
  "S02",
  "Peso actual",
  "Peso anterior",
  "Peso ideal",
  "IMC"
];
const eg = [
  "Estado de conciencia",
  "Actitud",
  "Movimientos anormales",
  "Postura",
  "Marcha",
  "Estado general de nutrición"
];
const er=[
    "Piel y anexos",
    "Cabeza",
    "Ojos",
    "Oidos",
    "Nariz y senos p/n",
    "Boca",
    "Torax",
    "Vasos sanguíneos",
    "Mamas",
    "Genitales"
]
const columna=[
    "Cervical",
    "Dorsal",
    "Sacroiliaca"
]
const ms=[
    "Hombros",
    "Codo",
    "Muñeca",
    "Mano"
]
const mi=[
    "Cadera",
    "Rodilla(Genu varo/valgo, recurvatum)",
    "Tobillo",
    "Pie(Pie equino, plano, cavo)"
]
export default function Pysicalexam() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    "T.A": "",
    "F.C": "",
    "F.R": "",
    "Temp.": "",
    "Talla actual": "",
    "Talla anterior": "",
    S02: "",
    "Peso actual": "",
    "Peso anterior": "",
    "Peso ideal": "",
    IMC: "",
    "Estado de conciencia": "",
    Actitud: "",
    "Movimientos anormales": "",
    Postura: "",
    Marcha: "",
    "Estado general de nutrición": "",
    "Piel y anexos":"",
    "Cabeza":"",
    "Ojos":"",
    "Oidos":"",
    "Nariz y senos p/n":"",
    "Boca":"",
    "Torax":"",
    "Vasos sanguíneos":"",
    "Mamas":"",
    "Genitales":"",
    "Cervical":"",
    "Dorsal":"",
    "Sacroiliaca":"",
    "Hombros":"",
    "Codo":"",
    "Muñeca":"",
    "Mano":"",
    "Cadera":"",
    "Rodilla(Genu varo/valgo, recurvatum)":"",
    "Tobillo":"",
    "Pie(Pie equino, plano, cavo)":""
  });
  return (
    <Content nombre="Pacientes" select="pacientes">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography className={classes.title}>Exploración física</Typography>
        <Card
          style={{
            width: "90%",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll"
          }}
        >
          <form
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              width: "90%"
            }}
          >
            <div className={classes.container}>
              {ef.map(val => (
                <TextField
                  variant={"filled"}
                  label={val}
                  onChange={e => {
                    setValues({ ...values, [val]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginRight: "2%", marginTop: "2%" }}
                />
              ))}
            </div>
            <Typography className={classes.title}>
              Exploración General
            </Typography>
            <div className={classes.container}>
              {eg.map(valg => (
                <TextField
                  variant={"filled"}
                  label={valg}
                  onChange={e => {
                    setValues({ ...values, [valg]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginRight: "3%", marginTop: "2%",width:"350px" }}
                />
              ))}
            </div>
            <Typography className={classes.title}>
              Exploración por región
            </Typography>
            <div className={classes.container}>
            {er.map(valr => (
                <TextField
                  variant={"filled"}
                  label={valr}
                  onChange={e => {
                    setValues({ ...values, [valr]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginTop: "2%",width:"95%" }}
                />
              ))}
            </div> 
            <Typography className={classes.title}>
              Sistemas musculoesqueléticos por regiones
            </Typography>
            <Typography className={classes.subtitle}>
              Columna
            </Typography>
            <div className={classes.container}>
            {columna.map(valr => (
                <TextField
                  variant={"filled"}
                  label={valr}
                  onChange={e => {
                    setValues({ ...values, [valr]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginTop: "2%",width:"95%" }}
                />
              ))}
            </div> 
            <Typography className={classes.subtitle}>
              Miembro superior
            </Typography>
            <div className={classes.container}>
            {ms.map(valr => (
                <TextField
                  variant={"filled"}
                  label={valr}
                  onChange={e => {
                    setValues({ ...values, [valr]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginTop: "2%",width:"95%" }}
                />
              ))}
            </div> 
            <Typography className={classes.subtitle}>
              Miembro Inferior
            </Typography>
            <div className={classes.container}>
            {mi.map(valr => (
                <TextField
                  variant={"filled"}
                  label={valr}
                  onChange={e => {
                    setValues({ ...values, [valr]: e.target.value });
                  }}
                  helperText={"Escriba los detalles"}
                  style={{ marginTop: "2%",width:"95%" }}
                />
              ))}
            </div> 
          </form>
        </Card>
        <Fab
          color="primary"
          aria-label="next"
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            position: "absolute",
            bottom: 10,
            right: 10
          }}
        >
          <NavigateNextIcon />
        </Fab>
      </div>
    </Content>
  );
}
