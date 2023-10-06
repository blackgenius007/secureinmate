import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import visitationData from './data';
import './VisitMatrixComponent.css'; // Import CSS for custom styling

const VisitMatrixComponent = () => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: visitationData.map((data) => data.date),
          datasets: [
            {
              label: 'Visitation Count',
              data: visitationData.map((data) => data.visitors),
              backgroundColor: 'rgba(75, 192, 192, 0.5)', // Adjusted transparency
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      // Cleanup: destroy the chart instance when the component is unmounted
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [visitationData]);

  return (
    <div className="visit-matrix-container">
      <h1>Visitation Matrix Table</h1>
      <canvas ref={canvasRef} id="chart" width="300" height="150"></canvas>
      <table className="visit-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Inmate</th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {visitationData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.inmate}</td>
              <td>{data.visitors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitMatrixComponent;





// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const VisitMatrixComponent = () => {
//   const canvasRef = useRef(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const visitationData = {
//       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       datasets: [
//         {
//           label: 'Week 1',
//           data: [10, 15, 20, 25, 18, 22, 19],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//         {
//           label: 'Week 2',
//           data: [8, 14, 16, 20, 17, 21, 23],
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     const canvas = canvasRef.current;

//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     const ctx = canvas?.getContext('2d');
//     if (ctx) {
//       const newChart = new Chart(ctx, {
//         type: 'bar',
//         data: visitationData,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });

//       chartRef.current = newChart;
//     }
//   }, []);

//   const tableData = [
//     { day: 'Monday', details: 'Scheduled visits: 5, Special visits: 2' },
//     { day: 'Tuesday', details: 'Scheduled visits: 7, Special visits: 1' },
//     // ... Add data for each day
//   ];

//   return (
//     <div>
//       <h1>Visitation Matrix Table</h1>
//       <table style={{ width: '100%' }}>
//         <thead>
//           <tr>
//             <th>Day</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.day}</td>
//               <td>{item.details}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <canvas ref={canvasRef} id="chart" width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default VisitMatrixComponent;
