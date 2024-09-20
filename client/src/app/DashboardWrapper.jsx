import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider from "./redux";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
