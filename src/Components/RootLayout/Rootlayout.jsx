import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom'; 
import Sidebar from '../SideBar/Sidebar.jsx';
import WhatsAppButton from "../WhatsApp/WhatsApp.jsx"; 
import UserProfile from "../UserProfile/UserProfile.jsx";

function RootLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={isSidebarExpanded ? 2.5 : 1}>
                    <Box>
                        <Sidebar isSidebarExpanded={isSidebarExpanded} onDashboardIconClick={toggleSidebar} />
                    </Box>
                </Grid>
                <Grid item xs={isSidebarExpanded ? 9.5 : 11} sx={{ position: 'relative', bgcolor: '#fff', p: 3 }}>
                    <Toolbar />
                    <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        <UserProfile />
                        <Outlet /> 
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <WhatsAppButton />
            </Box>
        </Box>
    );
}

export default RootLayout;
