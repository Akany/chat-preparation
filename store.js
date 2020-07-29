import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    name: nameReducer,
    username: usernameReducer
});

export const store = createStore(reducers);

function nameReducer(state = 'Hoho', action) {
    return state;
}

const username_change = 'username_change';

export function onUsernameChange(username) {
    return {
        type: username_change,
        payload: username
    };
}

function usernameReducer(state = '', action) {
    const {type, payload} = action;

    switch (type) {
        case username_change:
            return payload;
        default:
            return state;
    }
}
