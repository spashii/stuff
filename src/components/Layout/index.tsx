import React from 'react';
import Navbar from './Navbar';

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title}
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
