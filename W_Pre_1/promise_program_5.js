const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "True");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "False");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
