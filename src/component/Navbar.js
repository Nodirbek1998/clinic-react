import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../actions/AuthAction';



class  Navbar extends Component{

 

    logout = () => {
            this.props.logout();
            window.location.href = "/"
    };

    
    signUpChecking (auth){

        const {token, validToken} = auth

        if (validToken) {
            if (token.role[0].roleName==="doctor") { 
                return (
                  <Link style={{color:'white'}} to={`/doctor`}>
                    <i className="fas fa-user-circle mr-1"></i>
                    {token.username}
                  </Link>
                );
            }
        }else{
            return (
              <Link className="nav-link text-white" to="/admin">
                <h4>Home</h4>
              </Link>
            );
        } 
    }

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



  render(){ 

    return (
    <nav className={this.props.auth.validToken?` navbar bg-info pl-5 pr-5`:`navbar`} style={{borderRadius:"10px"}} >
        {this.signUpChecking(this.props.auth)}
        <ul className ="navbar-nav">
            <li className="nav-item"><Link className='nav-link text-white' to='#'>Rus</Link></li>
            <li className="nav-item"><Link className='nav-link text-white' to='#'>Uzb</Link></li>
            <li className="nav-item">
                {this.signInChecking(this.props.auth)}
            </li>
        </ul>
    </nav>
  )
  }
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToPorps = state => ({
    auth : state.auth
});

export default connect(mapStateToPorps,{logout}) (Navbar);
