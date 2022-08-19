---
title: TypeScript 基本语法
date: 2022-07-8 22:38:01 -0800
tags: 
    - TypeScript
categories: 
    - Notes
---

# TypeScript基本语法

## 前言

最近完工 的博客用的是[Vuepress2.x](https://v2.vuepress.vuejs.org/zh/),在搭建的时候本来是想用默认的主题的，但是`Vuepress2` 的配置文件使用的是`TypeScript`的语法，乱搞之后发现抱错一堆，所以最后还是找了目前所用的 [vuepress-theme-reco ](https://vuepress-theme-reco.recoluan.com/) 主题。目前`TypeScript`在业界内是十分热门的，`Vue3.0`的构建所使用的就是`TypeScript`,并且`Vue3.0`完全支持`TypeScript`无需任何loader。

## 什么是TypeScript

* 简而言之，TypeScript是JavaScript的超集，具有可选的类型并可以编译为纯JavaScript。从技术上讲TypeScript就是具有静态类型的 JavaScript 。 可以更加简单的说就是`scss`和`css`的关系，但实质可能有点不同。

* 避免JavaScript不合理的类型运算错误。
  
  :::: code-group
  
  ::: code-group-item JavaScript
  
  ```javascript
  let a = 0;
  let b = true;
  console.log(a+b);
  ```
  
  :::
  
  ::: code-group-item Console
  
  ```
  1
  ```
  
  :::
  ::::

## 上手之前

### 安装

```cmd
> npm install -g typescript
```

### 编译

```cmd
> tsc file_name.ts
```

编译后生成JavaScript文件，跟编译`scss`一样.

### Visual Studio Code的 TypeScript插件

* TypeScript Auto Compiler
  
  * 保存当前typescript文件并编程成JavaScript文件
  
  * 用法：
    
    1.生成`tsconfig.json` 文件
    
    ```cmd
      > tsc --inti
    ```
    
    2. 终端 -> 运行任务... -> 选择 tsc:监视

* JavaScript and TypeScript Nightly
  代码高亮

## Hello World

TypeScript完全兼容JavaScript,所以与他们的语法都大体相同。

:::: code-group

::: code-group-item greeter.ts

```typescript
function a(smt :string){
    return "Hello, " + smt;
}
let user = "World";

console.log(a(user));
```

:::
::: code-group-item greeter.js

```javascript
"use strict";
function a(smt) {
    return "Hello, " + smt;
}
let user = "World";
console.log(a(user));
```

:::

::: code-group-item Console

```
Hello World
```

:::
::::

::: tip

TypeScript文件并不能直接运行，需要编译成JavaScript文件后才能执行。

:::

## 类型注释

 TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在变量后添加 `: 类型`。
如果参数类型错误，编译会报错但是仍然能生成JavaScript文件，不过是在非严格模式下。

:::: code-group

::: code-group-item greeter.ts

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = 1;

document.body.innerHTML = greeter(user);
```

:::

::: code-group-item Console

```cmd
Argument of type 'number' is not assignable to parameter of type 'string'.
```

:::

::::

如果参数的个数不是期望的值也会报错,在非严格情况下JavaScript也能运行

 :::: code-group

::: code-group-item greeter.ts

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [1,2,3];

document.body.innerHTML = greeter(user);
```

:::

::: code-group-item Console

```cmd
Parameter 'smt' implicitly has an 'any' type.
```

:::

::::

 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。 这两份代码中虽然能直接运行，但是它们脱离了类型的约束。

## 基本类型

* 布尔值 `:boolean`
* 数字 `:number`
* 字符串 `:string`
* 数组 `:number[]`
* Any `:any` 任何类型
* 枚举 `enum`
  ```typescript
  enum Color {Red, Green, Blue}
  ```

> 更多类型请参考官方文档：[基础类型 ·TypeScript)](https://www.tslang.cn/docs/handbook/basic-types.html)

## 接口

接口与类相似，但变量可以实现类，不能实现接口，接口需要由类实现。接口是一种抽象的类，它实质是类约束，就比如规定实现类需要什么参数，就好像类的说明书一样。

就如下方，我们要求实现函数的参数Obj必须拥有label的属性：

```typescript
function printLabel(Obj: { label: string }) {
    console.log(Obj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
```

然后将参数的约束写成接口的形式，并且实现

```typescript
interface obj_constraint{
    label: string;
}


function printLabel(Obj: obj_constraint) {
    console.log(Obj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
```

编译之后并不会有接口的实现（JavaScript不存在接口的概念），所以这只是在typescript对JavaScript的扩展补充

### 可选属性

接口内有些属性可有可无，即使缺少属性也不会编译报错。只需要在属性名后加上`？`

```typescript
interface obj_constraint{
    label: string;
    describe?:string
}


function printLabel(Obj: obj_constraint) { 
    console.log(Obj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
```

### 只读属性

对象在创建之后某些属性只读不可改变。

```typescript
interface obj_constraint{
    readonly label: string;
    describe?:string
}


function printLabel(Obj: obj_constraint) { 
    Obj.label = '1'
    //"无法分配到 "label" ，因为它是只读属性。",
}]
    console.log(Obj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
```

### 函数类型

对函数的描述，包含对参数和返回类型的描述，下面的接口意思是：对应两个参数是字符串，返回类型是布尔值。

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
};
let mySearch: SearchFunc = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
}
```

与基本的类型约束一样

```typescript
mySearch(1,1)
/* 
Argument of type 'number' is not assignable to parameter of type 'string'.
*/
```

::: tip 误区混淆

不可以在函数头部实现接口，因为那是对返回结果的检查

:::

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
};
function a():SearchFunc{
  return true;
  //不能将类型“boolean”分配给类型“SearchFunc”
}
```

