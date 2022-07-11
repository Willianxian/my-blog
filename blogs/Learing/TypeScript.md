---
title: TypeScript 基本语法
date: 2022-07-18 22:38:01 -0800
tags: 
    - JavaScript
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