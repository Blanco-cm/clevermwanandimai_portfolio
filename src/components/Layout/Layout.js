import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 w-full flex-centered">
      <Header />
      {/* Adjust main content padding based on header height */}
      <main className="pt-20 w-full flex-centered flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;