//访问对象的属性 objectName.propertyName
var message = "hello world";
var x = message.length;
console.log(x);

//访问对象的方法 objectName.methodName()
var y = message.toUpperCase();
console.log(y);

//创建js对象
//使用object
var person = new Object();
person.name = "Li hua";
person.age = 23;
person.eyecolor = "black";
console.log(person.name + " is " + person.age + " years old");

var person1 = {
    name: "john",
    age: 20,
    eyecolor: "blue"
}
console.log( person1.name + " is " + person1.age + " years old");

//使用对象构造器
function person2(firstname, lastname, age, eyecolor) {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=changeName;
    function changeName(name){
        this.lastname=name;
    }
}
myPerson = new person2("jack","Doe", 23,"blue");
console.log(myPerson.firstname + " is " + myPerson.age + " years old");
myMother = new person2("sally","Rally",24,"green");
myMother.changeName("Doe");
console.log(myMother.firstname + " is " + myMother.age + " years old");

//for…in循环
var person3 = {fname: "john", "lname": "Doe", age: 23};
var z = 0,txt = "";
for(z in person3) {
    txt = txt + person3[z];
}
console.log(txt);

var a = person3;
a.age = 12;
console.log(a.fname + " is " + a.age);
