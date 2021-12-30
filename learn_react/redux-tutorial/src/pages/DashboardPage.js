import React from 'react';

import { Link } from "react-router-dom";

const DashboardPage = () => {
    return (
        <section>
            <h1>DashBoard</h1>
            <p>This is Dashboard Page</p>

            <Link to="/posts" className="button">
                View Posts    
            </Link>
        </section>
    )
}

export default DashboardPage;