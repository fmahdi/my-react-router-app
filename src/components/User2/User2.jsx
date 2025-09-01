import React, { use } from 'react';

const User2 = ({ userPromise }) => {
    const userData = use(userPromise);
    return (
        <div>
            <p>USER 2 is reporting here</p>
            <h3>Total data length is {userData.length}</h3>
            <p>Fetching done with Suspense hook</p>
        </div>
    );
};

export default User2;