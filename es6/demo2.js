/**
  解构赋值
*/

var chenzj = {
  name: 'chenzhongjie',
  age: 24,
  nickname: 'undefined',
  play: function(){
    console.log('play game');
  }
}

var { name, age, nickname, play } = chenzj;
console.log(name);
console.log(age);
console.log(nickname);
play()
