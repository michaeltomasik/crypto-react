import React from 'react';
import { Table } from 'react-bootstrap';
import Chart from "chart.js";
import { Bubble } from 'react-chartjs-2';

const Liquidity = ({ data, limit }) => {
  const limitedData = data.slice(0, limit);

  const chartData = {
    datasets: [{
      label: 'Scatter Dataset',
      data: limitedData.map(cryptoStats => ({
        name: cryptoStats.name,
        x: cryptoStats.quote.USD.market_cap,
        y: cryptoStats.quote.USD.volume_24h,
        r: cryptoStats.quote.USD.percent_change_24h,
      })),
    }]
  }

  const options = {
    scales: {
      xAxes: [{
          type: 'linear',
          position: 'bottom'
      }]
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
            var cyptoData =  data.datasets[0].data[tooltipItem.index];
            return cyptoData.name + ': (' + cyptoData.x + ', ' + cyptoData.y + ')';
          }
      }
    },
    scaleOverride: true,
    scaleStartValue: 0,
    scaleSteps: 10,
    scaleStepWidth: 0.1
  }
  
  return (
    <>
    <div>Liquidity</div>
    {chartData.length !== 0 ?
      <Bubble
        options={options}
        data={chartData} /> : null}
    </>
  );
}

export default Liquidity;
