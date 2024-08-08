import React from 'react';

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "darkgray",
        color: "white",
        textAlign: "center",
        padding: "10px"
      }}>
      <img src="https://picsum.photos/50" alt="Logo" style={{ marginBottom: "5px" }} />
      <p>Telif Hakları Saklıdır</p>
    </div>
  )
}
