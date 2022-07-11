---
title: Scss 基本语法
date: 2022-06-16 14:48:01 -0800
tags: 
    - CSS
categories: 
    - Notes
---
# Scss 基本语法

>    Scss 在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，实现更高效地开发网站前端。 

## 功能特点

- 完全兼容 CSS3
- 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
- 通过函数进行颜色值与属性值的运算
- 提供控制指令 (control directives)等高级功能
- 自定义输出格式

## 基础格式

### 选择器嵌套 (Nested Selector)

可以使用不同的选择器进行嵌套，可更方便与直观的查看与管理选择器的父子级关系

```scss
// scss 代码编辑
.container {
    width: 1200px;
    margin: 0 auto;
    .header {
        height: 100px;
        line-height: 2em;
        .logo {
            display: block;
            float: left;
            width: 100px;
            height: 100px;
        }
    }
    .footer {
        height: 300px;
        text-align: center;
        color: #fff;
        background-color: #000;
    }
}

// 编译后的 css
.container {
  width: 1200px;
  margin: 0 auto;
}
.container .header {
  height: 100px;
  line-height: 2em;
}
.container .header .logo {
  display: block;
  float: left;
  width: 100px;
  height: 100px;
}
.container .footer {
  height: 300px;
  text-align: center;
  color: #fff;
  background-color: #000;
}
```

### 父选择器添加内容 &

添加符号 ”&“ ，表示在该父容器后面添加相应的后缀，可是该元素的某个行为或其他等。

```scss
// scss 代码编辑
.container {
    width: 1200px;
    margin: 0 auto;
    a {
        color: #333;
        &:hover {
            text-decoration: underline;
            color: red;
        }
    }
    .top{
        border: 1px #ccc solid;
        &-left {
            float: left;
            width: 200px;
        }
    }
}

// 编译后的 css
.container {
  width: 1200px;
  margin: 0 auto;
}
.container a {
  color: #333;
}
.container a:hover {
  text-decoration: underline;
  color: red;
}
.container .top {
  border: 1px #ccc solid;
}
.container .top-left {
  float: left;
  width: 200px;
}
```

### 属性嵌套 (Nested Properties)

属性名称前都具有相同的字符时，可使用属性嵌套的方法。注：font: {}，冒号后与花括号中间需有空格进行隔开

```scss
// scss 代码编辑
.container {
    color: #333;
    font: {
        size: 1em;
        family: sans-serif;
        weight: 500;
    }
}

// 编译后的 css
.container {
  color: #333;
  font-size: 1em;
  font-family: sans-serif;
  font-weight: 500;
}
```

### 占位符选择器 `%foo`

有时需要定义一套样式，但并不给某个元素使用，必须在需要调用的时候才启用此样式库，使用 “%foo” 占位，通过 “@extend” 进行调用。%foo 名称可自己定义，前面需加上符号 “%“

```scss
// scss 代码编辑
.button%buttonStyle {
    width: 100px;
    height: 36px;
    display: inline-block;
}
//以上的定义不会编译
.btn-default {
    @extend %buttonStyle;
    background-color: #333;
    color: #fff;
}
.btn-success {
    @extend %buttonStyle;
    background-color: #eee;
    color: green;
}

// 编译后的 css
.button.btn-default, .button.btn-success {
  width: 100px;
  height: 36px;
  display: inline-block;
}
.btn-default {
  background-color: #333;
  color: #fff;
}
.btn-success {
  background-color: #eee;
  color: green;
}
```

## 变量

#### 变量的声明

使用符号 “$” 定义变量，变量名称可自己命名，赋值方法与 Css 相同。如：”$color: red;”

变量的定义与使用需有先后顺序，即先定义变量，然后再使用变量，书写的顺序则是将定义变量写在前面，使用变量写在后面。

```scss
// scss 代码编辑
$color: #f00;
.container {
    color: $color;
}

// 编译后的 css
.container {
  color: #f00;
}
```

### 变量的命名规则

