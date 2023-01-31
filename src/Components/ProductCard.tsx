import React from 'react';
import ProductsCount from './ProductsCount';
import {Grid, Paper} from '@mui/material';

type PropsType = {
    title: string
    description: string
    unitPrice: number
    img: string
}

const ProductCard = (props: PropsType) => {
    return (
        <Grid>
            <Paper>

                <div style={{textAlign:'center',maxWidth:'max-content'}}>
                    <img style={{maxWidth:'300px',maxHeight:'200px'}} src={props.img} alt=""/>
                    <h3>{props.title}</h3>

                    <p>
                        {props.description}
                    </p>

                    <div style={{marginBottom:'10px'}} >
                        {props.unitPrice}
                    </div>
                    <ProductsCount/>
                </div>
            </Paper>
        </Grid>


    );
};

export default ProductCard;