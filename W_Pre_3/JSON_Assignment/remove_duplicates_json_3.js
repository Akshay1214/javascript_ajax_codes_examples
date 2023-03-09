// 3) Write a Code in Javascript to  Remove Duplicates In Array Using Javascript
// var arrOfObj = [
//   {
//     name:'abc',age:27
//   },
//   {
//     name:'pqr',age:27
//   },
//   {
//     name:'abc',age:27
//   },
//  {
//     name:'abc',age:28
//   },
//  ]

// ==========================================================================================

arr = [
  {
    name: "abc",
    age: 27,
  },
  {
    name: "pqr",
    age: 27,
  },
  {
    name: "abc",
    age: 27,
  },
  {
    name: "abc",
    age: 28,
  },
];

jsonObject = arr.map(JSON.stringify);

// console.log(jsonObject);

uniqueSet = new Set(jsonObject);
uniqueArray = Array.from(uniqueSet).map(JSON.parse);

console.log(uniqueArray);
