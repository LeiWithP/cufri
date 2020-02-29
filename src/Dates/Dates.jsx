import React from "react";
import Content from '../Components/Content';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Calendar from "react-calendar";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Radio from "@material-ui/core/Radio";
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
import { TextField, InputAdornment } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import StepLabel from "@material-ui/core/StepLabel";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/**
 * funcion donde se encuentran los pasos del steper
 */
function getSteps() {
  return [
    "Seleccionar una fecha",
    "Seleccionar hora disponible",
    "Seleccionar paciente",
    "Definir padecimiento"
  ];
}
/**
 * constante donde se definen las columnas de la tabla de pacientes en el dialog
 */
const columns = [
  {
    id: "check",
    minWidth: 70,
    align: "left"
  },
  {
    id: "Nombre_paciente",
    label: "Nombre del paciente",
    minWidth: 170,
    align: "left"
  },
  {
    id: "Telefono",
    label: "Telefono",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  }
];

const rows = [1, 2, 3, 4, 5, 6, 7];

/**
 * se definen los estilos aplicados a la interfaz
 */
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
/**
 * función principal del componente
 */
export default function Dates() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fecha: new Date(),
    time: new Date(),
    id: null,
    padecimiento: ""
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [calendarDate, setCalendardate] = React.useState(new Date());
  const [activeStep, setActiveStep] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);
  /**
   *handles para el siguiente paso y el paso anterior en el dialog
   */
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  /**
   *
   * @param {evento} event
   * handle para buscar y limpiar campo de busqueda
   */
  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleClear = () => {
    console.log(search);
    setSearch("");
  };

  /**
   *
   * @param {fecha} date
   * handle para definir la fecha de la cita en el dialog
   */
  const handleDateChange = date => {
    setValues({ fecha: date });
  };
  /**
   *
   * @param {evento} event
   * @param {nueva pagina} newPage
   * handles para la paginación
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  /**
   * handle para el cierre del dialog
   */
  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
    console.log(values);
  };
  /**
   *
   * @param {evento} e
   * handle para guardar la fecha seleccionada en el calendario
   */
  const handleDate = e => {
    setCalendardate(e);
    console.log(calendarDate);
  };
  return (
    <Content nombre="Citas">
        <div
          style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            display: "flex",
            flexDirection: "row"
          }}
        >
          {/**
           * contenido de la parte izquierdas
           */}
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
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </div>
            </CardActions>
          </Card>
          {/**
           * contenido de la parte derecha
           */}
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
                  <CardContent style={{ backgroundColor: "#61B4E4" }}>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "Large",
                        fontWeight: "bolder"
                      }}
                    >
                      Gustavo García Sánchez
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ color: "white", marginRight: "5%" }}>
                        22años
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        443-165-3698
                      </Typography>
                    </div>
                    <Typography style={{ color: "white", fontSize: "small" }}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      backgroundColor: "#003764",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ display: "flex", width: "50%" }}>
                      <AccessTimeIcon style={{ color: "white" }} />
                      <Typography
                        style={{
                          color: "white",
                          fontSize: "small",
                          alignSelf: "center",
                          marginLeft: "3%"
                        }}
                      >
                        08:00-09:00
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "40%",
                        justifyContent: "flex-end"
                      }}
                    >
                      <CheckCircleIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <EditIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <CancelIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.tarjeta}>
                  <CardContent style={{ backgroundColor: "#61B4E4" }}>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "Large",
                        fontWeight: "bolder"
                      }}
                    >
                      Gustavo García Sánchez
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ color: "white", marginRight: "5%" }}>
                        22años
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        443-165-3698
                      </Typography>
                    </div>
                    <Typography style={{ color: "white", fontSize: "small" }}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      backgroundColor: "#003764",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ display: "flex", width: "50%" }}>
                      <AccessTimeIcon style={{ color: "white" }} />
                      <Typography
                        style={{
                          color: "white",
                          fontSize: "small",
                          alignSelf: "center",
                          marginLeft: "3%"
                        }}
                      >
                        08:00-09:00
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "40%",
                        justifyContent: "flex-end"
                      }}
                    >
                      <CheckCircleIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <EditIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <CancelIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.tarjeta}>
                  <CardContent style={{ backgroundColor: "#61B4E4" }}>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "Large",
                        fontWeight: "bolder"
                      }}
                    >
                      Gustavo García Sánchez
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ color: "white", marginRight: "5%" }}>
                        22años
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        443-165-3698
                      </Typography>
                    </div>
                    <Typography style={{ color: "white", fontSize: "small" }}>
                      Condición: Esguince de rodilla
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      backgroundColor: "#003764",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ display: "flex", width: "50%" }}>
                      <AccessTimeIcon style={{ color: "white" }} />
                      <Typography
                        style={{
                          color: "white",
                          fontSize: "small",
                          alignSelf: "center",
                          marginLeft: "3%"
                        }}
                      >
                        08:00-09:00
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "40%",
                        justifyContent: "flex-end"
                      }}
                    >
                      <CheckCircleIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <EditIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                      <CancelIcon
                        style={{
                          color: "white",
                          paddingRight: "5%",
                          cursor: "pointer"
                        }}
                      />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Card>
          {/**
           * Dialog donde se agregan las citas
           */}
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
                  {/**
                   * Switch case donde aparecen los componentes de cada step
                   */}
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
                                onChange={e => {
                                  setValues({ time: e });
                                }}
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
                          <div>
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
                            <Paper className={classes.root}>
                              <span
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between"
                                }}
                              >
                                <Typography
                                  style={{
                                    fontSize: "25px",
                                    fontWeight: "bolder",
                                    fontFamily: "Roboto",
                                    margin: "3%"
                                  }}
                                >
                                  Pacientes
                                </Typography>
                                <TextField
                                  id="standard-bare"
                                  margin="normal"
                                  placeholder="Buscar"
                                  value={search}
                                  onChange={handleSearch}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="end">
                                        <SearchIcon />
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment
                                        position="end"
                                        style={{ cursor: "pointer" }}
                                        onClick={handleClear}
                                      >
                                        <ClearIcon />
                                      </InputAdornment>
                                    )
                                  }}
                                  style={{
                                    color: "#e0e0e0",
                                    alignSelf: "center",
                                    marginRight: "3%",
                                    width: "35%"
                                  }}
                                />
                              </span>
                              <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                  <TableHead>
                                    <TableRow>
                                      {columns.map(column => (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                          style={{
                                            minWidth: column.minWidth,
                                            fontWeight: "bold"
                                          }}
                                        >
                                          {column.label}
                                        </TableCell>
                                      ))}
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows
                                      .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                      )
                                      .map(row => {
                                        return (
                                          <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.code}
                                          >
                                            <TableCell>
                                              <Radio
                                                onChange={e => {
                                                  setValues({
                                                    id: e.target.value
                                                  });
                                                }}
                                                color={"primary"}
                                              />
                                            </TableCell>
                                            <TableCell>
                                              Gustavo García Sánchez
                                            </TableCell>
                                            <TableCell>443-188-6353</TableCell>
                                          </TableRow>
                                        );
                                      })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              <TablePagination
                                rowsPerPageOptions={[
                                  5,
                                  { label: "All", value: -1 }
                                ]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                              />
                            </Paper>
                          </div>
                        );
                      case 3:
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
                              Definir padecimiento
                            </Typography>
                            <TextField
                              id="standard-multiline-flexible"
                              label="Padecimiento"
                              multiline
                              rowsMax="2"
                              value={values.padecimiento}
                              onChange={e=>{setValues({padecimiento:e.target.value})}}
                              style={{
                                marginLeft: "6%",
                                marginBottom: "6%",
                                alignSelf: "center",
                                width: "100%"
                              }}
                            />
                          </div>
                        );
                      default:
                        return "Unknown stepIndex";
                    }
                  })()}
                  <div style={{ marginTop: "2%" }}>
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
      </Content>
  );
}
