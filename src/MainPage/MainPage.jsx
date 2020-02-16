import React from 'react';
import AppBar from '../Components/AppBar';
import SideMenu from '../Components/SideMenu';
import Logo from '../Images/Maristas.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    image:{
        margin:"auto",
        float:"right",
        paddingBottom:"5vh",
        [theme.breakpoints.down(900)]:{
            width:"40%",
        },
    }
}));

export default function Main(){
    const classes =useStyles();
    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column",flexWrap:"nowrap"}}>
            <AppBar nombre="Home"/>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%",height:"100%"}}>
            <SideMenu />
            <img src={Logo} alt="" width="30%" className={classes.image}/>
            </div>
        </div>
    );
}