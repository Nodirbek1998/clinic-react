import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllDoctors} from '../actions/DoctorsActions';
import Footer from './Footer';
import Card from './Card';
import '../Home.css';
import Navbar from './Navbar';


 class Home extends Component {
     componentDidMount(){
         this.props.getAllDoctors();
     }
    render() {
        const {doctors} = this.props.doctors;
        return (
             <div className='container-fuild'>
            <div className='container'>
                <Navbar />
                <div className='header'>
                  <div className='lorem'>
                      <h1>Lorem Ipsum</h1>
                      <p>Lorem ipsum is simvefsoivov ornibnu nirunb nirutun unrtub 
                          eoubviru nrtuparghru rtubirtoj rt rpotjhtr jortjhoitbj erthbu
                          tijriubhiu retpu jrotjoitrj rotiohegorij rotigjoergjpo jrotjo
                      </p>
                  </div>
                  
                  <div className="cards" >
                   {doctors.filter(doctor => doctor.roles[0].roleName !== 'admin').map((doctor) => {
                     return(
                        <Card doctor={doctor} key={doctor.id} />
                     );   
                                    
                   })}
                </div>
               
                </div>           
            </div>
            <Footer/>
          </div>
        )
    }
};

Home.propTypes = {
    getAllDoctors : PropTypes.func.isRequired,
    doctors : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    doctors: state.doctors
})

export default connect(mapStateToProps, {getAllDoctors}) (Home);
