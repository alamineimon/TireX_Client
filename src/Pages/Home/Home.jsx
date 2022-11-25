import React from 'react';
import Blogs from '../Shared/Blogs/Blogs';
import Banner from './Banner/Banner';

const Home =(props) => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
        </div>
    );
}

export default Home;