import React from 'react';
import { Contant } from '../../Others/Contant/Contant';
import { DetailsSide } from '../../Others/DetailsSide/DetailsSide';
import { Specialists } from '../../Others/Specialist/Specialists';
import { Statistics } from '../../Others/Statistics/Statistics';
import { Header } from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <DetailsSide></DetailsSide>
            <Contant></Contant>
            <Specialists></Specialists>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;