import React from 'react';
import './Header.css'
import {Input} from '../SearchInput/Input';

export const Header = () => {
    return (
        <div>
                <Input/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>bucket</li>
            </ul>
        </div>
    );
};

export default Header;