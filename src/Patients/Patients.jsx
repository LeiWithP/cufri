import React from 'react';
import AppBar from '../Components/AppBar';
import SideMenu from '../Components/SideMenu';

export default function Patients(){
    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column",flexWrap:"nowrap"}}>
            <AppBar nombre="Pacientes"/>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%",height:"100%"}}>
            <SideMenu select="pacientes" />
            <div style={{width:"100%",backgroundColor:"#F4F4F4",display:"flex",flexDirection:"column",justifyContent:"center" }}>
                
            </div>
            </div>
        </div>
    );
}