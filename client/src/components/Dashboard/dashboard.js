import React from 'react';
import ChartComponent from  '../Chart/chart';
import { useSelector, useDispatch } from 'react-redux';


function Dashboard() {
    const {user} = useSelector(
    (state) => state.auth
  );
  return (
    <>
         <div><ChartComponent/></div>
    </>
 
  )
}

export default Dashboard






// import React from 'react';
// import ChartComponent from  '../Chart/chart';
// import { useSelector, useDispatch } from 'react-redux';


// function dashboard() {
//   const {user} = useSelector(
//     (state) => state.auth
//   );
//   return (

//     <div><ChartComponent/></div>
//   )
// }

// export default dashboard