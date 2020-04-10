import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, TextField} from "@material-ui/core";
import { connect } from "react-redux";
import {addMovearchAction} from '../store/actions/Movearch'

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
      overflow:"initial",
      marginBottom:"1.5%"
    },
    content: {
      width: "97%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginTop: "2%",
      marginBottom: "2%",
    },
  }));

  function Movearchcard({titulo,addMovearch}){
    const classes = useStyles();
    const [values,setValues]=React.useState({
        "Columna cervical":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Columna dorsal":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Columna lumbar":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Hombro":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Codo":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Muñeca":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Mano":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Cadera":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Rodilla":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Tobillo":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
        "Pie":{
            flexion:"",
            extensión:"",
            rinterna:"",
            rexterna:"",
            abduccion:"",
            aduccion:"",
            dradial:"",
            dcubital:""
        },
    })
    const handleChange = (prop) => (e) => {
        setValues({ ...values,[titulo]:{...values[titulo],[prop]: e.target.value}});
        console.log(values[titulo]);
      };
    useEffect(()=>{
      addMovearch(values[titulo],titulo);
    },[values])
    return(
        <Card className={classes.Card}>
        <Typography className={classes.title}>{titulo}</Typography>
          <div className={classes.content}>
          <TextField
              variant="filled"
              label="Flexión"
              onChange={handleChange("flexion")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Extensión"
              onChange={handleChange("extensión")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Rotación interna"
              onChange={handleChange("rinterna")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Rotación externa"
              onChange={handleChange("rexterna")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Abducción"
              onChange={handleChange("abduccion")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Aducción"
              onChange={handleChange("aduccion")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Desv/Radial"
              onChange={handleChange("dradial")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
            <TextField
              variant="filled"
              label="Desv/Cubital"
              onChange={handleChange("dcubital")}
              helperText="Escribe los detalles"
              style={{ width: "350px",marginBottom:"1.5%" }}
            />
          </div>
        </Card>
    );
  }
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addMovearch: addMovearchAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movearchcard);
