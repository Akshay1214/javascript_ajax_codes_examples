// 1) Write a Program to validate JSON in Javascript.
// . if the input is a Valid Json , return true
// e.g
// ->  Input : {"company":"Harbinger","Location":"Pune"}
// Output : true
// . If the input is invalid Json , return false
// ->  Input : { "company" => "Harbinger", "Location" => "Pune" }
// Output : false

// ==================================================================================

var valid_json_text = '{"company":"Harbinger","Location":"Pune"}';
var invalid_json_text = '{ "company" => "Harbinger", "Location" => "Pune" }';

console.log(
  "Is " +
    valid_json_text +
    " JSON text valid: " +
    IsValidJSONString(valid_json_text)
);
console.log(
  "Is " +
    invalid_json_text +
    " JSON text valid: " +
    IsValidJSONString(invalid_json_text)
);

function IsValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
