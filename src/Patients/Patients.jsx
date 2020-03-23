import React from 'react';
import Content from '../Components/Content';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import {useHistory} from 'react-router-dom';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    alignSelf: "center"
  },
  container: {
    maxHeight: 587
  },
  title: {
    flexGrow: 1
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center"
  }
}));

const columns = [
  {
    id: "Nombre",
    label: "Nombre",
    minWidth: 170,
    align: "left"
  },
  { id: "Sexo", label: "Sexo", minWidth: 170, align: "left" },
  {
    id: "Edad",
    label: "Edad",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "Teléfono",
    label: "Teléfono",
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
 const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13]

export default function Pacientes(){
  const classes =useStyles();
  const history = useHistory();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClear = e => {
    console.log(search);
    setSearch("");
  };
  return(
    <Content nombre="Pacientes" select="pacientes">
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell>Gustavo García Sánchez</TableCell>
                        <TableCell>Masculino</TableCell>
                        <TableCell>22 años</TableCell>
                        <TableCell>443-166-3698</TableCell>
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
          onClick={()=>{
            history.push("/Patients/Ficha de identificacion")
          }}
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            marginRight: "1%",
            marginBottom: "1%",
            position: "absolute",
            bottom: 0
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </Content>
  );
}