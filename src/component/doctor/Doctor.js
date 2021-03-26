import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getDoctorTable, accepted} from '../../actions/DoctorsActions';
import Navbar from '../Navbar';


class Doctor extends Component {
    constructor(){
        super()
        this.state = {
            errors : '',
        }
        this.onClick = this.onClick.bind(this);
    }
    
     componentDidMount(){ 
        this.props.getDoctorTable();
     }

     onClick(id){
        this.props.accepted(id);
     }
    render() {
        let tartib = 0;
        const tables = this.props.tables;
        const {firstName, lastName, middleName, speciality} = this.props.user;
        let tableBody;
        tableBody = tables.filter(row => row.status === true).map(row =>{
            return(
              <tr className="text-center" key={row.id}>
                            <td>{(tartib += 1)}</td>
                            <td>#{row.id}</td>
                            <td>{row.patient.firstName}</td>
                            <td>{row.patient.lastName}</td>
                            <td>{row.patient.phone}</td>
                            <td className="text-center">
                              <button
                                onClick={() => this.onClick(row.id)}
                                className={`${
                                  row.accepted
                                    ? "btn btn-light"
                                    : "btn btn-primary"
                                }`}
                              >
                                Qabulni yakunlash
                              </button>
                            </td>
                          </tr>
            )
        })
    
        return (
          <div className="doctor">
            <Navbar />
            <div className="row">
              <div
                className="col-md-3 bg-primary text-center"
                style={{ height: "500px", color: "white" }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    padding: "20px",
                    width: "300px",
                    margin: "0 auto",
                  }}
                  className="m-4"
                >
                  Toshkent viloyati xususiy klinika {speciality}
                </p>
                <img
                  className="card-img-top mb-4"
                  src="/images/3.jpg"
                  alt="rasm topilmadi"
                />
                <p>
                  <strong>
                    {firstName} {lastName} {middleName}
                  </strong>
                </p>
              </div>
              <div className="col-md-9 ">
                <table className="table table-bordered table-sm table-striped">
                  <thead>
                    <tr className="text-center p-5">
                      <th>Navbat</th>
                      <th>#Id raqam</th>
                      <th>Bemor_ismi</th>
                      <th>Bemor_Fam</th>
                      <th>Bemor_tel</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                  {tableBody}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
};

Doctor.propTypes ={
    getDoctorTable: PropTypes.func.isRequired,
    acctepted : PropTypes.func.isRequired,
    tables : PropTypes.array.isRequired,
    user : PropTypes.object.isRequired

};

const mapStateToPorps = state => ({
    tables : state.tables.tables,
    user : state.tables.user
});

export default connect(mapStateToPorps, {getDoctorTable, accepted}) (Doctor);
