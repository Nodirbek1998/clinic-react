import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPatient} from '../actions/PatientActions';
import {getAllQueue} from '../actions/QueueActions';


class Personal extends Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            phone : ''
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
   componentDidMount(){
        this.props.getAllQueue();
        
   }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
      e.preventDefault()
      const newPatient = {
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          phone : this.state.phone,
          doctorId : this.props.data.id
      }
      this.props.addPatient(newPatient, this.props.history)
    }
    render() {
       const {queue, data} = this.props;
       const size  = queue.length;
       console.log(data); console.log(queue);
        return (
          <div className="list">
            <p>Toshkent viloyat xususiy klinika stomotologi</p>
            <div className="row">
              <div className="col-md-4">
                <img
                  className="card-img-top"
                  src={
                    "https://clinic-react-spring.herokuapp.com/api/img/download/" +
                    this.props.data.attachment.id
                  }
                  alt="rasm topilmadi"
                />
              </div>
              <div className="col-md-8">
                <p className="fullName">
                  {this.props.data.firstName} {this.props.data.lastName}{" "}
                  {this.props.data.middleName}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="job">
                  <b>Mutaxasisligi:</b>
                  {this.props.data.speciality}
                </p>
                <p className="job">
                  <b>O'quv yo'nalishi</b> {this.props.data.speciality}
                </p>
                <p className="job">
                  <b>O'quv yo'nalishi</b> {this.props.data.speciality}
                </p>
              </div>
              <div className="col">
                <Link to="/" className="btn btn-success">
                  Boshqa bo'lim tanlash
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Ro'yhatga yozilish
                </button>
              </div>
            </div>

            <div className="row">
              {queue.map((que, index) => {
                return (
                  <div className="col-md-4 mb-4" key={que.id}>
                    <p className="btn-green index">
                      {index + 1}){que.id}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="modal" id="submit">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <form className="needs-validation">
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          Ism:
                        </div>{" "}
                        <strong>{this.state.firstName}</strong>{" "}
                      </p>
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          Familiya:
                        </div>{" "}
                        <strong>{this.state.lastName}</strong>{" "}
                      </p>
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          Tel-raqam:
                        </div>{" "}
                        <strong>{this.state.phone}</strong>{" "}
                      </p>
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          Price:
                        </div>{" "}
                        <strong>{this.props.data.price}</strong>{" "}
                      </p>
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          navbat:
                        </div>{" "}
                        <strong>{size + 1}</strong>{" "}
                      </p>
                      <p>
                        <div
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          Id-raqam:
                        </div>{" "}
                        <strong>{this.props.data.id}</strong>{" "}
                      </p>
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-dismiss="modal"
                          onClick={this.onSubmit}
                        >
                          Tasdiqlash
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <form className="needs-validation">
                      <div className="form-group">
                        <label>First Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="uname"
                          placeholder="Enter firstName"
                          name="firstName"
                          onChange={this.onChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Last Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pwd"
                          placeholder="Enter lastName"
                          name="lastName"
                          onChange={this.onChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Phone number:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="+998936667205"
                          name="phone"
                          onChange={this.onChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#submit"
                          data-dismiss="modal"
                        >
                          Ro'yhatga yozilish
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

Personal.propTypes={
    addPatient : PropTypes.func.isRequired,
    getAllQueue : PropTypes.func.isRequired,
    patient : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
};

const mapStateToPorps = state => ({
    patient : state.patient,
    errors : state.errors
});

export default connect(mapStateToPorps, {addPatient, getAllQueue}) (Personal);
