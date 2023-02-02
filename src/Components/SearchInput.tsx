import React, {ChangeEvent, useState} from 'react';
import {Button, Icon, TextField} from '@mui/material';
import InitialProductCardState from '../App';
import {Search} from '@mui/icons-material';

type PropsType={
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const SearchInput = (props: PropsType) => {


    return (
        <div style={{marginTop: '15px', marginBottom: '15px'}}>
            <TextField size={'small'}
                       variant={'outlined'}
                       label={'Search'}
                       type={'search'}
                       onChange={props.onChange}
            />

            <Button variant={'outlined'}>
                <Icon>
                    <Search color={'primary'}/>
                </Icon>
            </Button>
        </div>
    );
}

