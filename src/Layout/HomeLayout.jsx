import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import LatestNews from '../components/latestNews/LatestNews';
import Navbar from '../components/navbar/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
              <Header></Header>
              <section>
                <LatestNews></LatestNews>
              </section>
              <nav className='container mx-auto'>
                <Navbar></Navbar>
              </nav>
            </header>
            <main className='container mx-auto  grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
               <aside className='col-span-3'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;