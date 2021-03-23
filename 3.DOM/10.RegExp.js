var str = "hello World";
var patt1 = /world/i;
console.log(str.match(patt1));
var patt2 = /l/g;
console.log(str.match(patt2));
var str1 = "Is this all there is?"
var patt3 = /is/gi;
console.log(str1.match(patt3));

//test()方法搜索字符串指定的值，并根据结果返回true或false
var str2 = "The best thing in life are free";
var patt4 = new RegExp("e");
console.log(patt4.test(str2));
var patt5 = new RegExp("\\h+");
console.log(patt5.test(str2));

//exec()方法检索字符串中的指定值，返回值是被找到的值，如果没有，返回null
var patt6 = new RegExp("e");
console.log(patt6.exec(str2));