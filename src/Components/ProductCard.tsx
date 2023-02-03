import React, {useState} from 'react';
import ProductsCount from './ProductsCount';
import {Grid, Paper} from '@mui/material';
import {FullCardInfo} from './FullCardInfo';

type PropsType = {
    title: string
    description: string
    unitPrice: number
    img: string
}

export const ProductCard = ({title, description, unitPrice, img}: PropsType) => {
    const [stateCardInfo, setStateCardInfo] = useState(false)

    const onDoubleClickHandler = () => {
        setStateCardInfo(true)
        console.log(stateCardInfo)
    }


    return (
        <div>
            <Grid>
                <Paper>
                    <div style={{textAlign: 'center', maxWidth: 'max-content'}}>
                        {stateCardInfo ?
                            <img hidden/> :
                            <img onDoubleClick={onDoubleClickHandler} className={'hiddenImage'}
                                 style={{maxWidth: '300px', maxHeight: '200px'}} src={img} alt=""/>
                        }
                        {stateCardInfo && <FullCardInfo setStateCardInfo={setStateCardInfo} img={img}/>}
                        <h3>{title}</h3>
                        <p>
                            {description}
                        </p>
                        <div style={{marginBottom: '10px'}} >
                            {unitPrice}
                        </div>
                        <ProductsCount/>

                    </div>
                </Paper>
            </Grid>
            <br/>
        </div>


    );
};

export default ProductCard;