export const getSeries = () =>
  fetch('serier/samtliga', {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": '*'
    }
  })
  .then(async function(res) {
    return await res.json();
  })