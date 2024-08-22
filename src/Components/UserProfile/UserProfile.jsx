import React, { useState, useEffect } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Picture from '../../Images/Men.jpg'

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, position: 'fixed', right: 16, top: 16 }}>
      <Typography  variant="body1" sx={{ mr: 2 }}>{formatTime(seconds)}</Typography>
      <IconButton   onClick={toggleTimer} sx={{ ml: 1,color: 'error.main' }}>
        {isRunning ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Avatar alt="John Doe" src={Picture} sx={{ ml: 2 }} />
      <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}></Typography>
      <IconButton onClick={handleClick} sx={{ ml: 1 }}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: '45px' }}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography textAlign="center">John Doe</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon sx={{ mr: 1 }} />
          <Typography textAlign="center">Account Setting</Typography>
        </MenuItem>
        <MenuItem sx={{ color: 'error.main' }} onClick={handleClose}>
          <LogoutIcon sx={{ mr: 1 }} />
          <Typography textAlign="center" >Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserProfile;
