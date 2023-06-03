import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import DrawerAppBar from './components/Navbar2';
import Inmate from './components/Inmate';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Footer from './components/Footer/footer';
import Contact from './components/Footer/contact'
import Register from './components/Authentication/Register/Registration';
import './App.css';

// Custom ProtectedRoute component
const ProtectedRoute = ({ element: Component, isAuthenticated, redirectTo }) => {
  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

function App() {
  // Assuming you have an authentication state
  const isAuthenticated = false; // Change this based on your authentication logic

  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <DrawerAppBar /> */}
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Inmate"
          element={
            <ProtectedRoute
              element={Inmate}
              isAuthenticated={isAuthenticated}
              redirectTo="/" // Redirect to home if not authenticated
            />
          }
        />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Products" element={<Products />} />
        <Route path="Login" element={<Register/>} />
      </Routes>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




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