import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {get_all_rooms} from '../../actions/RoomsActions';
import {pushDoctor} from '../../actions/DoctorsActions';
import Header from '../Header';


class addDoctor extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      price: "",
      speciality: "",
      username: "",
      password: "",
      category: "",
      rooms: "",
      attachmentId: "",
      Rooms: [],
      file: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);       
  }
  componentDidMount() {
    if (
      !this.props.auth.validToken &&
      this.props.auth.token.role[0].roleName !== "admin"
    ) {
      this.props.history.push("/login");
    } else {
      this.props.get_all_rooms();
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      Rooms: newProps.rooms.rooms,
    });
  }

  onFileChange  (e) {
    this.setState({ file: e.target.files[0] });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault(); 
    const doctor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      price: this.state.price,
      speciality: this.state.speciality,
      username: this.state.username,
      password: this.state.password,
      category: this.state.category,
      rooms: this.state.rooms,
      attachmentId: this.state.attachmentId,
    };
    this.props.pushDoctor(doctor,this.state.file, this.props.history);
  }
  render() {
    const { Rooms } = this.state;
    return (
      <>
        <div style={{ width: "1440px", margin: "0 auto" }}>
          <Header />
          <form
            style={{ width: "100%", margin: "0 auto", marginTop: "20px" }}
            onSubmit={this.onSubmit}
          >
            <div
              className="form-group"
              style={{ width: "690px", marginRight: "55px", float: "left" }}
            >
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
                onChange={this.onChange}
                name="firstName"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", float: "left" }}
            >
              <label htmlFor="lastName">LastName:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={this.onChange}
                placeholder="Enter Last Name"
                name="lastName"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", marginRight: "55px", float: "left" }}
            >
              <label htmlFor="middleName">Middle Name:</label>
              <input
                type="text"
                className="form-control"
                id="middleName"
                onChange={this.onChange}
                placeholder="Enter Middle Name"
                name="middleName"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", float: "left" }}
            >
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                onChange={this.onChange}
                placeholder="50000"
                name="price"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", marginRight: "55px", float: "left" }}
            >
              <label htmlFor="speciality">Speciality:</label>
              <input
                type="text"
                className="form-control"
                id="speciality"
                onChange={this.onChange}
                placeholder="lor"
                name="speciality"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", float: "left" }}
            >
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={this.onChange}
                placeholder="username"
                name="username"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", marginRight: "55px", float: "left" }}
            >
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.onChange}
                placeholder="password"
                name="password"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", float: "left" }}
            >
              <label htmlFor="rooms">Choose a rooms: </label>
              <input
                list="room"
                name="rooms"
                id="rooms"
                onChange={this.onChange}
              />
              <datalist
                name="rooms"
                id="room"
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  marginLeft: "10px",
                  outline: "none",
                }}
              >
                {Rooms.map((room) => {
                  return (
                    <option value={room.floor} key={room.id}>
                      {room.floor} qavat {room.number} xona
                    </option>
                  );
                })}
              </datalist>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", float: "left" }}
            >
              <label htmlFor="category">Choose a category: </label>
              <input
                list="categorys"
                name="category"
                id="category"
                onChange={this.onChange}
              />
              <datalist
                id="categorys"
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  marginLeft: "10px",
                  outline: "none",
                }}
              >
                <option value="A" />
                <option value="B" />
                <option value="C" />
                <option value="D" />
              </datalist>
            </div>
            <div
              className="form-group"
              style={{ width: "690px", marginRight: "55px", float: "left" }}
            >
              <label htmlFor="Img">Rasm kiriting:</label>
              <input
                type="file"
                className="form-control"
                id="Img"
                onChange={this.onFileChange}
                placeholder="Rasm kiriting"
                name={"file"}
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
};

addDoctor.propTypes ={
    get_all_rooms : PropTypes.func.isRequired,
    pushDoctor : PropTypes.func.isRequired,
    rooms : PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToPorps = state => ({
    rooms : state.rooms,
    auth : state.auth
})
export default connect(mapStateToPorps, {get_all_rooms, pushDoctor}) (addDoctor);
