import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, TextField,Slider} from "@material-ui/core";


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

  export default function EVAcard(props){
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
        setValues({ ...values,[props.title]:{...values[props.title],[prop]: e.target.value}});
        console.log(values[props.title]);
      };
      const handleChangeEva=(event,val)=>{
          setValues({ ...values,[props.title]:{...values[props.title],EVA:val}})
      }
      return(
          <Card className={classes.Card}> 
            <Typography className={classes.title}>{props.title}</Typography>
            <TextField 
              variant="filled"
              label={"Padecimiento actual-Inicio"}
              multiline
              rows="6"
              onChange={handleChange("details")}
              helperText={"Escribe los detalles"}
              style={{ width: "97%",marginTop:"2%" }}/>
              <Typography style={{fontWeight:"normal"}} className={classes.title}>Escala visual analógica-EVA</Typography>
              <Slider style={{width:"97%"}} value={values[props.title].EVA} onChange={handleChangeEva} aria-labelledby="continuous-slider"/>
          </Card>
      )
  }