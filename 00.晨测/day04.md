##  谈谈自定义事件

##  谈谈全局事件总线

##  谈谈 Promise

##  请写出打印结果
```js
console.log(1);
const promise = new Promise((resolve, reject) => {
	console.log(2);
	resolve();
	console.log(3);
});
promise.then(() => {
	console.log(4);
});
console.log(5);
```
