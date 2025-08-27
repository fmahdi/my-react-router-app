import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const userData = use(userPromise);
    console.log("this data is fetched from User2", userData);
    return (
        <div>
            <p>USER 2 is reporting here</p>
        </div>
    );
};

export default User2;