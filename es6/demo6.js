/**
  class
*/
class Person {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(food) {
    console.log(`${this.name}在吃${food}`);
  }

}

var person = new Person('chenzj', 24);
person.eat('rice');

class Student extends Person {
  constructor(...props) {
    super(...props)
  }

  eat(food) {
    console.log(`${this.name}在吃${food}在学校食堂`);
  }

  read(book) {
    console.log(`${this.name}读${book}在学校`);
  }

}

var student = new Student('xiaoming', '15');
student.eat('营养快线');
student.read('数学书');
