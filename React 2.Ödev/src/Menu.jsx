import React from 'react'

export default function Menu(props) {
    return (
        <ul style={{ listStyleType: "none", padding: 0, backgroundColor: "black", color: "white" }}>
            {props.items.map((item, index) => (
                <li key={index}
                    style={{ padding: "10px", borderBottom: "1px solid white" }}>
                    {item}
                </li>
            ))}
        </ul>
    )
}
