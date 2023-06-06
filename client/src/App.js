import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import DrawerAppBar from './components/Navbar2';
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
import Inmate from './components/Inmate/newInmateForm';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Footer from './components/Footer/footer';
import Contact from './components/Footer/contact';
import Dashboard from './components/Dashboard/dashboard';
import Inbox from './components/Dashboard/inbox';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { user } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    browseOpen: false,
  });

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Sidebar content */}
      
      <List>
  {[
    { text: 'Create new Inmate', path: 'new' },
    { text: 'View Inmates', path: 'inmate' },
    'Starred',
    'Send email',
    'Drafts'
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
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
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
      <ResponsiveAppBar />

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="new" element={<Inmate />} />
      </Routes>

      <Contact />
    </div>
  );
}

export default App;




// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import ResponsiveAppBar from './components/Navbar';
// import DrawerAppBar from './components/Navbar2';
// import Inmate from './components/Inmate';
// import Home from './components/Home';
// import Products from './components/Products';
// import Pricing from './components/Pricing';
// import Footer from './components/Footer/footer';
// import Contact from './components/Footer/contact';
// import Dashboard from './components/Dashboard/dashboard';
// import Inbox from './components/Dashboard/inbox'
// import Register from './components/Authentication/Register/Registration';
// import { useSelector, useDispatch } from 'react-redux';
// import './App.css';

// function App() {

// // authentication state

//   return (
//     <div className="App">
//       <ResponsiveAppBar />
//       {/* <DrawerAppBar /> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route
//           path="Inmate"
//           element={
//             <ProtectedRoute
//               element={Inmate}
//               isAuthenticated={isAuthenticated}
//               redirectTo="/" // Redirect to home if not authenticated
//             />
//           }
//         /> */}
//         <Route path="Pricing" element={<Pricing />} />
//         <Route path="Products" element={<Products />} />
//         <Route path="dashboard" element={<Dashboard/>} />
//         <Route path="inbox" element={<Inbox/>} />

//       </Routes>
//       <Contact/>
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, Suspense, Fragment, lazy } from 'react';
// import './App.css';

// import { Routes, Route,Router } from 'react-router-dom';

// import './App.css';

// const LoggedOutComponent = lazy(() => import('./logged_out/components/Main'));

// function App() {
//   return (
//     <>

//       <Suspense fallback={<Fragment />}>
//         <Routes>
//           <Route path="/" element={<LoggedOutComponent />} />
//         </Routes>
//       </Suspense>

//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import ResponsiveAppBar from './components/Navbar';
// import Inmate from './components/Inmate';
// import Home from './components/Home';
// import Products from './components/Products';
// import Pricing from './components/Pricing';
// import LoginPage from './components/LoginPage';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div className="App">
//       <ResponsiveAppBar showLinks={!isLoggedIn} />

//       <Routes>
//         <Route
//           path="/"
//           element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
//         />
//         <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="Inmate" element={<Inmate />} />
//         <Route path="Pricing" element={<Pricing />} />
//         <Route path="Products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
