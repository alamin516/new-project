import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h1>Phones: {phones.length}</h1>
            {
                phones.map(phone => <li><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;