import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h1>Phone Name: {phone.name}</h1>
        </div>
    );
};

export default Phone;