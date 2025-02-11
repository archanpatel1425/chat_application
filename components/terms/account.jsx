import React from "react";

const AccountTerms = ({ block, dataBinding }) => {
    const { title, description1, description2, description3 } = block;

    return (
        <div data-cms-bind={dataBinding}>
            <h1>{title}</h1>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
        </div>
    );
};

export default AccountTerms;
