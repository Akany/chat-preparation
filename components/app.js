import React from 'react';
import {useSelector} from 'react-redux';

import {Username} from './username';

export function App() {
    const name = useSelector((store) => store.name);

    return (
        <div>
            <Username />
        </div>
    );
}