import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
// import '../Post/Post.css'

const PostDeetz = () => {
    const { userId, id, title, body } = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='card-post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><small>This post is made by user no. {userId}</small></p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDeetz;