import React from 'react';
import { Helmet } from 'react-helmet';
const Register = () => {
  return (
    <div className=''>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Register</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <form>
        <div className='contain'>
          <form className='custom-form'>
            <h1>Register</h1>
            <input type='email' name='email' placeholder='Email' />{' '}
            <input type='password' name='password' placeholder='Password' />{' '}
            <input
              type='password'
              name='password2'
              placeholder='Confirm Password'
            />{' '}
            <span className='forgot text-muted'>Already have an account?</span>
            <a href='/login'>Login</a>
            <button
              className='btn btn-outline-primary'
              name=''
              value='Register'
              href='/login'
            >
              Register{' '}
            </button>
          </form>
        </div>
      </form>
    </div>
  );
};

export default Register;
