import React, { useState } from 'react';
import Header from '../../components/header';
import ChangePassword from '../kanban/components/changePassword';

const DefaultLayout = ({ children }) => {
  const [showChangePass, setShowChangePass] = useState(false);

  return (
    <div>
      <Header ShowChangePass={() => setShowChangePass(!showChangePass)} />
      {showChangePass && (
        <ChangePassword
          onClosePass={() => setShowChangePass(!showChangePass)}
          className="fixed z-50 top-0 bottom-0"
        />
      )}
      {children}
    </div>
  );
};

export default DefaultLayout;
