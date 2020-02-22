import React from 'react';
import AppBar from '../Components/AppBar';
import SideMenu from '../Components/SideMenu';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
    { id: 'Nombre', label: 'Nombre', minWidth: 170,align: 'left' },
    { id: 'Sexo', label: 'Sexo', minWidth: 170 ,align: 'left'},
    {
      id: 'Edad',
      label: 'Edad',
      minWidth: 170,
      align: 'left',
      format: value => value.toLocaleString(),
    },
    {
      id: 'Telefono',
      label: 'Telefono',
      minWidth: 170,
      align: 'left',
      format: value => value.toLocaleString(),
    },
    {
        id: 'Hora',
        label: 'Hora',
        minWidth: 170,
        align: 'left',
        format: value => value.toLocaleString(),
      },
      {
        id: 'Acción',
        label: 'Acción',
        minWidth: 170,
        align: 'left',
        format: value => value.toLocaleString(),
      },
   
  ];
  
  function createData(Nombre, Sexo, Edad, Telefono, Hora, Accion) {
    return {Nombre, Sexo, Edad, Telefono, Hora, Accion};
  }
  
  const rows = [
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
    createData("Gustavo García Sánchez", 'Masculino', '22 años', '443-166-3698',"10:00-11:00",<IconButton color="inherit" aria-label="edit" ><EditIcon/></IconButton>),
  ];
  const useStyles = makeStyles(theme =>({
    root: {
      width: '97%',
      alignSelf:"center",
    },
    container: {
      maxHeight: 587,
      minHeight: 587,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default function Dates(){
    const classes= useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
    const handleDateChange = date => {
      setSelectedDate(date);
    };
    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column",flexWrap:"nowrap"}}>
            <AppBar nombre="Citas"/>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%",height:"100%"}}>
            <SideMenu select="citas" />
            <div style={{width:"100%",backgroundColor:"#F4F4F4",display:"flex",flexDirection:"column" }}>
                <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
                    <Typography style={{fontSize:"25px",fontWeight:"bolder",fontFamily:"Roboto",margin:"3%"}}>
                        Citas Agendadas
                    </Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Fecha"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{
                            marginRight:"3%",
                            alignSelf:"center"
                        }}
                        disablePast="true"
                    />
                    </MuiPickersUtilsProvider>
                </div>
                <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontWeight: 'bold'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>Gustavo García Sanchez</TableCell>
                  <TableCell>Masculino</TableCell>
                  <TableCell>22 años</TableCell>
                  <TableCell>443-166-3698</TableCell>
                  <TableCell>10:00-11:00</TableCell>
                  <TableCell>
                    <IconButton color="inherit" aria-label="edit" style={{padding:0,marginRight:"10%"}} >
                      <CheckCircleRoundedIcon/>
                    </IconButton>
                    <IconButton color="inherit" aria-label="edit" style={{padding:0,marginRight:"10%"}} >
                      <EditIcon/>
                    </IconButton>
                    <IconButton color="inherit" aria-label="edit" style={{padding:0,marginRight:"10%"}} >
                      <CancelRoundedIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
         rowsPerPageOptions={[10,5,  { label: 'All', value: -1 }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    <Fab color="primary" aria-label="add" style={{alignSelf:"flex-end",backgroundColor:"#FFB700",marginRight:"1%",marginTop:"3%"}} >
        <AddIcon />
    </Fab>
                </div>
            </div>
        </div>
    );
}