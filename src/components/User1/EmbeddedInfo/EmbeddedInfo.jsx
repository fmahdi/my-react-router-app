import React, { use } from 'react';

const EmbeddedInfo = ({ userPromise }) => {
    const userPromiseData = use(userPromise);
    const { name, company } = userPromiseData
    return (
        <div>
            <h3>{name}</h3>
            <h4>Company - {company.name}</h4>
            <p>Moral - {company.catchPhrase}</p>

        </div>
    );
};

export default EmbeddedInfo;