import { createStore } from 'redux';

const initialState = {
    isEditMode: false,
    person: {
        id: -1,
        firstname: '',
        lastname: ''
    }
};

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PERSON':
            return {
                ...state,
                person: {
                    ...state.person,
                    id: action.person.id === undefined ? state.person.id : action.person.id,
                    firstname: action.person.firstname,
                    lastname: action.person.lastname,
                }
            }

        case 'SET_EDIT_MODE':
            return {
                ...state,
                isEditMode: action.isEditMode
            }

        default:
            return initialState;
    }
    
};

export default createStore(reducerApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());