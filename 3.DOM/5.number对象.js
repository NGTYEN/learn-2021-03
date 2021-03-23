//整数（不使用小数点会指数计数法）最多15位
var x = 999999999999999;
console.log(x);//999999999999999
var y = 9999999999999999;
console.log(y);//10000000000000000
//小数的最大位数是17，但浮点运算并不总是100%准确
var z = 0.2 + 0.1;
console.log(z);//0.30000000000000004
var a = 0377;//255
console.log(a);
var b = 0xFF;
console.log(b);//255

//使用toString()方法输出16进制，8进制，2进制
var myNum = 128;
console.log(myNum.toString(16));
console.log(myNum.toString(8));
console.log(myNum.toString(2));

//无穷大 Infinity
myNumber = 2;
while(myNumber != Infinity) {
    myNumber *= myNumber;
    console.log(myNumber);
}

//NaN-飞数字值
var c = 1000 / "APPLE";
console.log(isNaN(c));
var d = 1000 / "12";
console.log(isNaN(d));

//数字可以是数字或者对象
var e = 123;
var f = new Number(123);
console.log(typeof(e));//number
console.log(typeof(f));//object
console.log(e == f);//true
console.log(e === f);//false
