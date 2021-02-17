import React from 'react'

export default function Form(props) {
    return (
        <form>
            <label>Name: </label>
            <input onChange={props.onChange} name="name" type="text" data-id={props.data.id} value={props.data.name}/>
            <label>Role: </label>
            <input onChange={props.onChange} name="role" type="text" data-id={props.data.id} value={props.data.role}/>
            <label>Hobby: </label>
            <input onChange={props.onChange} name="hobby" type="text" data-id={props.data.id} value={props.data.hobby}/>
        </form>
    )
}
