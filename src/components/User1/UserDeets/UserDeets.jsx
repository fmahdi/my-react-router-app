import React from 'react';
import { useLoaderData } from 'react-router';

const UserDeets = () => {
    const userDeet = useLoaderData();
    const { name, website, email, id } = userDeet;
    return (
        <div>
            <small>id: {id}</small>
            <h1>{name}'s Deetz</h1>
            <h3>website: {website}</h3>
            <h3>email: {email}</h3>
        </div>
    );
};

export default UserDeets;