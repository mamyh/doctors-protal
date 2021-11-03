import React from 'react'
import Navigation from '../../shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner />
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    )
}

export default Home;
