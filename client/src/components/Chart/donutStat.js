import React from 'react';
import Chart from 'react-google-charts';

const DonutChart = ({ data }) => {
  return (
    <Chart
      width={'100%'}
      height={'320px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: 'Offense Percentage',
        pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '1' }}
      chartWrapperParams={{ style: { backgroundColor: 'white' } }} // Set the background color to white
    />
  );
};

export default DonutChart;
