import React from 'react'

const Technology = ({name, icon}) => {
    const imageUrl = require(`../images/tech/${icon}.png`);
    return (
        <div className="brand-item">
            <img src={imageUrl} alt={name} title={name} width="120px" />
        </div>
    )
}

export default Technology;