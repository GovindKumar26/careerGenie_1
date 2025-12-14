import React from "react";

const MainLayout = async ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-7xl">
      <div className="animate-slide-up">{children}</div>
    </div>
  );
};

export default MainLayout;
