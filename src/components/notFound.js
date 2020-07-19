import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Ooops!! 404 Error😑
        <Link to="/">Home</Link>
    </div>
);

export default NotFoundPage;