import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(e){
            console.error(e.message);
        }


    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
              <h2 className='title'>I do not have an account</h2>
              <span className="">Sign up with your email address</span> 
              <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput type='text' name='displayName' value={displayName} aria-label='email' handleChange={this.handleChange} label='Name' required />
                <FormInput type='email' name='email' value={email} aria-label='email' handleChange={this.handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} aria-label='password' handleChange={this.handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} aria-label='password' handleChange={this.handleChange} label='Confirm Password' required  />
    
                <div className='button'>
                  <CustomButton type='submit'>Sign Up</CustomButton>
                </div>
                
              </form>
            </div>
        );
    }
    
};

export default SignUp;