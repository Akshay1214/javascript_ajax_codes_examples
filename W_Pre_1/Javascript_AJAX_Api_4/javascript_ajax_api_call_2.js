// $(document).ready(function () {
//   $("#getData").click(function () {
//     $.ajax({
//       // url: "https://jsonplaceholder.typicode.com/posts",
//       url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo",
//       type: "GET",
//       success: function (data) {
//         displayData(data);
//       },
//       error: function () {
//         alert("Error retrieving data.");
//       },
//     });
//   });

//   function displayData(data) {
//     var html = "";
//     for (var i = 0; i < data.length; i++) {
//       html += "<h2>" + data[i].title + "</h2>";
//       html += "<p>" + data[i].body + "</p>";
//     }
//     $("#data").html(html);
//   }
// });

$(function () {
  $.ajax({
    //url: "http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=55.9895989531941,-3.796229726988194",
    url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo",
    method: "GET",
    dataType: "json",
    success: function (data) {
      var str = "";
      for (var i = 0; i < data.jobsBreakdown.length; i++) {
        str +=
          "Job Title : " +
          data.jobsBreakdown[i].description +
          " and Related Trades <br> Percentage of Occupancies in Area : " +
          data.jobsBreakdown[i].percentage.toPrecision(2) +
          "% <br><br>";
      }
      $("body").html(str);
    },
  });
});
