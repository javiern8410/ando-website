import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ service }) => {
    const image = require(`../images/services/${service.image}`);
    return (
        <div className="flex-1 sm:flex p-4">
            <img src={image} alt={`${service.title}`} className={`flex-none mb-2 mr-2 rounded-lg object-cover bg-gray-100`} width={`144`} height="144" />
            <div className="min-w-0 pr-2">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                    {service.title}
                </h2>
                <p className="whitespace-pre-wrap font-light">
                    {service.text}
                </p>
            </div>
        </div>
    )
}

Service.prototype = {
    service : {
        title: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        important: PropTypes.bool,
    }
}

export default Service;