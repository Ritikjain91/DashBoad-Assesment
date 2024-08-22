import React from 'react';
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Avatar,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Picture from '../../Images/Men.jpg'
import SearchIcon from '@mui/icons-material/Search';
import { AttachMoney, GetApp, Star } from '@mui/icons-material';
import { Bar, Line } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement
);

const MainContent = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
}));

const radarData = {
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
  datasets: [
    {
      label: 'Vehicle A',
      backgroundColor: 'rgba(63,81,181,0.2)',
      borderColor: '#3f51b5',
      pointBackgroundColor: '#3f51b5',
      pointBorderColor: '#fff',
      data: [65, 59, 90, 81, 56],
    },
    {
      label: 'Vehicle B',
      backgroundColor: 'rgba(76,175,80,0.2)',
      borderColor: '#4caf50',
      pointBackgroundColor: '#4caf50',
      pointBorderColor: '#fff',
      data: [28, 48, 40, 19, 96],
    },
  ],
};

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: '#3f51b5',
      borderColor: '#3f51b5',
    },
    {
      label: 'Sales 2023',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
    },
  ],
};

const Dashboard = () => {
  const chartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
    datasets: [
      {
        label: 'Your Text 01',
        backgroundColor: '#3f51b5',
        data: [2000, 1500, 2500, 2800, 1800, 2200, 2400, 2600],
      },
      {
        label: 'Your Text 02',
        backgroundColor: '#4caf50',
        data: [1800, 1700, 2000, 2600, 1900, 2100, 2300, 2500],
      },
    ],
  };

  const markers = [
    { name: 'USA', coordinates: [37.0902, -95.7129] },
    { name: 'Brazil', coordinates: [-14.2350, -51.9253] },
    { name: 'India', coordinates: [20.5937, 78.9629] },
    { name: 'Russia', coordinates: [61.5240, 105.3188] },
    { name: 'Australia', coordinates: [-25.2744, 133.7751] },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <MainContent>
        <CssBaseline />
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Hi, John Doe
            </Typography>
            <Avatar alt="John Doe" src={Picture} sx={{ ml: 2 }} />
          </Toolbar>
        </AppBar>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>Your Progress</Typography>
                <Box sx={{ height: { xs: 200, sm: 400 } }}>
                  <Bar data={chartData} options={{ maintainAspectRatio: false }} />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={12}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <IconButton>
                      <AttachMoney fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" fontSize={{ xs: '1.5rem', sm: '2rem' }}>$3,124</Typography>
                    <Typography variant="caption">Earnings</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={12}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <IconButton>
                      <GetApp fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" fontSize={{ xs: '1.5rem', sm: '2rem' }}>1,340,230</Typography>
                    <Typography variant="caption">Downloads</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={12}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <IconButton>
                      <Star fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" fontSize={{ xs: '1.5rem', sm: '2rem' }}>135,020</Typography>
                    <Typography variant="caption">Favorites</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>Maps</Typography>
                <Box sx={{ height: { xs: 200, sm: 300 } }}>
                  <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {markers.map((marker, index) => (
                      <Marker key={index} position={marker.coordinates}>
                        <Popup>{marker.name}</Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>Additional Data</Typography>
                <Box sx={{ height: { xs: 200, sm: 300 } }}>
                  <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </MainContent>
    </Box>
  );
};

export default Dashboard;
