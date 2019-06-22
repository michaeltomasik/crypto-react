import queryString from 'query-string';

export default (limit, setData) => {
  return fetch(`/api/latest/?start=0&limit=${limit}`).then(response => {
    return response.json().then((resJson) => {
      setData(resJson.data);
    });
  }).catch((err) => {
    return setData(err.message);
  });
}