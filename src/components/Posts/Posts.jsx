import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    const postsBlog = useLoaderData();

    return (
        <div>
            <p>These are all posts</p>
            <h4>Total Posts data length is {postsBlog.length}</h4>
        </div>
    );
};

export default Posts;