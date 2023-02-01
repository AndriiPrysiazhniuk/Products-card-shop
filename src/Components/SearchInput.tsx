import React, {ChangeEvent, useState} from 'react';
import {Button, Icon, TextField} from '@mui/material';
import productCard from '../App';
import {Search} from '@mui/icons-material';



type ProductCardsType={
    id:number
    title:string
    description:string
    unitPrice:number
}
export const SearchInput = (props: ProductCardsType) => {

    const [query, setQuery] = useState('')
    const [state, setState] = useState({
        query: '',
        list: []
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // setQuery(e.currentTarget.value)

// if (e.currentTarget.value===''){
//     return props.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
// }
    }

    return (
        <div style={{marginTop: '15px', marginBottom: '15px'}}>
            <TextField size={'small'}
                       variant={'outlined'}
                       label={'Search'}
                       type={'search'}
                       value={query}
                       onChange={handleChange}
            />

            <Button variant={'outlined'}>
                <Icon>
                    <Search color={'primary'}/>
                </Icon>
            </Button>
        </div>
    );
}

