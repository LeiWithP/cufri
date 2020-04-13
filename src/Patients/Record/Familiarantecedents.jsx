import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../../Components/ContentExp";
import { Typography } from "@material-ui/core";
import Cardexp from "../../Components/Cardrecord";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: "larger",
    marginTop: "3vh",
  },
  container: {
    display: "flex",
    width: "94%",
    height: "100%",
    overflowY: "scroll",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
}));

const Padecimientos = [
  "Enfermedades Reumatológicas",
  "Enfermedades del sistema nervioso",
  "Síndrome",
  "Malformaciones",
  "Congénitas",
  "Diabetes",
  "Hipertención arterial sistémica",
  "Cáncer",
  "Cardiopatías",
  "Vasculares",
  "Pulmonares",
  "Heptopatias",
  "Nefropatias",
  "Digestivos",
  "Endocrinopatias",
  "Transtornos Hematológicos",
  "Dislipidemias",
  "Otras",
];

export default function Antecedentes() {
  /*useEffect(() => {
    async function fetchData() {
      const formData = new FormData();
      formData.append("id", id);
      const response = await fetch(urlBack + "pac_ant_her_fam.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((posts) => {
          console.log(Object.values(posts));
          setDatos(Object.values(posts));
        });
    }

    if (id) {
      fetchData();
    }
  }, []);
*/
  const [datos, setDatos] = React.useState([]);
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const handleNext = () => {
    history.push("/Patients/Antecedentes no patologicos");
  };
  return (
    <Content
      nombre="Pacientes"
      edit={id ? true : false}
      id={id}
      select="afamiliares"
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography className={classes.title}>
          Antecedentes Heredo Familiares
        </Typography>
        <div className={classes.container}>
          {Padecimientos.map((padecimiento) => (
            <Cardexp name={padecimiento} key={padecimiento} id={id} />
          ))}
        </div>
        <Fab
          color="primary"
          aria-label="next"
          onClick={handleNext}
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#FFB700",
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <NavigateNextIcon />
        </Fab>
      </div>
    </Content>
  );
}
