'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  class
*/
var Person = function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'eat',
    value: function eat(food) {
      console.log(this.name + '在吃' + food);
    }
  }]);

  return Person;
}();

var person = new Person('chenzj', 24);
person.eat('rice');

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student() {
    var _ref;

    _classCallCheck(this, Student);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Student.__proto__ || Object.getPrototypeOf(Student)).call.apply(_ref, [this].concat(props)));
  }

  _createClass(Student, [{
    key: 'eat',
    value: function eat(food) {
      console.log(this.name + '在吃' + food + '在学校食堂');
    }
  }, {
    key: 'read',
    value: function read(book) {
      console.log(this.name + '读' + book + '在学校');
    }
  }]);

  return Student;
}(Person);

var student = new Student('xiaoming', '15');
student.eat('营养快线');
student.read('数学书');
