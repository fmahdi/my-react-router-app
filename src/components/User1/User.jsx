import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from './SingleUser/SingleUser';

const User = () => {
    const userData = useLoaderData();
    console.log("this is user1 data", userData);

    return (
        <div>
            {
                userData.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
            }
        </div>
    );
};

export default User;