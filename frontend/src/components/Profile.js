import React from 'react';
import profilelogo from '../images/ayan1.jpeg';
import { Helmet } from 'react-helmet';
const Profile = () => {
  return (
    <div className='custom-contain'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>My Profile</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <div className='profile-img'>
        <img src={profilelogo} alt='' />
        <h2>Name</h2>
        <div className='bio'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deleniti repudiandae enim officiis quis eos modi voluptates quo quia
            inventore, nulla suscipit saepe odio nesciunt sapiente repellendus
            iusto minus nihil facere! Doloribus cum rerum amet nisi, soluta
            saepe quasi labore rem placeat, et earum ullam accusantium totam
            facilis voluptate optio iste! Harum ducimus molestiae nam omnis
            facere libero illum eaque fuga deserunt? Et natus sit dicta, sequi
            blanditiis mollitia beatae iste! Suscipit hic, repudiandae modi
            eligendi laboriosam eum, voluptatum est accusantium necessitatibus,
            nesciunt quae pariatur dolores rerum explicabo corrupti corporis
            provident. Ducimus minima earum facilis dolore excepturi repellendus
            officia ullam.dgerakdlbhiiFSAFKBNCK
          </p>
        </div>
      </div>
      <form action=''>
        <div class='custom-file custom_file'>
          <input
            type='file'
            class='custom-file-input'
            id='inputGroupFile01'
            aria-describedby='inputGroupFileAddon01'
          />
          <label class='custom-file-label' for='inputGroupFile01'>
            Upload Resume
          </label>
          <button className='btn btn-outline-primary upload_button'>
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
