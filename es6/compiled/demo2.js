'use strict';

/**
  解构赋值
*/

var chenzj = {
  name: 'chenzhongjie',
  age: 24,
  nickname: 'undefined',
  play: function play() {
    console.log('play game');
  }
};

var name = chenzj.name;
var age = chenzj.age;
var nickname = chenzj.nickname;
var play = chenzj.play;

console.log(name);
console.log(age);
console.log(nickname);
play();
