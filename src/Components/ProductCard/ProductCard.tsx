import './ProductCard.css'
import {ProductsType} from '../../App';
import {IconButton} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {ChangeEventHandler, useState} from 'react';

type PropsType = {
    products: ProductsType
    max: number
}


export const ProductCard = (props: PropsType) => {
const {max} = props
    const [quantity, setQuantity] = useState(0)



    return (
        <div className="products ios apple" id="iphone-x">
            <img className="product-image" src={props.products.src}/>
            <p className="product-name">{props.products.title}</p>
            <p className="product-description">{props.products.description}</p>
            <div>
                <IconButton>
                    <RemoveCircleOutlineIcon color={'primary'}/>
                </IconButton>
                <input value={quantity} type="text"/>
                <IconButton>
                    <AddCircleOutlineIcon color={'info'}/>
                </IconButton>

            </div>
            <p className="product-price">{props.products.price}</p>
            <button className="add-to-cart" id='test'>ADD TO CART</button>
        </div>
    );
};

