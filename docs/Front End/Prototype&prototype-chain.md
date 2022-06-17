---
title: 原型和原型链
date: 2022-06-16 14:48:01 -0800
tags: 
    - JavaScript
categories: 
    - Front_End
---

# 原型和原型链
::: tip
文章施工中:eyes:
:::


   最近在看ES6语法时，对继承的概念有点模糊，突发奇想想到了原型，原型是JavaScript创始人（ [Brendan Eich](https://brendaneich.com/) ）设计的聪明之举，在设计这门面对对象语言时，他没有沿用类实例化的做法，而是通过构造函数实例化对象。



## 构造函数

  因为JavaScript没有类，批量地声明对象然后引用相同的属性会显得乏味，例如：

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