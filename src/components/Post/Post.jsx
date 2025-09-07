import React from 'react';
import { Link, useNavigate } from 'react-router';
import "./Post.css"

const Post = ({ elem }) => {
    const { title, id } = elem;
    const navigate = useNavigate();
    const handleNavigateClick = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className='card-post'>
            <h3>{title}</h3>
            {/* Navigation way 1 */}
            <Link to={`/posts/${id}`}>
                <button>SHow Details</button>
            </Link>
            {/* Navigation way 2 */}
            <button onClick={handleNavigateClick}>Details of Post ID-{id}</button>
        </div>
    );
};

export default Post;