$(document).on("click", "#showData", function (e) {
  let listContainer = document.getElementById("table-container");
  $.ajax({
    type: "GET",
    url: "https://mboum.com/api/v1/ne/news/?symbols=AAPL&apikey=demo",
    dataType: "html",
    success: function (response) {
      let mboum_data = JSON.parse(response);
      let div = "";
      mboum_data.data.forEach((item) => {
        div += `<tr>
        <td>${item.guid}</td>
        <td>${item.link}</td>
        <td>${item.pubDate}</td>
        <td>${item.title}</td>
        </tr>`;
      });
      listContainer.innerHTML = div;
    },
  });
});
