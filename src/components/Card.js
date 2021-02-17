import React from 'react'
import Form from "./Form"
import "./style.css"

export default function Card(props) {
    return (
        <div className="myCards">
            <h3>Name: {props.data.name}</h3>
            <Form data={props.data} onChange={props.onChange}/>
            <hr/>
        </div>
    )
}