1. 用符号 “$” 开头，后面跟随变量名称；
2. 变量名称需使用字母开头，中间可使用字母、数字、中横线（连接符）、下划线；
3. 支持大/小写字母。

如果多个单词的连接，可以使用横线 “-“、下划线 “_” 或驼峰式的命名形式，需要注意的是，如果同样的单词，分别采用横线与下划线来连接，此名称相当于是同一个名称，在解析时，会采用最后一个声明的变量来解析。因此在命名的时候建议统一使用一个符号。

```scss
// scss 代码编辑
$color: #f00;
$border_color: #0ff;
$border-color: #ff0;
$borderColor: #00f;
.container {
    color: $color;
    border-color: $border_color;
}

// 编译后的 css
.container {
  color: #f00;
  border-color: #ff0;
}
```

### 变量的作用域

#### 局部变量

在选择器中定义的变量，只能在该选择器或该选择器的子选择器中使用

```
// scss 代码编辑
.container {
    $font-size: 16px;
    font-size: $font-size;
    .wrapper {
        font-size: $font-size;
    }
}

// 编译后的 css
.container {
  font-size: 16px;
}

.container .wrapper {
  font-size: 16px;
}
```

#### 全局变量

定义后的变量，可以在全局范围内使用，全局变量的定义有两种形式：

1、直接定义在最外面的变量，即是全局变量

```
// scss 代码编辑
$font-size: 16px;
.container {
    font-size: $font-size;
}
.footer {
    font-size: $font-size;
}

// 编译后的 css
.container {
  font-size: 16px;
}

.footer {
  font-size: 16px;
}
```

2、在选择器中定义的变量后面增加 “!global”，注意，!global 需添加在分号前，与变量值使用空格分割。

```
// scss 代码编辑
.container {
    $font-size: 16px !global;
    font-size: $font-size;
}
.footer {
    font-size: $font-size;
}

// 编译后的 css
.container {
  font-size: 16px;
}

.footer {
  font-size: 16px;
}
```

## 数据类型

Scss 支持以下几种主要的数据类型：

1. 字符串（ 有引号或无引号的字符串 ）：”foo”, ‘bar’, baz, …
2. 数字：1, 2.5, 18px, 30%, 9a, …
3. 颜色：blue, #00ff00, rgba(0, 0, 0, .1)
4. 布尔型：true, false
5. 空值：null
6. 数组 (list)， 用逗号或空格分割：1em 2em 2.5em 或 Helvetica, Arial, sans-serif, …
7. maps，相当于 JavaScript 中的 object：key1: value1, key2: value2, …

判断数据类型的方式: type-of($value)

```
$layer-index: 10;
$font-base-family: 'Open Sans', Helvetica, sans-serif;
$top-bg-color: rgba(0,0,0,.1);
$block-base-padding: 6px 10px 6px 10px;
$blank-mode: true;
$var: null //值null是其类型的唯一值。他表示缺少值，通常由函数返回以指示缺少结果
$color-map: (color1: #f00, color2: #0f0, color3: #00f);
$fonts: (serif: "Helvetica Neue", monospace: "Consolas");
```

### 字符串 (Strings)

支持有引号的字符串与无引号的字符串，有引号的字符串，无论单引号还是双引号，编译后都为双引号，无引号的字符串编译后同样没有引号。如果一段话由多个单词组成，并且包含空格，需要将引号加上。

```
// scss 代码编辑
$string1: "Sample 1";
$string2: 'Sample 2';
$string3: red;
body {
    content: $string1;
    content: $string2;
    color: $string3;
}

// 编译后的 css
body {
  content: "Sample 1";
  content: "Sample 2";
  color: red;
}
```

### 数字 (Numbers)

1. 支持数字或带单位的数字，
2. 支持整数或小数
3. 支持正数与负数

```
$number1: 30;
$number2: 6.9;
$number3: 16px;
$number4: 32a; // 不规范，但不会报错
// 注：数字后接的任何字母都会视为单位，单位会和数字当作一个整体进行计算
```

