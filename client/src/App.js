import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import authService from './components/Authentication/Features/auth/authService';
import Navbar2 from './components/Navbar2';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InmateForm from './components/Inmate/newInmateForm';
import Inmates from './components/Inmate/Inmates'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ServicesSection from './components/ServiceCards'
import Services from './components/Services';
import Pricing from './components/Pricing';
import FeatureSection from './components/FeaturesSection/features';
import Footer from './components/Footer/footer';
import HighlightSection from './components/Footer/HighlightSection'
import Header from './components/Header/Header.js';
import ImageSlider from './components/Carousel';
import Contact from './components/Footer/contact';
import Dashboard from './components/Dashboard/dashboard';
import InmateUpdateForm from './components/Inmate/inmateUpdateForm'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [state, setState] = useState({
    browseOpen: false,
  });

  const handleLogout =()=>{
    authService.logout(navigate);
      // Refresh the window after logout
      // window.location.reload();
  }

  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const isDashboard = location.pathname === '/dashboard';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      {/* Sidebar content */}
      <List>
        {[
          { text: 'Dashboard', path: 'dashboard' },
          { text: 'Create new Inmate', path: 'new' },
          { text: 'View Inmates', path: 'inmates' },
          { text: 'Profile', path: 'profile' },
          'Settings',
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={`/${item.path}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text || item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Subscription', 'Users', 'Logout'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={text === 'Logout' ? handleLogout : undefined}
            button
          >
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="App">
      <Header/>
      <Navbar2/>
 
          {user && !isHomeRoute && (
        <div className="sidebar">
          <React.Fragment key="Browse">
            {state.browseOpen ? (
              <Button onClick={toggleDrawer('browseOpen', false)}>Close</Button>
            ) : (
              <Button onClick={toggleDrawer('browseOpen', true)}>Browse</Button>
            )}
          </React.Fragment>

          <Drawer
            anchor="left"
            open={state.browseOpen}
            onClose={toggleDrawer('browseOpen', false)}
          >
            {list('left')}
          </Drawer>

        </div>
      )}
 <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="services" element={<Services/>} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="new" element={<InmateForm />} />
        <Route path="inmates" element={<Inmates />} />
        <Route path="/inmates-update/:id" element={<InmateUpdateForm />} />
      </Routes>
      </div>
      <div className="footer">
      <div >
      <br/>
      <br/>
    
         <Contact />
      </div>
      </div>
    </div>
  );
}

export default App;
