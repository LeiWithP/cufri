import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Card, Typography, CardContent, TextField } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {addFichaAction} from '../../store/actions/Ficha'

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
    [theme.breakpoints.down(850)]: {
      width: "100%"
    }
  }
}));

function Fichaidentificacion({ addFicha }) {
  const classes = useStyles();
  const history = useHistory();
  /*
   * State donde se guardan todos los valores de los campos
   */
  const [values, setValues] = React.useState({
    nombre: "",
    calle: "",
    apaterno: "",
    amaterno: "",
    edad: 0,
    sexo: "",
    curp: "",
    nacionalidad: "",
    ocupacion: "",
    religion: "",
    colonia: "",
    numeroExterior: 0,
    codigopostal: "",
    municipio: "",
    telefono: "",
    estado: "",
    celularP: "",
    correo: "",
    nfamiliar: "",
    celularF: ""
  });
  /**
   *
   * @param {nombre de la vvariable a la que se le va a asignar el valor del campo} prop
   * funcion para guardar los valores en el state
   */
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = () => {
    addFicha(values);
    history.push("/Patients/Antecedentes familiares");
  };
  return (
    <Content nombre="Pacientes" select="fidentificacion">
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
              id="formulario"
              onSubmit={handleSubmit}
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
                  error={
                    /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/.test(
                      values.nombre
                    )
                      ? false
                      : true
                  }
                  variant="filled"
                  required
                  label="Nombre(s)"
                  helperText={
                    /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/.test(
                      values.nombre
                    )
                      ? "Ingrese nombre del paciente"
                      : "No debe contener caracteres especiales"
                  }
                  onChange={handleChange("nombre")}
                  style={{ marginTop: "4%" }}
                />
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    required
                    label="Apellido paterno"
                    error={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.apaterno
                      )
                        ? false
                        : true
                    }
                    helperText={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.apaterno
                      )
                        ? "Ingresa Apellido paterno"
                        : "Ingresa un apellido valido"
                    }
                    onChange={handleChange("apaterno")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Apellido materno"
                    error={
                      (/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.amaterno
                      )
                        ? false
                        : true) && values.amaterno !== ""
                    }
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
                    required
                    inputProps={{ min: 1 }}
                    error={values.edad === 0}
                    style={{ width: "30%" }}
                    helperText={
                      values.edad === 0
                        ? "Este campo es requerido"
                        : "Ingrese la edad del paciente"
                    }
                    onChange={handleChange("edad")}
                  />
                  <FormControl
                    variant="filled"
                    className={classes.formControl}
                    style={{ width: "68%" }}
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
                  error={
                    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
                      values.curp
                    )
                      ? false
                      : true
                  }
                  required
                  helperText={
                    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
                      values.curp
                    )
                      ? "Ingrese la CURP de paciente"
                      : "Ingrese una curp valida"
                  }
                  onChange={handleChange("curp")}
                  style={{ marginTop: "4%" }}
                />
                <TextField
                  variant="filled"
                  label="Nacionalidad"
                  required
                  error={values.nacionalidad === ""}
                  helperText={"Ingrese la nacionalidad del paciente"}
                  onChange={handleChange("nacionalidad")}
                  style={{ marginTop: "4%" }}
                />
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    required
                    error={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.ocupacion
                      )
                        ? false
                        : true
                    }
                    label="Ocupación"
                    helperText={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.ocupacion
                      )
                        ? "Ingrese la ocupación del paciente"
                        : "No puede contener caracteres especiales"
                    }
                    onChange={handleChange("ocupacion")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Religión"
                    required
                    error={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.religion
                      )
                        ? false
                        : true
                    }
                    helperText={
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                        values.religion
                      )
                        ? "Ingrese la religión del paciente"
                        : "No puede contener caracteres especiales"
                    }
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
                  error={values.calle === ""}
                  label="Calle"
                  required
                  helperText={"Ingresa la calle del paciente"}
                  onChange={handleChange("calle")}
                  style={{ marginTop: "4%" }}
                />
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    label="Colonia"
                    required
                    error={values.colonia === ""}
                    helperText={"Ingrese la colonia de paciente"}
                    onChange={handleChange("colonia")}
                    style={{ width: "68%" }}
                  />
                  <TextField
                    variant="filled"
                    label="Número exterior"
                    inputProps={{ min: 1 }}
                    required
                    error={values.numeroExterior === 0}
                    type="number"
                    helperText={"Ingrese el número exterior"}
                    onChange={handleChange("numeroExterior")}
                    style={{ width: "30%" }}
                  />
                </div>
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    label="Código Postal"
                    required
                    error={
                      /^[0-9]{5}$/.test(values.codigopostal) ? false : true
                    }
                    helperText={
                      /^[0-9]{5}$/.test(values.codigopostal)
                        ? "Ingrese el Código postal"
                        : "Ingrese codigo postal valido"
                    }
                    onChange={handleChange("codigopostal")}
                    style={{ width: "30%" }}
                  />
                  <TextField
                    variant="filled"
                    label="Municipio"
                    required
                    error={values.municipio === ""}
                    helperText={"Ingrese el municipio del paciente"}
                    onChange={handleChange("municipio")}
                    style={{ width: "68%" }}
                  />
                </div>
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    label="Estado"
                    required
                    error={values.estado === ""}
                    helperText={"Ingrese el Estado"}
                    onChange={handleChange("estado")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Teléfono casa/trabajo(Paciente)"
                    error={
                      /^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.telefono)
                        ? false
                        : true && values.telefono !== ""
                    }
                    helperText={
                     (/^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.telefono)
                     ? true
                     : false && values.telefono !== "")
                        ? "Ingrese el telefono del paciente"
                        : "Ingrese un telefono válido"
                    }
                    onChange={handleChange("telefono")}
                    className={classes.textfieldindiv}
                  />
                </div>
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    label="Celular"
                    required
                    error={
                      /^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.celularP)
                        ? false
                        : true
                    }
                    helperText={
                      /^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.celularP)
                        ? "Ingrese el celular del paciente"
                        : "Ingrese un celular valido"
                    }
                    onChange={handleChange("celularP")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Correo electrónico"
                    required
                    error={
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                        values.correo
                      )
                        ? false
                        : true
                    }
                    helperText={
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                        values.correo
                      )
                        ? "Ingrese el correo electrónico del paciente"
                        : "Ingrese un correo valido"
                    }
                    onChange={handleChange("correo")}
                    className={classes.textfieldindiv}
                  />
                </div>
                <div className={classes.multipleTextfield}>
                  <TextField
                    variant="filled"
                    error={(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                      values.nfamiliar
                    )
                      ? false
                      : true) && values.nfamiliar !== ""}
                    label="Nombre de un familiar"
                    helperText={"Ingrese el nombre de un familiar"}
                    onChange={handleChange("nfamiliar")}
                    className={classes.textfieldindiv}
                  />
                  <TextField
                    variant="filled"
                    label="Teléfono/celular (familiar)"
                    error={/^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.celularF)
                    ? false
                    : true && values.telefono !== ""}
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
          type="submit"
          disabled={
            (/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/.test(
              values.nombre
            )
              ? false
              : true) ||
            (/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
              values.apaterno
            )
              ? false
              : true) ||
            ((/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
              values.amaterno
            )
              ? false
              : true) &&
              values.amaterno !== "") ||
            values.edad === 0 ||
            values.sexo === "" ||
            (/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
              values.curp
            )
              ? false
              : true) ||
            values.nacionalidad === "" ||
            (/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
              values.ocupacion
            )
              ? false
              : true) ||
            values.calle === "" ||
            values.numeroExterior === 0 ||
            values.colonia === "" ||
            (/^[0-9]{5}$/.test(values.codigopostal) ? false : true) ||
            values.municipio === "" ||
            values.estado === "" ||
            (/^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.telefono)
              ? false
              : true && values.telefono !== "") ||
            (/^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.celularP)
              ? false
              : true) ||
            (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              values.correo
            )
              ? false
              : true)||
             ( (/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(
                values.nfamiliar
              )
                ? false
                : true) && values.nfamiliar !== "")||
            (/^(\+?)[1-9]{1}[0-9]{5,11}$/.test(values.celularF)
            ? false
            : true && values.telefono !== "")
          }
          form="formulario"
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
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addFicha: addFichaAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fichaidentificacion);