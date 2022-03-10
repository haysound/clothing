import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }

    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
  render() {
    return (
        <div className="sign-in">
          <h2 className='title'>I already have an account</h2>
          <span className="">Sign in with your email address</span> 
          <form onSubmit={this.handleSubmit}>
            <FormInput type='email' name='email' value={this.state.email} aria-label='email' handleChange={this.handleChange} label='Email' required />

            <FormInput type='password' name='password' value={this.state.password} aria-label='password' handleChange={this.handleChange} label='Password' required  />

            <div className='button'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
                {' '}SignIn With Google{' '}
              </CustomButton>
            </div>
            
          </form>
        </div>
    )
  }
}

export default SignIn;