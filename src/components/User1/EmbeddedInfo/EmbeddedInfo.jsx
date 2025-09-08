import React, { use } from 'react';



const EmbeddedInfo = ({ userPromise }) => {
    // const styleD = { color: "red" }
    const userPromiseData = use(userPromise);
    const { name, company } = userPromiseData
    return (
        <div style={{ color: "red" }}>
            <h3>{name}</h3>
            <h4>Company - {company.name}</h4>
            <p>Moral - {company.catchPhrase}</p>

        </div>
    );
};

export default EmbeddedInfo;