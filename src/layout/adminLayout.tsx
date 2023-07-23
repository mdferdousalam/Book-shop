import React, { ReactNode } from 'react';

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
};

export default AdminLayout;
