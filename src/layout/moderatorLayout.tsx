import React, { ReactNode } from 'react';

type ModeratorLayoutProps = {
  children: ReactNode;
};

const ModeratorLayout: React.FC<ModeratorLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Moderator Header</header>
      <main>{children}</main>
      <footer>Moderator Footer</footer>
    </div>
  );
};

export default ModeratorLayout;
