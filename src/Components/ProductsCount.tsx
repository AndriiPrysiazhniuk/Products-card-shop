import React, {useState} from 'react';
import {Button} from '@mui/material';

const ProductsCount = () => {
    const [value, setValue] = useState(0)

    const incrementValue = () => {
        if (value !==10) {
            setValue(value + 1)
        }
    }
    const decrementValue = () => {
        if (value !== 0) {
            setValue(value - 1)
        }
    }
    return (
        <div>
            <Button size={'small'}
                    variant={'contained'}
                    type={'button'}
                    onClick={decrementValue}>-</Button>
            <span> {value} </span>
            <Button size={'small'}
                    variant='contained'
                    type={'button'}
                    onClick={incrementValue}>+</Button>
        </div>
    );
};

export default ProductsCount;