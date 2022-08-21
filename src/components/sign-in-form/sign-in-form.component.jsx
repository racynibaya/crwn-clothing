/* eslint-disable default-case */
import { useState } from 'react';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';

const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async function () {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      console.log(error.code);

      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      )
        alert('Something went wrong, Put a valid user!');
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          require='true'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          require='true'
          name='password'
          value={password}
          onChange={handleChange}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
