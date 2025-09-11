import React from 'react'
import { NavLink,  Outlet } from 'react-router-dom'

export default function Header1() {
    
  return (
    <div>

         <nav style={{ background : "#007BFF", display: "flex" , alignItems:"center" ,  justifyContent: "space-around" , height: "50px"   }}>

          <NavLink style={{fontSize:"20px", color:"white" , textDecoration: "none"}} to={"home"}>Home</NavLink>
          <NavLink style={{fontSize:"20px", color:"white " , textDecoration: "none"}} to={"about"}>About</NavLink>
          <NavLink style={{fontSize:"20px",color:"white" , textDecoration: "none"}} to={"contact"}>Contact</NavLink>

        </nav>

        <Outlet/>
    </div>
  )
}
