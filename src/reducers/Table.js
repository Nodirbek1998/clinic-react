import {GET_DOCTOR_TABLE, GET_QUEUE_TABLE} from '../actions/Types';

const initialState = {
    tables : [],
    user : {}
}

export default function foo(state = initialState, action) {
    
    switch(action.type){
        
        case GET_DOCTOR_TABLE : 
            return{
                ...state,
                tables : action.payload.tables,
                user : action.payload.user
            };
        case GET_QUEUE_TABLE : 
            return{
                ...state,
                tables : action.payload
            };
        default : 
            return state;
    }
    
}