import React from 'react'

const style = {
    backGround:'lightblue',
    border: '2px solid black',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = (props) => {
    return(

        <button style={style} 
        onClick = {props.onClick}>
        {props.value}
        </button>
    )
}

export default Square;