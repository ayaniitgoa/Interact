import React from 'react';
import { Helmet } from 'react-helmet';
const Login = () => {
  return (
    <div className=''>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Login</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

      <div className='contain'>
        <form className='custom-form'>
          <h1>Login</h1>
          <input type='email' name='' placeholder='Email' />{' '}
          <input type='password' name='' placeholder='Password' />{' '}
          <a className='forgot text-muted' href='/'>
            Forgot password?
          </a>{' '}
          <span className='not-acct text-muted'>
            Dont have an account?
            <a href='/register'> Register</a>
          </span>{' '}
          <button
            className='btn btn-outline-primary'
            name=''
            value='Login'
            href='/'
          >
            Login{' '}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
