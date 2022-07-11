---
title: 原型和原型链
date: 2022-06-16 14:48:01 -0800
tags: 
    - JavaScript
categories: 
    - Front_End
---

到底什么是原型，为什么JavaScript会有原型？

<!-- more -->



## 构造函数

  因为JavaScript没有类，批量地声明对象然后引用相同的属性会显得缺乏效率，例如：

```js
let a ={
	name:'lbw',
	age:18
}
let b={};
b.name = 'uu';
b.age = 12;
```

需要不断地写入属性名和属性值，解决这种问题通过构造函数就能解决：

```js
function h (name,age){
  this.name= name;
  this.age = age;
};
let a = new h('lbw',18);
```

构造函数内部可以自己定义所需的变量，在初始化对象时通过`new` 命令，调用构造函数就能完成声明。这样的操作跟Java很像，但是JavaScript把函数整合了类的功能。

> this关键字是仅存在与函数体内的

但是在某种情况之下，通过传入参数的函数构造对象形式会有点毛病，就是无法共享属性

```javascript
    function Stu(name){
        this.identity='student',
        this.name = name
    }
    let a  = new Stu('lbw');
    let b  = new Stu('pdd');
    b.identity =  'teacher';
    console.log(a,b);
    /*
    Stu {identity: 'student', name: 'lbw'} 
    Stu {identity: 'teacher', name: 'pdd'}
    */
```

每个对象公共属性的修改并不会影响其他的对象，这样会造成资源的耗费，且不能共享数据

## 使用原型 (prototype) 

每一个对象（除了null）都有一个特殊的属性叫做原型，原型属性包含一个对象，这个对象可以被外部直接访问，与构造函数不同的是，这个属性是可以共享的。

```javascript
    function Stu(name){
        this.name = name
    }
    Stu.prototype.identity =  'student';
    let a  = new Stu('lbw');
    let b  = new Stu('pdd');
    console.log(a);
    /*
  Stu {name: 'lbw'}
  name: "lbw"
[[Prototype]]: Object
	identity: "student"
    */
```

::: details 参考文献
* [Javascript继承机制的设计思想--作者： 阮一峰](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
* [对象原型--MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)
:::