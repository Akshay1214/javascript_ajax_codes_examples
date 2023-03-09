$(document).ready(() => {
  let listContainer = document.getElementById("list-container");
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo",
    method: "GET",
    headers: {
      "X-Mboum-Secret": "demo",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    response["item"].forEach((mboum_data) => {
      div += `<tr>
  <td>${mboum_data.description}</td>
  <td>${mboum_data.guid}</td>
  <td>${mboum_data.link}</td>
  <td>${mboum_data.pubDate}</td>
  <td>${mboum_data.title}</td>
  </tr>`;
    });
    listContainer.innerHTML = div;
  });
});
