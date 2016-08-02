function myFun(){
	return function(){
		return function(){
			console.log("hello from deep nested function");
		}
	};
};
/*
var newfun = myFun();
var anothervar = newfun();
	anothervar();
 */
myFun()()();