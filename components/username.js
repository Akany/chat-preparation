import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {onUsernameChange} from '../store';

export function Username() {
    const dispatch = useDispatch();
    
    const username = useSelector((state) => state.username);

    return (
        <div>
            <label>
                Your name
                <input
                    value={username}
                    onChange={onChange}
                />
            </label>
        </div>
    );

    function onChange(event) {
        const {value} = event.target;

        dispatch(onUsernameChange(value));
    }
}