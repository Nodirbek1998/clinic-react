import axios from 'axios';
import {GET_ERRORS, GET_PATIENT_SAVE, GET_QUEUE} from './Types';


export const addPatient = (newPatient, history) => async dispatch =>{

    const res = await axios.post("/api/patient", newPatient)
       try {
            dispatch({
            type:GET_PATIENT_SAVE,
            payload : res.data.body
        }); 
        await history.push(`/listRegister/${newPatient.doctorId}`);
       } catch (error) {
           dispatch({
            type:GET_ERRORS,
            payload : error.data
          })
       }; 
          
};

export const getQueue = (id) => async dispatch =>{
    const res = await axios.get(`/api/queue/${id}`)
    dispatch({
        type: GET_QUEUE,
        payload : res.data.body
    })
};