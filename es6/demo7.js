var foo = {name: 'www'};
var goo = {age: 13};
var koo = Object.assign({}, foo, goo);
var loo = {...foo, ...goo};
//Object.assign babel转换后还是原来的样子 如果有写浏览器不支持（比如微信内核X5）就会报错
// ...这个是stage-0 es7会进行转换
// or http://babeljs.io/docs/usage/polyfill/
