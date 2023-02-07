import {ChangeEvent, useState} from 'react';
import {Button, Icon, TextField} from '@mui/material';
import {Search} from '@mui/icons-material';

export const Input = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <TextField size={'small'}
                       variant={'outlined'}
                       label={'Search'}
                       type={'search'}
                       onChange={onChangeHandler}
            />

            <Button variant={'outlined'}>
                <Icon>
                    <Search color={'primary'}/>
                </Icon>
            </Button>
        </div>
    );
}