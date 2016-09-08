'use strict';

/**
块作用域 let const
*/

// var foo = function() {
//   var a = 'a';
//   {
//     var a = 'b';
//     {
//       var a = 'c';
//     }
//   }
//   return a;
// }
// console.log(foo());
var koo = function koo() {
  var a = 'a';
  {
    var _a = 'b';
    {
      var _a2 = 'c';
    }
  }
  return a;
};
console.log(koo());
