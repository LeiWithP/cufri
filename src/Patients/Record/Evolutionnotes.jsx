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
import Evolnote from '../../Components/Evolnote';
import { useHistory, useParams  } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";


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
    height: "fit-content",
    overflow: "initial",
  },
  content: {
    width: "97%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    marginTop: "2%",
    marginBottom: "2%",
  },
}));

const data =[
    {
        fecha:"06/04/2020",
        nota:"Hay un gran avance",
    },
    {
        fecha:"07/04/2020",
        nota:"Hay un gran avance",
    }
]

function Valnotes({ficha,ahf}) {
  const classes = useStyles();
  const history = useHistory();
  const {id} = useParams();
  const [values, setValues] = React.useState({
    fecha: new Date(),
    Nevolucion: "",
  });
  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };
  const handleNext = () => {
    history.push("#");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  useEffect(()=>{
    console.log({ahf,ficha});
  })
  return (
    <Content nombre="Pacientes" select="nevol">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Typography className={classes.title}>Notas de Evolución</Typography>
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
                style={{ margin: "initial",width:"150px" }}
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
              variant="filled"
              label="Nota de evolución"
              multiline
              rows="12"
              onChange={handleChange("Nevolucion")}
              style={{ width: "100%",marginTop:"2%" }}
              helperText={"Escribir detalles"}
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
            Agregar nota de evolución
          </Button>
        </Card>
        <Typography className={classes.title}>Notas de evolución anotadas</Typography>
        {data.map(datos=>(
            <Evolnote data={datos}/>
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
const mapStateToProps = state => ({ ficha: state.Ficha.ficha,ahf:state.AHeredofamiliares });
const mapDispatchToProps = state => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Valnotes);
