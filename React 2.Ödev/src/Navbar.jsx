import React from 'react';

export default function Navbar(props) {
  return (
    <nav style={{backgroundColor:"darkgray",width:"100%", display: "flex", alignItems: "center", padding: "10px"}}>
      <img src="https://picsum.photos/50" alt="Logo" style={{ marginBottom: "5px" }} />
      <h1>{props.title}</h1>
    </nav>
  )
}
