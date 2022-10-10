import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
export const LoadedData = createContext([]);

const Layout = () => {
    const topics = useLoaderData().data
    return (
        <div>
            <LoadedData.Provider value={topics}>
                <Header></Header>
                <Outlet></Outlet>
                {/* <Footer></Footer> */}
            </LoadedData.Provider>

        </div>
    );
};

export default Layout;