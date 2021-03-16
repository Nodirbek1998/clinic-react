import {GET_DOCTORS, GET_DOCTOR} from '../actions/Types';

const initialState = {
    doctors : [],
    doctor : {}
}

export default function foo(state = initialState, action){
    switch(action.type){
        case GET_DOCTORS :
            return{
                ...state,
                doctors : action.payload
            };
        case GET_DOCTOR :
            return {
                ...state,
                doctor : action.payload
            };
        default : 
        return state;
    }
}