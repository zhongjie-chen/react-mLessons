'use strict';

/**
  Promise
*/
// setTimeout(function () {
//   console.log('1>1000');
//   setTimeout(function () {
//     console.log('2>1000');
//   }, 1000);
// }, 1000);

var wait = function wait() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
};
wait().then(function () {
  console.log('1>1000');
  return wait();
}).then(function () {
  console.log('2>2000');
});
