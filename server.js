const express = require("express");
const rp = require('request-promise');
const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/latest", (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': req.query.limit || 100,
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.KEY
    },
    json: true,
    gzip: true
  };

  rp(requestOptions).then(response => {
    return res.json({ data: response.data });
  }).catch((err) => {
    return res.json({ data: (err.message)});
  });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});