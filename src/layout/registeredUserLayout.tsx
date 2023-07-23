import React, { ReactNode } from 'react';

type RegisteredUserLayoutProps = {
  children: ReactNode;
};

const RegisteredUserLayout: React.FC<RegisteredUserLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Registered User Header</header>
      <main>{children}</main>
      <footer>Registered User Footer</footer>
    </div>
  );
};

export default RegisteredUserLayout;
