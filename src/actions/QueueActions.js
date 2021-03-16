import {GET_ERRORS, GET_QUEUE_TABLE} from './Types';
import axios from 'axios';

export const getAllQueue = (type) => async dispatch => {
    const res = await axios.post(`/api/queue`,type)
    try{
        dispatch({
        type : GET_QUEUE_TABLE,
        payload : res.data.body
    })
    }catch(error){
        dispatch({
        type : GET_ERRORS,
        payload : res.data.body
    })
  }
}
