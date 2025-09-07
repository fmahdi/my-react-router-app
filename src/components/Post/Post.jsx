import React from 'react';
import { Link } from 'react-router';
import "./Post.css"

const Post = ({ elem }) => {
    const { title, id } = elem;
    return (
        <div className='card-post'>
            <h3>{title}</h3>
            {/* Navigation way 1 */}
            <Link to={`/posts/${id}`}>
                <button>SHow Details</button>
            </Link>
            {/* Navigation way 2 */}
            <button>Details of Post ID-{id}</button>
        </div>
    );
};

export default Post;