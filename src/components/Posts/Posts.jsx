import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postsBlog = useLoaderData();

    return (
        <div>
            <p>These are all posts</p>
            <h4>Total Posts data length is {postsBlog.length}</h4>
            {
                postsBlog.map((elem, index) => <Post key={index} elem={elem}></Post>)
            }
        </div>
    );
};

export default Posts;