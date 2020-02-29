import React from "react";
import Content from '../Components/Content';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Image from "../Images/CARRUSEL_H_FISIOTERAPIA_3.jpg";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogActions } from "@material-ui/core";

const cards = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles(theme => ({
  Card: {
    display: "flex",
    flexDirection: "column",
    width: "28%",
    height: "fit-content",
    marginTop: "3vh"
  },
  Botones: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#003764"
  },
  Fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#FFB700",
    "&:hover": {
      background: "#FFB700"
    }
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    width: "550px"
  },
  Boton: {
    backgroundColor: "#FFC107",
    color: "white",
    marginRight: "2%",
    "&:hover": {
      background: "#FFB700"
    }
  }
}));

export default function Statistics() {
  /**
   * constante para llamar los estilos
   */
  const classes = useStyles();
  /**
   * States y handles para el control de apertura y cierre de los dialogs
   */
  const [open, setOpen] = React.useState(false);
  const handleOpen = e => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = e => {
    e.preventDefault();
    setOpen(false);
    console.log(data);
  };
  /**
   * State donde se guarda la data del video
   */
  const [data, setData] = React.useState({
    link: "",
    titulo: "",
    region_padecimiento: "",
    area_especifica: "",
    observaciones: ""
  });
  /**
   *
   * @param {los valores se guardan enviandolos como props} prop
   */
  const handleChange = prop => event => {
    setData({ ...data, [prop]: event.target.value });
  };
  return (
    <Content nombre="Videos">
        <div
          style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap"
          }}
        >
          {/**
           * Aqui se insertan las cards
           */}
          {cards.map(card => {
            return (
              <Card className={classes.Card}>
                <img src={Image} alt="" width="100%" />
                <CardContent>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "larger",
                      fontFamily: "Roboto"
                    }}
                  >
                    Titulo del video
                  </Typography>
                  <Typography
                    color={"textSecondary"}
                    style={{
                      fontFamily: "Roboto",
                      marginTop: "1vh"
                    }}
                  >
                    Región del padecimiento:
                  </Typography>
                  <Typography
                    color={"textSecondary"}
                    style={{
                      fontFamily: "Roboto"
                    }}
                  >
                    Área específica:
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.Botones}>EDITAR</Button>
                  <Button className={classes.Botones}>IR AL VIDEO</Button>
                </CardActions>
              </Card>
            );
          })}
          {/**
           * Fin del bloque de las cards
           * se coloca un float action button
           */}
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleOpen}
            className={classes.Fab}
          >
            <AddIcon />
          </Fab>
          {/**
           * inicio de los dialogs
           *
           */}
          <Dialog
            open={open}
            style={{ display: "flex", flexDirection: "column" }}
            maxWidth={false}
          >
            <DialogTitle style={{ textAlign: "center" }}>
              Agregar video
              <Typography>Agrega los datos que se te piden</Typography>
            </DialogTitle>
            <DialogContent>
              <form
                id="formulario"
                className={classes.formulario}
                onSubmit={handleClose}
              >
                <TextField
                  id="filled-helperText"
                  label="Link del video"
                  helperText="Ingresa el link del video"
                  variant="filled"
                  value={data.link}
                  onChange={handleChange("link")}
                />
                <TextField
                  id="filled-helperText"
                  label="Titulo"
                  helperText="Ingresa el titulo del video"
                  variant="filled"
                  value={data.titulo}
                  onChange={handleChange("titulo")}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TextField
                    id="filled-helperText"
                    label="Región del Padecimiento"
                    helperText="Ingresa la región del padecimiento"
                    variant="filled"
                    value={data.region_padecimiento}
                    onChange={handleChange("region_padecimiento")}
                    style={{ width: "47%" }}
                  />
                  <TextField
                    id="filled-helperText"
                    label="Área específica"
                    helperText="Ingresa el área específica"
                    variant="filled"
                    value={data.area_especifica}
                    onChange={handleChange("area_especifica")}
                    style={{ width: "47%" }}
                  />
                </div>
                <TextField
                  id="filled-multiline-static"
                  label="Observaciones"
                  multiline
                  rows="6"
                  value={data.observaciones}
                  onChange={handleChange("observaciones")}
                  defaultValue=""
                  variant="filled"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                className={classes.Botones}
                onClick={e => {
                  setOpen(false);
                }}
              >
                REGRESAR
              </Button>
              <Button type="submit" form="formulario" className={classes.Boton}>
                AGREGAR
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Content>
  );
}