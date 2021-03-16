import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getToken} from '../../actions/AuthAction';

class Login extends Component {
    constructor(){
        super();
        this.state={
            errors : {},
            username: '',
            password:''
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const login = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.getToken(login, this.props.history);
    }
     componentDidMount(){
         if (this.props.auth.validToken) {
              if(this.props.auth.token.role[0].roleName === 'admin'){
                this.props.history.push("/admin")
              }else{
                  this.props.history.push("/doctor")
              }
         }       
    }

    componentWillReceiveProps(newProps) {
        if(newProps.auth.validToken){   
             if(newProps.auth.token.role[0].roleName === 'admin'){
                newProps.history.push("/admin")
              }else{
                  newProps.history.push("/doctor")
              }
        }
        if (newProps.errors) {
            this.setState({ errors: newProps.errors.errors })
        }
       
    }
    
     getError (invalid) {
        if(invalid){
            return (
                <div className="pb-3 pt-3">
                    <div className="alert alert-danger text-center m-auto" role="alert">{invalid}</div>
                </div>
            )
        }

    }
    render() {
        const {errors} = this.state;
        return (
            <div className="container m-5">
                <h1 className="text-center">Login</h1>
                <div className="mt-5" style={{width:"400px"}}>
                      {this.getError(errors.invalid)}
                    <form className="needs-validation" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control" id="uname" placeholder="Enter username" 
                            name="username"  onChange={this.onChange}/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password"
                            name="password"  onChange={this.onChange}/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className='col-md-12'>
                            <button type="submit"  className="btn btn-primary"  >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

Login.propTypes = {
    getToken:PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToPorps = (state) =>({
    errors: state.errors,
    auth : state.auth
})

export default connect(mapStateToPorps, {getToken}) (Login);
