/**
  Promise
*/
// setTimeout(function () {
//   console.log('1>1000');
//   setTimeout(function () {
//     console.log('2>1000');
//   }, 1000);
// }, 1000);

var wait = () => new Promise((resolve, reject) => {setTimeout(resolve, 1000)});
wait().then(() => {
  console.log('1>1000');
  return wait();
}).then(() => {
  console.log('2>2000');
})
