// -*- javascript -*-

let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
interface myObjIntf {
  name: string;
}
let myObj: myObjIntf = { name:'Bill' };
let anythingVariable: any = "Hey";
let anythingVariable: any = 25; 
let arrayOne: Array<boolean> = [true, false, true, true]; 
let arrayTwo: Array<any> = [1, 'abc', true, 2];
let myObj: {x: number, y: number} = { x: 5, y: 10 };
// object constructor
let MyNode = (function (): Object {
    function MyNode(val: number): Object {
        let this.val: number = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function (): Object {
        let this._priv: number = 10;
    };
    return MyNode;
}());
let myNodeInstnace: Object = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}

