import React, {useState} from 'react';
import {Button, Icon} from '@mui/material';
import {AddCircleOutlined, AddShoppingCart, RemoveCircle} from '@mui/icons-material';

const ProductsCount = () => {
    const [value, setValue] = useState(0)

    const incrementValue = () => {
        if (value !== 10) {
            setValue(value + 1)
        }
    }
    const decrementValue = () => {
        if (value !== 0) {
            setValue(value - 1)
        }
    }
    return (
        <div style={{paddingBottom: '15px', justifyContent: 'Center', display: 'flex', alignItems: 'center'}}>

            <Icon onClick={decrementValue}
                  fontSize={'medium'}
                  color={'primary'}>
                <RemoveCircle style={{cursor: 'pointer'}}/>
            </Icon>
            <span> {value} </span>
            <Icon onClick={incrementValue}
                  fontSize={'medium'}
                  color={'primary'}>
                <AddCircleOutlined style={{cursor: 'pointer'}}/>
            </Icon>

            <Button>
                <Icon color={'primary'}>
                    <AddShoppingCart/>
                </Icon>
            </Button>

        </div>
    );
};

export default ProductsCount;