import React from 'react';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div className='custom-contain'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <h1>About</h1>
    </div>
  );
};

export default About;
