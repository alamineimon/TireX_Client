import React from 'react';
import Extra from '../Extra/Extra';
import Blogs from '../Shared/Blogs/Blogs';
import Banner from './Banner/Banner';
import MenuSection from './MenuSection/MenuSection';

const Home =(props) => {
    return (
        <div>
            <Banner></Banner>
            <MenuSection></MenuSection>
            <Blogs></Blogs>
            <Extra></Extra>
        </div>
    );
}

export default Home;