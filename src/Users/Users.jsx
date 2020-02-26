import React from "react";
import AppBar from "../Components/AppBar";
import SideMenu from "../Components/SideMenu";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";

const columns = [
  {
    id: "Nombre de Usuario",
    label: "Nombre de  Usuario",
    minWidth: 170,
    align: "left"
  },
  { id: "Nombre", label: "Nombre", minWidth: 170, align: "left" },
  {
    id: "Rango",
    label: "Rango",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "Acciones",
    label: "Acciones",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  }
  
];

function createData(Nombre_de_Usiario, Nombre, Rango, Acciones) {
  return { Nombre_de_Usiario, Nombre, Rango, Acciones };
}

const rows = [
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698"),
  createData("Gustavo García Sánchez", "Masculino", "22 años", "443-166-3698")
];
const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    alignSelf: "center"
  },
  container: {
    maxHeight: 587
  },
  title: {
    flexGrow: 1
  },
  formulario:{
    display:"flex",
    flexDirection:"column",
    alignSelf: "center",
}
}));
export default function Users() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    nombre_usuario:"",
    nombre: "",
    apaterno: "",
    amaterno: "",
    sexo: "",
    password: "",
    rango:"",
    showPassword: false
  });
  const [pw1, setPw1] = React.useState();
  const [pw2, setPw2] = React.useState();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClose = e =>{
    setOpen(false);
  }
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClear = e => {
    console.log(search);
    setSearch("");
  };
  const handleSubmit = e =>{
    setOpen(false);
    console.log(values)
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap"
      }}
    >
      <AppBar nombre="Usuarios" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%"
        }}
      >
        <SideMenu select="usuarios" />
        <div
          style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
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
                Usuarios
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell>Médico_01</TableCell>
                          <TableCell>Gustavo García Sánchez</TableCell>
                          <TableCell>Médico</TableCell>
                          <TableCell>
                            <IconButton
                              color="inherit"
                              aria-label="edit"
                              style={{ padding: 0, marginRight: "13%" }}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              color="inherit"
                              aria-label="edit"
                              style={{ padding: 0, marginRight: "13%" }}
                            >
                              <DeleteForeverIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 5, { label: "All", value: -1 }]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleOpen}
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#FFB700",
              marginRight: "1%",
              marginTop: "3%"
            }}
          >
            <AddIcon />
          </Fab>
          {/**
           * Dialog de registro
           */}
          <Dialog open={open}>
            <DialogContent>
              <DialogTitle>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "larger",
                    textAlign: "center"
                  }}
                >
                  Registro
                </Typography>
              </DialogTitle>
              <Typography
                style={{
                  fontSize: "large",
                  textAlign: "center",
                  marginBottom: "4vh"
                }}
              >
                Complete el formulario para registrar
              </Typography>
              <form
                className={classes.formulario}
                onSubmit={handleSubmit}
                id="formulario"
              >
                <div>
                <TextField
                    label="Nombre de Usuario"
                    helperText="Ingresa Nombre de Usuario"
                    variant="filled"
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      marginBottom: "2%"
                    }}
                    onChange={handleChange("nombre_usuario")}
                  />
                  <TextField
                    label="Nombre(s)"
                    helperText="Ingresa Nombre(s)"
                    variant="filled"
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      marginBottom: "2%"
                    }}
                    onChange={handleChange("nombre")}
                  />
                </div>
                <div style={{display:"flex"}}>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "2%"
                  }}
                >
                  <TextField
                    label="Apellido paterno"
                    helperText="Ingresa Apellido paterno"
                    variant="filled"
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      marginBottom: "2%"
                    }}
                    onChange={handleChange("apaterno")}
                  />
                  <FormControl
                    variant="filled"
                    className={classes.formControl}
                    style={{ marginBottom: "2%" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Sexo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={values.sexo}
                      onChange={handleChange("sexo")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hombre"}>
                        Hombre
                      </MenuItem>
                      <MenuItem value={"Mujer"}>Mujer</MenuItem>
                    </Select>
                    <FormHelperText id="standard-weight-helper-text">
                      Seleccione su sexo
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="filled"
                  >
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={e => setPw1(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="standard-weight-helper-text">
                      Ingresa la contraseña
                    </FormHelperText>
                  </FormControl>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                 <TextField
                    label="Apellido materno"
                    helperText="Ingresa Apellido materno"
                    variant="filled"
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      marginBottom: "2%"
                    }}
                    onChange={handleChange("amaterno")}
                  />
                  <FormControl
                    variant="filled"
                    className={classes.formControl}
                    style={{ marginBottom: "2%" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Rango
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={values.rango}
                      onChange={handleChange("rango")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Médico"}>
                        Médico
                      </MenuItem>
                      <MenuItem value={"Fisioterapeuta"}>
                        Fisioterapeuta
                      </MenuItem>
                      <MenuItem value={"Pasante"}>
                        Pasante
                      </MenuItem>
                      <MenuItem value={"Practicante"}>Paracticante</MenuItem>
                    </Select>
                    <FormHelperText id="standard-weight-helper-text">
                      Seleccione Rango
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="filled"
                  >
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={e => setPw2(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="standard-weight-helper-text">
                      Comprueba la contraseña
                    </FormHelperText>
                  </FormControl>
                </div>
                </div>
              </form>
              <div style={{display:"flex",justifyContent:"flex-end"}}>
              <Button
                      onClick={handleClose}
                      style={{ color: "#0071CE",alignSelf:"flex-end" }}
                    >
                     Regrasar
                    </Button>
              <Button
                variant="contained"
                form="formulario"
                type="submit"
                style={{
                  backgroundColor: "#FFC107",
                  color: "white",
                  marginTop: "1vh",
                  alignSelf: "center"
                }}
              >
                Registrar
              </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
