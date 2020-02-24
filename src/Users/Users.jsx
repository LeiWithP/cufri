import React from "react";
import AppBar from "../Components/AppBar";
import SideMenu from "../Components/SideMenu";
import Typography from "@material-ui/core/Typography";
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
  }
}));
export default function Users() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClear = e => {
    console.log(search);
    setSearch("");
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
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#FFB700",
              marginRight: "1%",
              marginTop: "3%"
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
}
