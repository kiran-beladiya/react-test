import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button type="button" className={props.btnClass} onClick={props.clicked}>{props.btnTitle}</button>
        </div>
    );
};

export default Button;