import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
const DashboardWrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      sidebar
      <Sidebar />
      <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
