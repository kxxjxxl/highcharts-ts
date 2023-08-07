import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type ChartProps = {
  data1: number[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  data2: number[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
};

const MyChart: React.FC<ChartProps> = ({ data1, data2 }) => {
  const options: Highcharts.Options = {
    title: {
      text: 'Finding the Balance',
    },

    xAxis: {
      categories: Array.from({ length: data1.length }, (_, i) => `Point ${i + 1}`),
    },

    series: [
      {
        type: 'line',
        name: 'Fuck Around',
        data: data1,
      },
      {
        type: 'line',
        name: 'Find Out',
        data: data2,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MyChart;
