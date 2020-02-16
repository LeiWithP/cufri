import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme=>({
    list: {
      width: 250,
      height:"100%",
      boxShadow:"2px 0 5px -2px #888;",
      overflow:"hidden",
      zIndex:"1",
      [theme.breakpoints.down(750)]:{
          transition:"0.7s",
          width:"0px",   
      }
      
    },
    fullList: {
      width: 'auto',
    },
  }));

export default function SideMenu(props){
    const classes =useStyles();
    const history=useHistory();
    return(
        <div
        className={classes.list}
        role="presentation"
        >
            <Typography style={{fontSize:"larger",fontWeight:"bold",marginTop:"1vh",marginLeft:"6%"}}>
                Nombre del Usuario
            </Typography>
            <Typography color="textSecondary" style={{fontSize:"medium",fontWeight:"400px",marginTop:".5vh",marginLeft:"6%"}}>
                Tipo de usuraio
            </Typography>
            <Divider />
            <List style={{fontWeight:"bold"}}>
                <ListItem button key="Citas" >
                    <ListItemIcon><DateRangeIcon/></ListItemIcon>
                    <ListItemText primary="Citas" />
                </ListItem>
                <ListItem button key="Pacientes" >
                    <ListItemIcon><PeopleAltIcon/></ListItemIcon>
                    <ListItemText primary="Pacientes" />
                </ListItem>
                <ListItem button key="Usuarios" >
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
                <ListItem button key="Estadísticas" >
                    <ListItemIcon><ShowChartIcon/></ListItemIcon>
                    <ListItemText primary="Estadisticas" />
                </ListItem>
                <ListItem button key="Cerrar Sesión" onClick={e => history.push("/ ") }>
                    <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
            </List>
         </div>
    );
}