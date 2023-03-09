const settings = {
  async: true,
  crossDomain: true,
  // url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL",
  url: " https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo",
  method: "GET",
  headers: {
    "X-Mboum-Secret": "demo",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
