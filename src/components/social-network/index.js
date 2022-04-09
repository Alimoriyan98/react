import React from 'react';

import Post from './post';
import profile_picture from './media/profile-picture.jpg';
import img_1 from './media/network.jpg';
import img_2 from './media/reactjs.jpg';

const SNComponent = () => {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (
        <div className='container my-5' >
            <Post
                profile_picture={profile_picture}
                user_name='Mohammad tanhaei'
                user_id='uisoftware'
                post_text={text}
                attached_image={img_2}
                comments={['bah bah che post khargholadeii man in post shoma ro pasandidam va be hamin dalil an ra milikam', 'soltan post ha']}
                like_number={190}
            />

            <Post
                profile_picture={profile_picture}
                user_name='MohammadReza Valizade'
                user_id='valizade'
                post_text={text}
            />

            <Post
                profile_picture={profile_picture}
                user_name='Mozafar BagMohammadi'
                user_id='bagmohammadi'
                post_text={text}
                attached_image={img_1}
                like_number={269}
            />
        </div>
    );
}

export default SNComponent;