import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {logout} from '../actions/AuthAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
    
  logout = () => {
    this.props.logout();
    window.location.href = "/";
  };

  signInChecking(auth){

        if (auth.validToken) {
            return (
                <Link className="nav-link bg-red text-white" onClick={this.logout} to="logout">
                    Logout
                </Link>
            )
        }
          return (
            <Link className="nav-link text-white" to="/login">
                Login
            </Link>
        )
    }


  render() {
    return (
      <nav
        className="navbar bg-dark navbar-dark pl-2 pr-2 m-1"
        style={{ borderRadius: "10px" }}
      >
        <Link className="navbar-brand" to="/admin">
          Name
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item first">
            <Link className="nav-link" to="#">
              <i className="fa fa-phone"></i>9387458324
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addDoctor">
              <i className="fa fa-phone"></i>Add Doctor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Rus
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Uzb
            </Link>
          </li>
          {this.signInChecking(this.props.auth)}
        </ul>
      </nav>
    );
  }
}
Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToPorps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToPorps, { logout })(Header);
