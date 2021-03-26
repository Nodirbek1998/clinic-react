import axios from 'axios';
import {GET_ALL_ROOMS} from './Types';

export const get_all_rooms = () => async dispatch =>{
    
    const rooms = await axios.get(
      "api/room"
    );
    dispatch({
        type:GET_ALL_ROOMS,
        payload : rooms.data.body
    });
};