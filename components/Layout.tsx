import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-6xl h-full p-4 pb-24">{children}</div>;
};

export default Layout;
