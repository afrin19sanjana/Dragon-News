import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import LatestNews from '../components/latestNews/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
              <Header></Header>
              <section>
                <LatestNews></LatestNews>
              </section>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;