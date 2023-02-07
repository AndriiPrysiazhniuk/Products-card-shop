import React from 'react';

type PropsButtonType ={
    callback:()=>{}
}

const Button = (props:PropsButtonType) => {
    return (
        <div>
            <Button callback={props.callback}/>
        </div>
    );
};

export default Button;