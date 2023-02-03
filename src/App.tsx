import React, {ChangeEvent, useState} from 'react';
import './App.css'
import ProductCard from './Components/ProductCard';
import {Button, Container, Grid, Icon, TextField} from '@mui/material';

import {SearchInput} from './Components/SearchInput';
import productCard from './Components/ProductCard';
function App() {

  const productCardState = [
        {
            id: 1,
            title: 'NOtebook - Asus',
            description: 'this is office laptop',
            unitPrice: 5057,
            img: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png'
        },
        {
            id: 2,
            title: 'NOtebook - Apple',
            description: 'this is laptop for very rich people',
            unitPrice: 88150,
            img: 'https://exe.ua/wa-data/public/shop/products/98/15/351598/images/351598001/351598001.970.jpg'
        },
        {
            id: 3,
            title: 'NOtebook - Acer',
            description: 'this is laptop for gaming',
            unitPrice: 35900,
            img: ' https://www.nixsolutions.com/ru/uploads/2012/05/apple_macbook_pro_15_inch_6_gen.jpg'
        }
    ]

    const [value,setValue]=useState('')
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }

    const searchByDescription =productCardState.filter(el => {
        console.log(el)
        return el.description.toLowerCase().includes(value)
    })

    return (
        <div>
            <Container>

                <SearchInput onChange={onChangeHandler}/>
                <Grid container>
                    {searchByDescription.map(el => {

                        return <ProductCard key={el.id}
                                            title={el.title}
                                            description={el.description}
                                            unitPrice={el.unitPrice}
                                            img={el.img}/>
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default App;
