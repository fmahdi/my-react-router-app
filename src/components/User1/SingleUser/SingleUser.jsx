import React from 'react';
import { Link } from 'react-router';

//defining the style of the component as a JS object
const singleUserStyle = {
    border: "2px solid orange",
    borderRadius: "20px",
    margin: "15px"
}
const SingleUser = ({ user }) => {
    const { name, phone, username, address, id } = user;

    return (
        <div style={singleUserStyle}>
            <p>Name: {name}</p>
            <p>Phone: <small>{phone}</small></p>
            <p>UserName: {username}</p>
            <p>City: {address.city}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default SingleUser;