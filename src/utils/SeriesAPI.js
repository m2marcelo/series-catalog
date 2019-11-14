//Separating the network calls and leaving them here

export const getSeries = (series) =>
   series._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];

export const getData = () =>
fetch('serier/samtliga', {
  method: "GET",
  headers: {
      "Accept": "application/json",
      "Access-Control-Allow-Origin": '*'
  }
})
.then(async function(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
})
.catch(function(error) {
  console.log(error);
});