### 拥有索引的类型

描述索引，约定索引和值。下面接口就是索引是数字，值为字符串

```typescript
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
```

### 实现类

与Java一样，接口实现类

```typescript
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

但是构造函数不在检查范围之内，因为当一个类实现了一个接口时，只对其实例部分进行类型检查

，我们需要直接操作类的静态部分。

```typescript
interface ClockConstructor {
    new (hour: number, minute: number):void;
}


function createClock(ctor: ClockConstructor, hour: number, minute: number) {
    return new ctor(hour, minute);
}

class DigitalClock  {
    constructor(h: number, m: number) { }
    tick():void{
        console.log("beep beep");
    }
}
class AnalogClock  {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

`createClock` `中的参数ctor` 是一个创造实例的函数，它由`ClockConstructor`检查，通过间接的检查实例化函数即可约束对应类的构造函数。

### 继承接口

接口之间也可继承，也可以像模块一样同时导出。
```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

接口Square将所有的接口导出

```typescript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 类

这个不用多说，学过面对向语言的都认识

```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

### 继承 

类允许继承其他的类：

```typescript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
//dog具有Animal类的方法
dog.bark();
```

### super关键字

super指向父类。此处`Snake`是子类（派生类），`Animal`是父类

```typescript
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");

sam.move();
```

::: tip

在构造函数里访问 `this`的属性之前，我们 *一定*要调用 `super()`

:::

否则：派生类的构造函数必须包含 "super" 调用。因为派生类constructor没有this，所以需要调用super生成派生类的this，this = new Bird();

### 访问控制修饰符

TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。

- **public（默认）** : 公有，可以在任何地方被访问。
- **protected** : 受保护，可以被其自身以及其子类访问。
- **private** : 私有，只能被其定义所在的类访问。
- **readonly** :只读，属性只能被读取

### getter和setter

跟Java的类似，控制对成员变量的访问。

```typescript
"use strict";
let passcode;
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

```

上方的setter会进入else判断，因为`passcode`是空的。

### 静态属性

这个属性仅存在与类上，不会在实例化的对象身上
```typescript
let passcode:string ;

class Employee {
    private _fullName!: string;
    static identifly:string = 'Employee';
    constructor(name:string){
        this._fullName = name;
    }
}

let employee = new Employee('lbw');
```

:::: code-group
::: code-group-item test.ts

```typescript
let passcode:string ;

class Employee {
    private _fullName!: string;
    static identifly:string = 'Employee';
    constructor(name:string){
        this._fullName = name;
    }
}

let employee = new Employee('lbw');
```
:::
::: code-group-item test.js

```js
"use strict";
let passcode;
class Employee {
    constructor(name) {
        this._fullName = name;
    }
}
Employee.identifly = 'Employee';
let employee = new Employee('lbw');

```
:::
::::

通过编译的JavaScript文件可知，`identifly`是属于类的。

### 抽象类

`abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

抽象类不能被实例化，用法如同接口，是类的说明书，类中的方法必须在抽象类中定义方可执行。

```typescript
abstract class Department {

    constructor(public name: string) {
    }

     printName(): void {    //在抽象类中定义的函数可以直接替换到派生类当中去
        console.log(this.name);
     }

    abstract printMeeting(): void; // 此处使用关键字 abstract 仅声明了该函数，必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
    
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在,所以在派生类当中会失效
```

## 泛型

当我们定义函数或类时遇到不确定的类型时，可以使用泛型（不确定的类型）

```typescript
function a(parms:any):any{};//返回值和参数都是未知,可是这样参数和返回值就不一定一致
```

类型通过参数传入,用于对函数的约束

```typescript
function identity<T>(arg: T): T {
    return arg;
}

identity<string>('1')//指定类型
identity(1)//TS自动转化为number
```

可以用于类

```typescript
class Mycalss<T>{
    name:string
    constructor(name:T){
        this.name = name;
    }
}

let me =new Mycalss('lbw');
```

### 实现接口

泛型可以实现接口，效果如同类
```typescript
interface Inter{
    length:number
}
function identity<T extends Inter>(arg: T): T {
    return arg;
}

identity({length:2})

```

泛型就是JavaScript没有的，typescript添加泛型是属于锦上添花，具体作用需要在情况中体现。

## 枚举

枚举是属于基本类型中的一种，可以说是一种常量的合集

:::: code-group

::: code-group-item test.ts

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction);
```

:::

::: code-group-item test.js

```js
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);

```

:::

::: code-group-item Console

```cmd
{
  '1': 'Up',
  '2': 'Down',
  '3': 'Left',
  '4': 'Right',
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}
```

:::

::::

枚举内部各成员都会递增，无论是否有初始数值。观察编译后的js文件可以知道，枚举类型是一个对象并且是带有属性的索引的，所以访问内部的成员变量就很简单，一种是直接访问，然后是通过索引访问，跟Map对象很像，拥有键值对。








::: details 参考文献

* [TypeScript中文网 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/index.html)

* [TypeScript 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/typescript/ts-tutorial.html)
* [使用this之前为什么必须要调用super()？ - SegmentFault 思否](https://segmentfault.com/q/1010000019457421)

:::

