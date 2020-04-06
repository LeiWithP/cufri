import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography, Card, TextField, Button } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
}));

export default function Valnotes() {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({});
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
        <Typography className={classes.title}>
          Dermatomas, mitomas y pares craneales
        </Typography>
        <Card className={classes.Card}>
          <div className={classes.content}>
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
                  "aria-label": "change date",
                }}
                style={{
                  marginLeft: "6%",
                  marginBottom: "6%",
                  alignSelf: "center",
                  width: "100%",
                }}
                disablePast="true"
              />
            </MuiPickersUtilsProvider>
          </div>
        </Card>
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
