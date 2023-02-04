import React from 'react';

type HeaderPropsType = {
    mainTitle: string
}

export const Header = ({
                           mainTitle
                       }: HeaderPropsType) => {
    return (
        <div>
            <h1>Its my app </h1>
            <input placeholder={'Search'}/>
            <ul>
                <li>header</li>
                <li>main body</li>
                <li>Footer</li>
            </ul>

        </div>
    );
};


