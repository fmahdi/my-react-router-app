import React from 'react';

//defining the style of the component as a JS object
const singleUserStyle = {
    border: "2px solid orange",
    borderRadius: "20px",
    margin: "15px"
}
const SingleUser = ({ user }) => {
    const { name, phone, username, address } = user;

    return (
        <div style={singleUserStyle}>
            <p>Name: {name}</p>
            <p>Phone: <small>{phone}</small></p>
            <p>UserName: {username}</p>
            <p>Address: {address.city}</p>
        </div>
    );
};

export default SingleUser;