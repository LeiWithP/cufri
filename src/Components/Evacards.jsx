import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, TextField,Slider} from "@material-ui/core";
import { connect } from "react-redux";
import {addSufferingAction} from '../store/actions/Suffering'
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
      overflowY: "visible",
      height: "fit-content",
      overflow:"initial",
      marginBottom:"1.5%"
    },
   
  }));

 function EVAcard({title,addSuffering}){
      const classes=useStyles();
      const [values,setValues] = React.useState({
          "Inicio":{
            details:"",
            EVA:0
          },
          "Evolución":{
            details:"",
            EVA:0
          },
          "Actual":{
            details:"",
            EVA:0
          }
      });
      const handleChange = (prop) => (e) => {
        setValues({ ...values,[title]:{...values[title],[prop]: e.target.value}});
        console.log(values[title]);
      };
      const handleChangeEva=(event,val)=>{
          setValues({ ...values,[title]:{...values[title],EVA:val}})
      }
      useEffect(()=>{
        addSuffering(values[title],title);
      },[values])
      return(
          <Card className={classes.Card}> 
            <Typography className={classes.title}>{title}</Typography>
            <TextField 
              variant="filled"
              label={"Padecimiento actual-Inicio"}
              multiline
              rows="6"
              onChange={handleChange("details")}
              helperText={"Escribe los detalles"}
              style={{ width: "97%",marginTop:"2%" }}/>
              <Typography style={{fontWeight:"normal"}} className={classes.title}>Escala visual analógica-EVA</Typography>
              <Slider style={{width:"97%"}} value={values[title].EVA} onChange={handleChangeEva} aria-labelledby="continuous-slider"/>
          </Card>
      )
  }
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
addSuffering: addSufferingAction(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EVAcard);