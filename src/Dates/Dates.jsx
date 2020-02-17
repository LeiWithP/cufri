import React from 'react';
import AppBar from '../Components/AppBar';
import SideMenu from '../Components/SideMenu';

export default function Dates(){
    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column",flexWrap:"nowrap"}}>
            <AppBar nombre="Citas"/>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%",height:"100%"}}>
            <SideMenu select="citas" />
            </div>
        </div>
    );
}