// var settings = {
//   url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo&contentType=application/json&Access-Control-Allow-Origin=*",
//   method: "GET",
//   // timeout: 0,
//   // contentType: "application/json",
// };

// $.ajax(settings).done(function (response) {
//   console.log("response", response);
// });
// let listContainer = document.getElementById("list-container");

const settings = {
  async: true,
  crossDomain: true,
  url: "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo",
  method: "GET",
  headers: {
    // contentType: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// response["item"].forEach((mboum_data) => {
// div += `<div class="col-md-4">
//           <div class="border shadow p-3 my-3">
//               <div class="d-flex justify-content-between">
//                   <h5>User Id: ${todo.userId}</h5>
//                   <h5>Status: ${
//                     todo.completed ? "Completed" : "Incomplete"
//                   }</h5>
//               </div>
//               <hr/>
//               <p>${todo.title}</p>
//           </div>
//       </div>`;

//   div += `<tr>
// <td>${mboum_data.description}</td>
// <td>${mboum_data.guid}</td>
// <td>${mboum_data.link}</td>
// <td>${mboum_data.pubDate}</td>
// <td>${mboum_data.title}</td>
// </tr>`;
// });
// listContainer.innerHTML = div;
