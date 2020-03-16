import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/Content";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    height: "85%",
    alignSelf: "center",
    marginTop: "2vh"
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "larger",
    marginTop: "3vh"
  },
  multipleTextfield: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "4%"
  },
  textfieldindiv: {
    width: "48%",
    [theme.breakpoints.down(850)]:{
      width:"100%"
    }
  },
}));

export default function Fichaidentificacion() {
  const classes = useStyles();
  /*
  * State donde se guardan todos los valores de los campos
  */
  const [values, setValues] = React.useState({
    nombre: "",
    calle: "",
    apaterno: "",
    amaterno: "",
    edad:0,
    sexo:"",
    curp:"",
    nacionalidad:"",
    ocupacion:"",
    religion:"",
    colonia:"",
    numeroExterior:"",
    codigopostal:0,
    municipio:"",
    telefono:"",
    estado:"",
    celularP:"",
    correo:"",
    nfamiliar:"",
    celularF:""
  });
  /**
   * 
   * @param {nombre de la vvariable a la que se le va a asignar el valor del campo} prop 
   * funcion para guardar los valores en el state
   */
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Content nombre="Pacientes" select="pacientes">
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography className={classes.title}>
          Ficha de identificación
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <form
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              {/**
               * Izquierda
               */}
              <div
                style={{
                  width: "48%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <TextField
                  variant="filled"
                  label="Nombre(s)"
                  helperText={"Ingrese nombre del paciente"}
                  onChange={handleChange("name")}
                  style={{marginTop:"4%"}}
                />
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    label="Apellido paterno"
                    helperText={"Ingrese el apellido paterno"}
                    onChange={handleChange("apaterno")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Apellido materno"
                    helperText={"Ingrese el apellido materno"}
                    onChange={handleChange("amaterno")}
                    className={classes.textfieldindiv}
                  />
                </div>
                <div className={classes.multipleTextfield}>
                <TextField
                    variant="filled"
                    label="Edad"
                    type="number"
                    style={{width:"30%"}}
                    helperText={"Ingrese la edad del paciente"}
                    onChange={handleChange("edad")}
                  />
                  <FormControl
                    variant="filled"
                    className={classes.formControl}
                    style={{width:"68%" }}
                  >
                    <InputLabel
                      id="demo-simple-select-filled-label"
                      error={values.sexo === ""}
                    >
                      Sexo
                    </InputLabel>
                    <Select
                      required
                      error={values.sexo === ""}
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={values.sexo}
                      onChange={handleChange("sexo")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hombre"}>Hombre</MenuItem>
                      <MenuItem value={"Mujer"}>Mujer</MenuItem>
                    </Select>
                    <FormHelperText
                      id="standard-weight-helper-text"
                      error={values.sexo === ""}
                    >
                      {values.sexo === ""
                        ? "Campo requerido seleccione una de las opciones"
                        : "seleccione su Sexo"}
                    </FormHelperText>
                  </FormControl>
                </div>
                <TextField
                  variant="filled"
                  label="CURP"
                  helperText={"Ingrese la CURP de paciente"}
                  onChange={handleChange("curp")}
                  style={{marginTop:"4%"}}
                />
                 <TextField
                  variant="filled"
                  label="Nacionalidad"
                  helperText={"Ingrese la nacionalidad de paciente"}
                  onChange={handleChange("nacionalidad")}
                  style={{marginTop:"4%"}}
                />
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Ocupación"
                  helperText={"Ingrese la ocupación del paciente"}
                  onChange={handleChange("ocupacion")}
                  className={classes.textfieldindiv}
                />
                 <TextField
                  variant="filled"
                  label="Religión"
                  helperText={"Ingrese la religión del paciente"}
                  onChange={handleChange("religion")}
                  className={classes.textfieldindiv}
                />
                </div>
              </div>
              {/**
               * derecha
               */}
              <div
                style={{
                  width: "48%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <TextField
                  variant="filled"
                  label="Calle"
                  helperText={"Ingresa la calle del paciente"}
                  onChange={handleChange("calle")}
                  style={{marginTop:"4%"}}
                />
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Colonia"
                  helperText={"Ingrese la colonia de paciente"}
                  onChange={handleChange("colonia")}
                  style={{width:"68%" }}
                />
                 <TextField
                  variant="filled"
                  label="Número exterior"
                  type="number"
                  helperText={"Ingrese el número exterior"}
                  onChange={handleChange("numeroExterior")}
                  style={{width:"30%" }}
                />
                </div>
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Código Postal"
                  type="number"
                  helperText={"Ingrese el Código postal"}
                  onChange={handleChange("codigopostal")}
                  style={{width:"30%" }}
                />
                 <TextField
                  variant="filled"
                  label="Municipio"
                  helperText={"Ingrese el municipio del paciente"}
                  onChange={handleChange("municipio")}
                  style={{width:"68%" }}
                />
                </div>
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Estado"
                  helperText={"Ingrese el Estado"}
                  onChange={handleChange("estado")}
                  className={classes.textfieldindiv}
                />
                 <TextField
                  variant="filled"
                  label="Teléfono casa/trabajo(Paciente)"
                  helperText={"Ingrese el telefono del paciente"}
                  onChange={handleChange("telefono")}
                  className={classes.textfieldindiv}
                />
                </div>
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Celular"
                  helperText={"Ingrese el celular del paciente"}
                  onChange={handleChange("celularP")}
                  className={classes.textfieldindiv}
                />
                 <TextField
                  variant="filled"
                  label="Correo electrónico"
                  helperText={"Ingrese el correo electrónico del paciente"}
                  onChange={handleChange("correo")}
                  className={classes.textfieldindiv}
                />
                </div>
                <div className={classes.multipleTextfield}>
                <TextField
                  variant="filled"
                  label="Nombre de un familiar"
                  helperText={"Ingrese el nombre de un familiar"}
                  onChange={handleChange("nfamiliar")}
                  className={classes.textfieldindiv}
                />
                 <TextField
                  variant="filled"
                  label="Teléfono/celular (familiar)"
                  helperText={"Ingrese el teléfono o celular del familiar"}
                  onChange={handleChange("celularF")}
                  className={classes.textfieldindiv}
                />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Fab
          color="primary"
          aria-label="next"
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            position: "absolute",
            bottom:10,
            right:10
          }}
        >
          <NavigateNextIcon/>
        </Fab>
      </div>
    </Content>
  );
}
