import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getDoctor } from "../actions/DoctorsActions";
import { getQueue } from "../actions/PatientActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class Card extends Component {

    onClick (id){
         this.props.getDoctor(id);
         this.props.getQueue(id);
    }
    render() {
        const {doctor} = this.props;
        return (
          <div className="card">
            <img
              className="card-img-top"
              src={
                "https://clinic-react-spring.herokuapp.com/api/img/download/" +
                doctor.attachment.id
              }
              alt="rasm topilmadi"
            />
            <div className="card-body">
              <p className="job">{doctor.speciality}</p>
              <p className="card-title">
                {doctor.firstName} {doctor.lastName}
              </p>
              <Link
                onClick={this.onClick(doctor.id)}
                to={`/listRegister/${doctor.id}`}
                className="btn btn-primary"
              >
                Qabulga yozilish
              </Link>
            </div>
          </div>
        );
    }
};

Card.propTypes = {
  getDoctor: PropTypes.func.isRequired,
  getQueue: PropTypes.func.isRequired,
};


export default connect(null, { getDoctor, getQueue })(Card);



