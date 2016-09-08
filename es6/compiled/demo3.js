"use strict";

/**
箭头函数
身处箭头函数里面的this 还是指向原来的this
*/
var timer = {
  id: 1000,
  getTime: function getTime() {
    var self = this;
    setTimeout(function () {
      console.log(self.id);
    }, 1000);
  }
};

timer.getTime();

var timer2 = {
  id: 1000,
  getTime: function getTime() {
    var _this = this;

    setTimeout(function () {
      console.log(_this.id);
    }, 1000);
  }
};

timer2.getTime();
