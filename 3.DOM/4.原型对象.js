// 已存在的对象构造器是不能添加新的属性的。要添加一个新的属性需要在构造函数中添加

//prototype继承
//所有的js对象都会熊一个prototype中继承属性和方法
// Date 对象从 Date.prototype 继承。
// Array 对象从 Array.prototype 继承。
// Person 对象从 Person.prototype 继承。
//所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例

// JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，
// 它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，
// 依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

// Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承。

function person(fname, lname, age, eyecolor) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.nationality = "Chinese";

var myFather = new person("Wang","Hua",45, "black")
console.log(myFather.firstName + " " + myFather.lastName + " is a " + myFather.nationality);

person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
}
var myMother = new person("Zhao","Hui",45,"black");
console.log("我母亲的名字是" + myMother.name());
