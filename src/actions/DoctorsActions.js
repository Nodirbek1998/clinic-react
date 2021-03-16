import axios from 'axios';
import {GET_DOCTORS, GET_DOCTOR, GET_DOCTOR_TABLE, GET_ERRORS} from './Types';

export const getAllDoctors = () => async dispatch =>{
     const res = await axios.get("/api/user")
        dispatch({
            type:GET_DOCTORS,
            payload:res.data.body
        })
};
export const getDoctor = (id) => async dispatch =>{
     const res = await axios.get(`/api/user/${id}`)
        dispatch({
            type:GET_DOCTOR,
            payload:res.data.body
        });
};
export const getDoctorTable = () => async dispatch => {
    
    const res = await axios.get(`/api/doctor`)
    try {
        dispatch({
            type : GET_DOCTOR_TABLE,
            payload : res.data.body
        })
    } catch (error) {
         dispatch({
            type : GET_ERRORS,
            payload : error.data
        })
    }
};

export const accepted = (id) => async dispatch =>{
    await axios.get(`/api/doctor/${id}`)
    dispatch(getDoctorTable());
};

export const pushDoctor = (doctor, history) => async dispatch =>{
   const res =  await axios.post("/api/auth/register", doctor)
     dispatch({
            type : GET_ERRORS,
            payload : res.data
        })
    history.push('/admin');
}