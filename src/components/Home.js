import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
    <div className='Home'>
        <h1>The Contract Automation Platform</h1>
        <nav>
            <Link to='/contracts'>Contracts</Link>
            <Link to='/customers'>Customers</Link>
        </nav>
    </div>
);

export default Home;