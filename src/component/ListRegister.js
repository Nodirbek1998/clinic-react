import React, { Component } from 'react';
import Personal from './Personal';
import Footer from './Footer'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDoctor} from '../actions/DoctorsActions';
import {getQueue} from '../actions/PatientActions';
import Navbar from './Navbar';

class ListRegister extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getDoctor(id);
        this.props.getQueue(id);
    }
    render() {
        const {queue, doctor} = this.props;
        return (
           <div className='container-fuild bg'>
                <Navbar />
               <div className='container'>
                    <Personal data={doctor} queue={queue}/>                   
               </div>
               <Footer/>
            </div>
        )
    }
};

ListRegister.propTypes = {
    getDoctor: PropTypes.func.isRequired,
    doctor : PropTypes.object.isRequired,
    getQueue: PropTypes.func.isRequired,
    queue : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    doctor : state.doctors.doctor,
    queue : state.patient.queue
})

export default connect(mapStateToProps, {getDoctor,getQueue}) (ListRegister);
