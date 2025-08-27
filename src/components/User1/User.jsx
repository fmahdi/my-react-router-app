import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const userData = useLoaderData();
    console.log("this is user1 data", userData);

    return (
        <div>
            <p>I am first USER</p>
        </div>
    );
};

export default User;