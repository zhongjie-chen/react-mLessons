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
var koo = function() {
  let a = 'a';
  {
    let a = 'b';
    {
      let a = 'c';
    }
  }
  return a;
}
console.log(koo());
