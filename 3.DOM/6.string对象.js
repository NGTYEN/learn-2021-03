// length
var txt = "Hello world, welcome to the universe.";
console.log(txt.length);

//indexOf()定位字符串中某一个字符首次出现的位置如果没找到对应的字符函数返回-1
// lastIndexOf() 方法在字符串末尾开始查找字符串出现的位置
var x = txt.indexOf("Hello");
console.log(x);
var y = txt.lastIndexOf("wo");
console.log(y);

//match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符
console.log(txt.match("welcome"));
console.log(txt.match("Welcome"));


// replace() 方法在字符串中用某些字符替换另一些字符
console.log(txt.replace("Hello", "hello"));

//字符串大小写转换使用函数 toUpperCase() / toLowerCase()
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

//字符串使用split()函数转为数组
console.log(txt.split(" "));
console.log(txt.split(" ")[0]);
