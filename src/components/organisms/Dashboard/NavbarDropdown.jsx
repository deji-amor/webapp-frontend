// NavbarDropdown.js
import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ProfileDropdown from './ProfileDropdown';

const NavbarDropdown = ({ activities }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleHandler = () => {
    setShowDropdown((previousValue) => !previousValue);
  };

  useEffect(() => {
    const escapeHandler = (e) => {
      if (!e.target.closest('.profile-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', escapeHandler);
    return () => {
      document.removeEventListener('click', escapeHandler);
    };
  }, []);

  return (
    <div id="drop-down">
      <div>
        <NotificationsNoneSharpIcon style={{ fontSize: 30 }} />
      </div>
      <div className="relative">
        <SettingsOutlinedIcon onClick={toggleHandler} style={{ fontSize: 30, cursor: 'pointer' }} />
        {showDropdown && <ProfileDropdown user={/* user data */} activities={activities} />}
      </div>
    </div>
  );
};

export default NavbarDropdown;
