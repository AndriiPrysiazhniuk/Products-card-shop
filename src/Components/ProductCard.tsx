import React from 'react';
import ProductsCount from './ProductsCount';
import {Grid, Paper} from '@mui/material';

type PropsType = {
    title: string
    description: string
    unitPrice: number
    img: string
}

const ProductCard = ({title,description,unitPrice,img}: PropsType) => {
    return (
        <Grid>
            <Paper>
                <div style={{textAlign:'center',maxWidth:'max-content'}}>
                    <img style={{maxWidth:'300px',maxHeight:'200px'}} src={img} alt=""/>
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                    <div style={{marginBottom:'10px'}} >
                        {unitPrice}
                    </div>
                    <ProductsCount/>
                </div>
            </Paper>
        </Grid>


    );
};

export default ProductCard;