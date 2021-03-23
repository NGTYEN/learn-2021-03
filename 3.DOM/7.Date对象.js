//创建日期
// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

var today = new Date();
console.log(today);
var d1 = new Date("March 23, 2021 11:13:00");
console.log(d1);
var d2 = new Date(2021,2,23);
console.log(d2);
var d3 = new Date(2021,2,23,11,13,0);
console.log(d3);


//设置日期
var d4 = new Date();
d4.setFullYear(2021,2,23);
console.log(d4);
var d5 = new Date();
d5.setDate(d5.getDate()+10);
console.log(d5);

//日期比较
var d6 = new Date();
d6.setFullYear(2012,4,23);
var today = new Date();
if(d6 > today) {
    console.log("今天是2012年5月23日之前");
}else {
    console.log("今天是2012年5月23日之后");
}

//日期化为指定格式

