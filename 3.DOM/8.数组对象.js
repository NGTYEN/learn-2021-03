//创建数组
//常规方式:
var myCars1 = new Array();
myCars1[0] = "Saab";
myCars1[1] = "Volvo";
myCars1[2] = "BMW";
console.log(myCars1);
//简洁方式:
var myCars2=new Array("Saab","Volvo","BMW");
//字面
var myCars3=["Saab","Volvo","BMW"];

//访问数组，指定数组名以及索引号
var name = myCars1[0];
console.log(name);
myCars1[1] = "opel";
console.log(myCars1[1]);

// 创建新方法
Array.prototype.myUcase=function(){
    for (i=0;i<this.length;i++){
        this[i]=this[i].toUpperCase();
    }
}
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.myUcase()
console.log(fruits);

console.log(fruits.join());
fruits.pop();
console.log(fruits);
fruits.push("mango");
console.log(fruits);

console.log(fruits.reverse());//翻转
fruits.shift();//删除第一个
fruits.unshift("banana")
console.log(fruits);

console.log(fruits.slice(1, 3));//截取数组下标1-3的

console.log(fruits.sort());//按字母顺序

var myArray = [12,43,45,213,1];
console.log(myArray.sort(function(a,b) {
    return a - b;//按数字顺序升序
}));
console.log(myArray.sort(function(a,b) {
    return b - a;//按数字顺序降序
}));

fruits.splice(2,1,'ORANGE', 'BANANA');
console.log(fruits);

console.log(fruits.toString());
