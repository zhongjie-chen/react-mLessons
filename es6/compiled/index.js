'use strict';

var say = function say() {
  var words = arguments.length <= 0 || arguments[0] === undefined ? 'Hello es6' : arguments[0];

  console.log(words);
};

say();
say('Hi es6');
