import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import { Form } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MarketOverview from './components/MarketOverview';
import Liquidity from './components/Liquidity';
import SelectLimit from './components/SelectLimit';

import getLatest from './api/getLatest';
import './App.css';

function App() {
  const [limit, setLimit] = useState(5000);
  const [data, setData] = useState([]);

  useEffect(() => {
    getLatest(limit, setData);
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Market Overview</Link>
            </li>
            <li>
              <Link to="/liquidity/">Liquidity</Link>
            </li>
          </ul>
        </nav>
        <SelectLimit setLimit={setLimit} />
        <Route path="/" exact render={() => <MarketOverview data={data} limit={limit} />} />
        <Route path="/liquidity/" render={() => <Liquidity data={data} limit={limit} />} />
      </div>
    </Router>
  );
}

export default App;
