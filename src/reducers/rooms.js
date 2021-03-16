import {GET_ALL_ROOMS} from '../actions/Types';

const initialState = {
    rooms : []
}

export default function  foo(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ROOMS:
            return{
                ...state,
                rooms : action.payload
            };
        default :
          return state;
    }
    
}