import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));
export default function ButtonAppBar(props) {
  const [open,setOpen] = useState(true);
  const classes = useStyles();
  const handleOpen= e=> {
    e.preventDefault();
    setOpen(true);
    console.log(open);
  }
  const handleClose= e=> {
    e.preventDefault();
    setOpen(false);
    console.log(open);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#0071CE"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={open===true ? handleClose:handleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.nombre}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
