import React from 'react';
import { Table } from 'react-bootstrap';

const MarketOverview = ({ data, limit }) => {
  const limitedData = data.slice(0, limit);

  return (
    <>
      <div>MarketOverview</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price Change (24h)</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {limitedData.map(row =>
            <tr key={row.name}>
              <td>{row.cmc_rank}</td>
              <td>{row.name}</td>
              <td>{row.quote.USD.price}</td>
              <td>{row.quote.USD.percent_change_24h}</td>
              <td>{row.quote.USD.market_cap}</td>
              <td>{row.quote.USD.volume_24h}</td>
            </tr>)}
        </tbody>
      </Table>
    </>
  );
}

export default MarketOverview;
