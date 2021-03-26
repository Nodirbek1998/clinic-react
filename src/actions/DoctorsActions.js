import axios from 'axios';
import {GET_DOCTORS, GET_DOCTOR, GET_DOCTOR_TABLE, GET_ERRORS} from './Types';

export const getAllDoctors = () => async dispatch =>{
     const res = await axios.get("api/user");
        dispatch({
            type:GET_DOCTORS,
            payload:res.data.body
        })
};
export const getDoctor = (id) => async dispatch =>{
     const res = await axios.get(`api/user/${id}`);
        dispatch({
            type:GET_DOCTOR,
            payload:res.data.body
        });
};
export const getDoctorTable = () => async dispatch => {
    
    const res = await axios.get(`api/doctor`);
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
    await axios.get(`api/doctor/${id}`);
    dispatch(getDoctorTable());
};

export const pushDoctor = (doctor, attach, history) => async dispatch =>{ console.log(doctor);
   if (attach instanceof File) {
     const file = new FormData();
     file.append("file", attach);
     axios.post("/api/img/upload", file)
       .then((res) => {
         doctor.attachmentId = res.data[0];
         console.log(doctor);
         axios.post("/api/auth/register", doctor)
           .then(() => {
             dispatch({
               type: GET_ERRORS,
               payload: {},
             });
             history.push("/admin");
           })
           .catch((error) => {
             dispatch({
               type: GET_ERRORS,
               payload: error.response.data,
             });
           });
       })
       .catch((err) => {
         history.push("/wrong");
         console.log(err);
       });
   }
}