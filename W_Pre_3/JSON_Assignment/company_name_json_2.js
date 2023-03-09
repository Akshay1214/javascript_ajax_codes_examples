// 2) Write a Code in Javascript which will return company name from the given input
// input :  var json = '{"company": "Harbinger", "Location": "pune"}'
// Output: Harbinger

// ========================================================================================

var comp = { company: "Harbinger", Location: "pune" };
function getValue(key) {
  return comp[key];
}
console.log(getValue("company"));
