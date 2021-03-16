import { GET_PATIENT_SAVE, GET_QUEUE} from '../actions/Types';

const initialState = {
    patient : {},
    queue : []
}

export default function foo(state = initialState, action) {
    switch(action.type){
        case GET_PATIENT_SAVE :
            return {
                ...state,
                patient : action.payload
            };
        case GET_QUEUE :
            return {
                ...state,
                queue : action.payload
            }
        default : 
            return state;
    }
}