### 颜色 (Colors)

Css 原有颜色类型，包括十六进制、RGB、RGBA、HSL、HSLA和色彩单词

### 布尔型 (Booleans)

只有两个值 “true” 和 “false”，只有自身是 false 或 null 才会返回 false，其他一切都会返回 true，主要用于逻辑判断。

### 空值 (Null)

只有一个值 “null”，如 “$name: null;”。由于他为空，因此不能使用它与任何类型进行运算，主要用于逻辑判断。

### 数组 (Lists)

通过空格或半角逗号分割的一系列的值，数组中还可以包含子数组，如下方的 “$list2” 和 “$list3″，当数组被编译为 css 时，圆括号不会被添加

```
$list1: 1px 2px 3px 4px; //一维数字
$list2: 1px 2px, 3px 4px; //二维数字
$list3: (1px 2px) (3px 4px); //二维数字
// 指定数组中的某个值进行调用
nth( $list, 2);
```

### 映射 (Maps)

Maps 必须被圆括号包裹，可以映射任何键值对

```
$map: (
  key1: value1,
  key2: value2,
  key3: value3
)
```

#### 映射函数：

返回 Map 中 key 所对应的值( value )。如没有对应的 key，则返回 null 值。

```
map-get(map, key)

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-get($font-sizes, "small")
结果: 12px
```

判断 map 是否有对应的 key，存在返回 true，否则返回 false

```
map-has-key(map, key)

实例:
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-has-key($font-sizes, "big")
结果: false
```

返回 map 中所有的 key 组成的队列

```
map-keys(map)

实例:
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-keys($font-sizes)
结果: "small", "normal, "large"
```

合并两个 map 形成一个新的 map 类型，即将 *map2* 添加到 *map1*的尾部

```
map-merge(map1, map2)

实例:
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
$font-sizes2: ("x-large": 30px, "xx-large": 36px)
map-merge($font-sizes, $font-sizes2)
结果: "small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px
```

移除 *map* 中的 keys，多个 key 使用逗号隔开

```
map-remove(map, keys...)

实例:
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-remove($font-sizes, "small")
结果: ("normal": 18px, "large": 24px)
map-remove($font-sizes, "small", "large")
结果: ("normal": 18px)
```

返回 *map* 中所有的 value 并生成一个队列

```
map-values(map)

实例:
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-values($font-sizes)
结果: 12px, 18px, 24px
```

### 导入 .scss 文件

导入 .scss 文件的方式，使用 @import ” 进行导入，文件名可以有 .scss 后缀，也可以省略

```
// 方法1
@import 'main.scss';

// 方法2
@import 'main';
```

注：导入的 .scss 文件，由于该文件内的代码会重新在发生导入的文件中生成，所以无需再单独生成一个被导入的文件的 .css 文件，解决的方法是在被导入的文件名前增加一个下划线 “_” 的符号，这样可以保证该文件不会被重新生成 .css 文件，而在导入该文件时，前面的下划线可以写入也可以省略：

```
// 以下代码表示将导入一个名为 “_main.scss” 的文件
// 方法1
@import 'main';

// 方法2
@import '_main';
```

导入文件同样也可以写入选择器中，写入选择器后，导入的文件中的所有变量将只适用于该选择器，同时导入的文件中的所有选择器前也会增加发生导入的选择器前的名称：

```
.container {
    @import 'main';
    color: $color; 
}
```

### 导入普通的 .css 文件

以下几种方式，只会将文件作为普通的 css 语句进行引入

1. 文件拓展名为 .css
2. 文件名以 http:// 或 https:// 开头
3. 文件由 url() 的形式引入
4. @import 包含 media queries

```
@import 'main.css';
@import 'http://puji.design/main.css';
@import url(main);
@import 'landscape' screen and (orientation: landscape);
```

注：采用 @import ‘main.css’ 这种形式引入文件，编译后，文件地址将为计算机的绝对地址，这样的引入形式慎用，建议采用 @import url(main) 的方式。