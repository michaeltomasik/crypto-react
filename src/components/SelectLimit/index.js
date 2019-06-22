import React from 'react';
import { Form } from 'react-bootstrap';

const MarketOverview = ({ setLimit }) => (
  <Form.Group controlId="ControlSelect">
    <Form.Label>Select Limit</Form.Label>
    <Form.Control as="select" onChange={(e) => setLimit(e.target.value)}>
      <option value={5000}>All</option>
      <option>50</option>
      <option>10</option>
    </Form.Control>
  </Form.Group>
);

export default MarketOverview;
