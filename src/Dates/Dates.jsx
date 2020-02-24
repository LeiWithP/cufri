import React from "react";
import AppBar from "../Components/AppBar";
import SideMenu from "../Components/SideMenu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Calendar from "react-calendar";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import AddIcon from "@material-ui/icons/Add";
import StepLabel from "@material-ui/core/StepLabel";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

function getSteps() {
  return [
    "Seleccionar una fecha",
    "Seleccionar hora disponible",
    "Seleccionar paciente"
  ];
}
const useStyles = makeStyles(theme => ({
  root: {
    width: "97%",
    alignSelf: "center"
  },
  container: {
    maxHeight: 587
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Icon: {
    color: "#FFB700 !important"
  },
  calendar: {
    boxShadow: "10px 1px 60px -15px #111",
    border: "none",
    width: "100%",
    height: ""
  },
  tarjeta: {
    width: "auto",
    marginTop: "5%"
  },
  left: {
    marginLeft: "3%",
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30%"
  }
}));

export default function Dates() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fecha: new Date(),
    time: new Date(),
    name:""
  });
  const [calendarDate, setCalendardate] = React.useState(new Date());
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleDateChange = date => {
   setValues({fecha:date});
  };
  
  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
  };
  const handleDate = e => {
    setCalendardate(e);
    console.log(calendarDate);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap"
      }}
    >
      <AppBar nombre="Citas" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%"
        }}
      >
        <SideMenu select="citas" />
        <div
          style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Card className={classes.left}>
            <CardContent style={{ padding: "0" }}>
              <Calendar
                onChange={handleDate}
                value={calendarDate}
                minDate={new Date()}
                className={classes.calendar}
                minDetail="month"
              />
            </CardContent>
            <CardActions>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Typography style={{ fontSize: "small", fontWeight: "bold" }}>
                  Añadir una nueva cita
                </Typography>
                <AddIcon
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    setOpen(true);
                  }}
                />
              </div>
            </CardActions>
          </Card>
          <Card
            style={{
              marginLeft: "1%",
              marginTop: "2%",
              display: "flex",
              flexDirection: "column",
              width: "65%"
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                margin: "2%"
              }}
            >
              Citas de hoy
            </Typography>
            <Grid container spacing={3} style={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Card className={classes.tarjeta}>
                  <CardContent
                    style={{ backgroundColor: "#61B4E4" }}
                  >
                    <Typography style={{color:"white",fontSize:"Large",fontWeight:"bolder"}}>
                      Gustavo García Sánchez
                    </Typography>
                    <Grid container spacing={3} style={{ padding: "0%" }}>
                    <Grid item xs={2}>
                    <Typography style={{color:"white"}}>
                      22años
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography style={{color:"white"}}>
                      443-165-3698
                    </Typography>
                    </Grid>
                    </Grid>
                    <Typography style={{color:"white",fontSize:"small"}}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ backgroundColor: "#003764" }}
                  ></CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.tarjeta}>
                  <CardContent
                    style={{ backgroundColor: "#61B4E4" }}
                  >
                    <Typography style={{color:"white",fontSize:"Large",fontWeight:"bolder"}}>
                      Gustavo García Sánchez
                    </Typography>
                    <Grid container spacing={3} style={{ padding: "0%" }}>
                    <Grid item xs={2}>
                    <Typography style={{color:"white"}}>
                      22años
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography style={{color:"white"}}>
                      443-165-3698
                    </Typography>
                    </Grid>
                    </Grid>
                    <Typography style={{color:"white",fontSize:"small"}}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ backgroundColor: "#003764" }}
                  ></CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.tarjeta}>
                  <CardContent
                    style={{ backgroundColor: "#61B4E4" }}
                  >
                    <Typography style={{color:"white",fontSize:"Large",fontWeight:"bolder"}}>
                      Gustavo García Sánchez
                    </Typography>
                    <Grid container spacing={3} style={{ padding: "0%" }}>
                    <Grid item xs={2}>
                    <Typography style={{color:"white"}}>
                      22años
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography style={{color:"white"}}>
                      443-165-3698
                    </Typography>
                    </Grid>
                    </Grid>
                    <Typography style={{color:"white",fontSize:"small"}}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ backgroundColor: "#003764" }}
                  ></CardActions>
                </Card>
              </Grid>
            </Grid>
          </Card>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="form-dialog-title"
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                fontFamily: "Roboto",
                textAlign: "center"
              }}
            >
              Agendar Cita
            </DialogTitle>
            <DialogContent>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel
                      StepIconProps={{
                        classes: {
                          completed: classes.Icon,
                          active: classes.Icon
                        }
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                <div>
                  {(() => {
                    switch (activeStep) {
                      case 0:
                        return (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                                margin: "3%"
                              }}
                            >
                              Fecha
                            </Typography>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Fecha"
                                value={values.fecha}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  "aria-label": "change date"
                                }}
                                style={{
                                  marginLeft: "6%",
                                  marginBottom: "6%",
                                  alignSelf: "center",
                                  width: "100%"
                                }}
                                disablePast="true"
                              />
                            </MuiPickersUtilsProvider>
                          </div>
                        );
                      case 1:
                        return (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                                margin: "3%"
                              }}
                            >
                              Horas disponibles
                            </Typography>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={values.time}
                                onChange={e=>{setValues({time:e})}}
                                KeyboardButtonProps={{
                                  "aria-label": "change time"
                                }}
                                style={{
                                  marginLeft: "6%",
                                  marginBottom: "6%",
                                  alignSelf: "center",
                                  width: "100%"
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </div>
                        );
                      case 2:
                        return (
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              fontFamily: "Roboto",
                              margin: "3%"
                            }}
                          >
                            Buscar paciente
                          </Typography>
                        );
                      default:
                        return "Unknown stepIndex";
                    }
                  })()}
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                      style={{ color: "gray" }}
                    >
                      Atras
                    </Button>
                    <Button
                      variant="contained"
                      onClick={
                        activeStep === steps.length - 1
                          ? handleClose
                          : handleNext
                      }
                      style={{ backgroundColor: "#FFB700", color: "white" }}
                    >
                      {activeStep === steps.length - 1
                        ? "Agendar"
                        : "Siguiente"}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
