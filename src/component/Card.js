import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Card extends Component {
    render() {
        const {doctor} = this.props;
        return (
            <div className='card'>
                    <img className='card-img-top' src='/images/3.jpg' alt='rasm topilmadi'/>
                    <div className='card-body'>
                            <p className='job'>{doctor.speciality}</p> 
                            <p className='card-title'>{doctor.firstName} {doctor.lastName}</p>
                            <Link to={`/listRegister/${doctor.id}`}
                            className='btn btn-primary'>Qabulga yozilish</Link>
                    </div>
                </div>
        )
    }
};



export default (Card);



