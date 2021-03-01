##  谈谈自定义事件

##  谈谈全局事件总线

##  谈谈 Promise
- 一个异步编程的解决方案，用来回调地狱问题的
- 内部会有三种状态
	- pending 初始化
	- resolved / fulfilled 成功状态
	- rejected 失败状态

- 当我们new Promise时，传入一个excutor函数，这个函数时同步执行的
	- 同时会生成一个promise对象，它的状态默认是pending
	- 在函数中调用resolve方法，会将状态改成resolved
	- 在函数中调用reject方法，会将状态改成rejected
	- 注意: Promise状态只能修改一次

- Promise.prototype.then
	- 可以接受两个参数（通常只传入一个）
	- 第一个参数成功的回调（当promise对象变成resolved状态就会自动触发）
	- 第二个参数失败的回调（当promise对象变成rejected状态就会自动触发）
- Promise.prototype.catch
	- 只接受一个参数
	- 失败的回调（当promise对象变成rejected状态就会自动触发）
- Promise.prototype.finally
	- 只接受一个参数
	- 不管成功/失败都会触发
- 以上三个方法都会返回一个新的promise对象，这个新promise对象的状态：
	- 默认会返回成功的状态
	- 如果内部返回一个promise对象，那么这个promise对象的状态是什么，最终返回的promise状态就是什么
		```js
		promise.then(() => {
			return new Promise() 
		})
		```
	- 如果内部出错了，那么返回一个失败promise对象	

- Promise.all([promise1, promise2...])
	- 当传入n个promise对象都变成成功的状态时，整体会返回一个成功的promise
	- 当传入n个promise对象有一个失败状态时，整体会返回一个失败的promise
- Promise.allSettled([promise1, promise2...])
	- 只有当传入n个promise对象都改变状态，才会有返回值
	- 而且返回值一定是成功的promise

- 应用：
	- 发送ajax请求，使用axios，此时会使用promise


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
12354
