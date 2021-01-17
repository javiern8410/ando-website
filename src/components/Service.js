import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ service }) => {
    const image = require(`../images/services/${service.image}`);
    return (
        <div className="flex p-4 space-x-4">
            <img src={image} alt="" className={`flex-none rounded-lg object-cover bg-gray-100`} width={`144`} height="144" />
            <div className="min-w-0 relative flex-auto pr-2">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                    {service.title}
                </h2>
                <p className="font-medium whitespace-pre-wrap">
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