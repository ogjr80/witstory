import React from 'react'; 


const Button = ({label, size, color, onClick}) => {
    const buttonStyle = {
        padding: size === 'small' ? '5px': '10px',
        margin: '5px', 
        cursor: 'pointer', 
        backgroundColor: color === 'secondary' ? 'lightgray' : 'blue', 
        color: color === 'secondary' ? 'black': 'white', 

    }; 

    return (
        <button onClick={onclick} style={buttonStyle}>
            {label}
        </button>
    )
}

export default Button; 
