import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import clsx from "clsx";
import Logo from "../Images/logoOffGrandeBlanco.png";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: "auto",
    float: "inherit",
    width: "32% !important",
    marginTop: "6vh",
    [theme.breakpoints.down(990)]: {
      width: "60% !important"
    },
    [theme.breakpoints.between(1000, 1300)]: {
      width: "52% !important"
    }
  },
  margin: {
    margin: "auto",
    width: "100%",
    marginTop: "4%"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  image: {
    margin: "auto",
    float: "inherit",
    marginTop: "10vh",
    [theme.breakpoints.down(900)]: {
      width: "60% !important"
    },
    [theme.breakpoints.between(901, 1300)]: {
      width: "40% !important"
    }
  }
}));
export default function Login() {
  const [values, setValues] = useState({
    password: "",
    username: "",
    showPassword: false
  });
  const history = useHistory();
  const classes = useStyles();
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();
    history.push("/Home");
    console.log(values);
  };
  return (
    <div
      style={{
        height: "100vh",
        margin: "auto",
        float: "inherit",
        backgroundColor: "#003764",
        display: "block",
        textAlign: "center"
      }}
    >
      <img src={Logo} alt="logo" width="20% " className={classes.image} />
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom style={{ textAlign: "center" }}>
            ¡Bienvenido al sistema "CUFRI"! <br />A continuación ingrese su
            usuario y contraseña para poder ingresar
          </Typography>
          <form
            style={{
              width: "70%",
              margin: "auto",
              float: "inherit",
              marginTop: "5%"
            }}
            onSubmit={handleSubmit}
            id="login"
          >
            <TextField
              style={{ margin: "auto", width: "100%" }}
              id="filled-helperText"
              label="Username"
              helperText={"Ingresa el username"}
              variant="filled"
              required
              onChange={handleChange("username")}
              error={values.username===''}
            />
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password"  error={values.password===''}>
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                required={true}
                error={values.password===''}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="standard-weight-helper-text" error={values.password===''}>
                Ingresa la contraseña
              </FormHelperText>
            </FormControl>
          </form>
          <Button
            type="submit"
            form="login"
            variant="contained"
            style={{
              backgroundColor: "#FFB700",
              color: "white",
              marginTop: "3%",
              float: "right",
              padding: "2%",
              marginBottom: "3%"
            }}
          >
            Iniciar sesión
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
