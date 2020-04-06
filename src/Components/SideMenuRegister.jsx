import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    list: {
      width: 250,
      height:"100%",
      boxShadow:"2px 0 5px -2px #888;",
      overflow:"hidden",
      zIndex:"1", 
    },
    menuHide:{
        transition:"0.7s",
        width:"0px", 
    },
    fullList: {
      width: 'auto',
    },
  }));

  export default function SideMenuRegister(props){
    const classes =useStyles();
    const history=useHistory();
    return(
        <div
        className={`${classes.list} ${props.visible ? '':classes.menuHide}`}
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
                <ListItem button key="Ficha de identificación" style={props.select==="fidentificacion"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=> (props.edit||props.view)? history.push("/Patients/Ficha de identificacion"):history.push("#")}>
                    <ListItemText primary="Ficha de Identificación" />
                </ListItem>
                <ListItem button key="Antecedentes Heredo Familiares" style={props.select==="afamiliares"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=> (props.edit||props.view)? history.push("/Patients/Antecedentes familiares"):history.push("#")} >
                    <ListItemText primary="Antecedentes Heredo Familiares" />
                </ListItem>
                <ListItem button key="Antecedentes no ptológicos" style={props.select==="antnopatologicos"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=> (props.edit||props.view)?history.push("/Patients/Antecedentes no patologicos"):history.push("#")} >
                    <ListItemText primary="Antecedentes no patológicos" />
                </ListItem>
                <ListItem button key="Antecedentes Patológicos" style={props.select==="apatologicos"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)? history.push("/Patients/Antecedentes patologicos"):history.push("#")}>
                    <ListItemText primary="Atecedentes Patológicos" />
                </ListItem>
                <ListItem button key="Antecedentes Gineco-obstétricos" style={props.select==="agineco"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)? history.push("/Patients/Antecedentes Gineco-obstetricos"):history.push("#")}>
                    <ListItemText primary="Antecendetes Gineco-obstétricos" />
                </ListItem>
                <ListItem button key="Padecimientos" style={props.select==="padecimientos"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Aspectos generales"):history.push("#")}>
                    <ListItemText primary="Padecimientos" />
                </ListItem>
                <ListItem button key="Exploración física" style={props.select==="efisica"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Examen físico"):history.push("#")}>
                    <ListItemText primary="Exploración Física" />
                </ListItem>
                <ListItem button key="Postura" style={props.select==="postura"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Postura"):history.push("#")}>
                    <ListItemText primary="Postura" />
                </ListItem>
                <ListItem button key="Dermatomas,mitomas y pares craneales" style={props.select==="dermatomas"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Dermatomas mitomas y pares craneales"):history.push("#")}>
                    <ListItemText primary="Dermatomas, mitomas y pares craneales" />
                </ListItem>
                <ListItem button key="Diagnóstico y plan fisioterapéutico" style={props.select==="diagnostico"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Diagnóstico y plan fisioterapéutico"):history.push("#")}>
                    <ListItemText primary="Diagnóstico y plan fisioterapéutico" />
                </ListItem>
                <ListItem button key="Mapa del dolor" style={props.select==="mapadolor"? {backgroundColor:"#61B4E4",color:"white"}:{}} onClick={()=>(props.edit||props.view)?history.push("/Patients/Mapa del dolor"):history.push("#")}>
                    <ListItemText primary="Mapa del dolor" />
                </ListItem>
                <ListItem button key="Cancelar" onClick={e => history.push("/Patients") }>
                    <ListItemText primary="Cancelar" />
                </ListItem>
            </List>
         </div>
    );
}