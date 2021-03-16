import {combineReducers} from 'redux';
import doctorReducers from './doctorReducer';
import errorReducer from './errorReducer';
import PatientReducer from './PatientReducer';
import AuthReducer from './Authreducer'; 
import Table from './Table';
import rooms from './rooms';

export default combineReducers({
    doctors: doctorReducers,
    patient : PatientReducer,
    errors : errorReducer,
    auth: AuthReducer,
    tables : Table,
    rooms : rooms
});