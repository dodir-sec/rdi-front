import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Navbar />
                <main className="flex-1 p-5 dark:bg-gray-700">
                    <Outlet />  
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
