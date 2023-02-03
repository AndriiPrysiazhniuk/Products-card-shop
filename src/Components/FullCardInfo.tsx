import React from 'react';
import {Icon} from '@mui/material';
import {HighlightOff} from '@mui/icons-material';

type propsType = {
    img: string
};

export const FullCardInfo = (props: propsType) => {
    return (
        <div>
            <div>
                <Icon style={{display: 'inline-block'}}>
                    <HighlightOff/>
                </Icon>
                <h1>Full card info</h1>
            </div>


            <img src={props.img} style={{maxWidth: '300px', maxHeight: '200px'}} alt="img"/>
            <div>
                <h4>some info about produt</h4>
                <p>info text info text info text info text info text info text info text info text info text info
                    text </p>
            </div>
        </div>
    );
}
