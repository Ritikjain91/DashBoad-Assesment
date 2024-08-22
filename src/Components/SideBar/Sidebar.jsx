import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, TextField, InputAdornment } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import ReportIcon from '@mui/icons-material/Report';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidthExpanded = 320;
const drawerWidthCollapsed = 90;

const sidebarItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Feedbacks', icon: <FeedbackIcon />, path: '/feedbacks' },
  { text: 'Leaves', icon: <EventNoteIcon />, path: '/leaves' },
  { text: 'Attendance', icon: <AccessTimeIcon />, path: '/attendance' },
  { text: 'Daily Timesheet', icon: <EventNoteIcon />, path: '/daily-timesheet' },
  { text: 'Work Log', icon: <WorkIcon />, path: '/work-log' },
  { text: 'Reimbursements', icon: <AttachMoneyIcon />, path: '/reimbursements' },
  { text: 'Home', icon: <HomeIcon />, path: '/home' },
  { text: 'Team', icon: <PeopleIcon />, path: '/team' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  { text: 'Help', icon: <HelpIcon />, path: '/help' },
  { text: 'LogoutIcon', icon: <LogoutIcon />, path: '/LogoutIcon' },
];

const remainingItems = [
  { text: 'Reports', icon: <ReportIcon />, path: '/reports' },
  { text: 'My Expenses', icon: <AttachMoneyIcon />, path: '/my-expenses' },
  { text: 'Income', icon: <MonetizationOnIcon />, path: '/income' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = sidebarItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (path) => {
    navigate(path);
    if (isExpanded) {
      toggleSidebar(); 
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed,
          boxSizing: 'border-box',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
          transition: 'width 0.3s ease',
          display: 'flex',
          flexDirection: 'row',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Box sx={{ width: drawerWidthCollapsed }}>
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem 
                button 
                key={index} 
                onClick={index === 0 ? toggleSidebar : () => handleItemClick(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>

        {isExpanded && (
          <Box sx={{ flexGrow: 1, borderLeft: 1, borderColor: '#d3d3d3' }}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                p: 1, 
                borderBottom: 1, 
                borderColor: '#d3d3d3' 
              }}
            >
              <TextField
                hiddenLabel
                fullWidth
                id="sidebar-search"
                label="Search"
                size="small"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, overflowY: 'scroll', maxHeight: 'calc(100vh - 385px)', paddingRight: '8px' }}>
              <List>
                {filteredItems.map((item, index) => (
                  <ListItem 
                    button 
                    key={index} 
                    onClick={() => handleItemClick(item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <List>
              {remainingItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleItemClick(item.path)}
                    sx={{
    ...(item.text === 'Reports' && { borderTop: '1px solid #d3d3d3' }),
    ...(item.text === 'LogoutIcon' && { color: 'red', '& svg': { color: 'red' } })
  }}

                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
