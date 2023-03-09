let input = "";
input = "() => {}";
// input = "const name = () => {}";
// input = "let name = (str) => { console.log(str); }";
// input = " function name( var1 , var2 ) { return var1 + var2; } ";

const convertToArrowFunction = (input) => {
  input = input.trim();
  let functionName = "";
  let params = "";
  let body = "";
  let i = 8;
  while (input[i] != "(") {
    functionName += input[i];
    i++;
  }
  functionName = functionName.trim();

  for (let i = input.indexOf("(") + 1; i < input.indexOf(")"); i++) {
    params += input[i];
  }
  params = params.trim();

  for (let i = input.indexOf("{") + 1; i < input.indexOf("}"); i++) {
    body += input[i];
  }
  body = body.trim();

  if (functionName != "") {
    return `const ${functionName} = (${params}) => { ${body}}`;
  } else {
    return `(${params}) => { ${body}}`;
  }
};

const convertToNormalFunction = (input) => {
  input = input.trim();
  let functionName = "";
  let params = "";
  let body = "";
  let hasBraces = false;
  for (let i = input.indexOf(" "); i < input.indexOf("="); i++) {
    functionName += input[i];
  }
  functionName = functionName.trim();

  for (let i = input.indexOf("=") + 1; i < input.indexOf("=>"); i++) {
    if (input[i] == "(" || input[i] == ")") {
      continue;
    }
    params += input[i];
  }
  params = params.trim();

  if (input.includes("}") && input[input.length - 1] == "}") {
    for (let i = input.indexOf("{") + 1; i < input.length - 2; i++) {
      body += input[i];
    }
  } else {
    for (let i = input.indexOf("=>") + 2; i < input.length; i++) {
      body += input[i];
    }
    body = `return ${body}`;
  }
  body = body.trim();

  return `function ${functionName}(${params}){${body}}`;
};

if (input.includes("function")) {
  console.log(convertToArrowFunction(input));
} else {
  console.log(convertToNormalFunction(input));
}
