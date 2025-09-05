import React from 'react';
import { useLoaderData } from 'react-router';
// import '../Post/Post.css'

const PostDeetz = () => {
    const { userId, id, title, body } = useLoaderData();
    return (
        <div className='card-post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><small>This post is made by user no. {userId}</small></p>
        </div>
    );
};

export default PostDeetz;