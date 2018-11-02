import React from 'react'

const Form = (props) => {
    return (
        <div>
            <p>Sort by Name</p>
            <input type="checkbox" name="name" onChange={(e) => props.handleChange(e)}></input>
            <p>Sort by Weight</p>
            <input type="checkbox" name="weight" onChange={(e) => props.handleChange(e)}></input>
            <p>Is Greased?</p>
            <input type="checkbox" name="greased" onChange={(e) => props.handleChange(e)}></input>
        </div>
    )
}

export default Form