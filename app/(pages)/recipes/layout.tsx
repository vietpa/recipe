import React from "react";

export const experimental_ppr = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '7rem 0' }}>
      {children}
    </div>
  )
}

export default Layout;