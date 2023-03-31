import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const i={},l=e(`<h1 id="scss-基本语法" tabindex="-1"><a class="header-anchor" href="#scss-基本语法" aria-hidden="true">#</a> Scss 基本语法</h1><blockquote><p>Scss 在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，实现更高效地开发网站前端。</p></blockquote><h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点" aria-hidden="true">#</a> 功能特点</h2><ul><li>完全兼容 CSS3</li><li>在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能</li><li>通过函数进行颜色值与属性值的运算</li><li>提供控制指令 (control directives)等高级功能</li><li>自定义输出格式</li></ul><h2 id="基础格式" tabindex="-1"><a class="header-anchor" href="#基础格式" aria-hidden="true">#</a> 基础格式</h2><h3 id="选择器嵌套-nested-selector" tabindex="-1"><a class="header-anchor" href="#选择器嵌套-nested-selector" aria-hidden="true">#</a> 选择器嵌套 (Nested Selector)</h3><p>可以使用不同的选择器进行嵌套，可更方便与直观的查看与管理选择器的父子级关系</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token selector">.header </span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token selector">.logo </span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.footer </span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container .header </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container .header .logo </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container .footer </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父选择器添加内容" tabindex="-1"><a class="header-anchor" href="#父选择器添加内容" aria-hidden="true">#</a> 父选择器添加内容 &amp;</h3><p>添加符号 ”&amp;“ ，表示在该父容器后面添加相应的后缀，可是该元素的某个行为或其他等。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token selector">a </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
            <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.top</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px #ccc solid<span class="token punctuation">;</span>
        <span class="token selector"><span class="token parent important">&amp;</span>-left </span><span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container a:hover </span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container .top </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #ccc solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container .top-left </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性嵌套-nested-properties" tabindex="-1"><a class="header-anchor" href="#属性嵌套-nested-properties" aria-hidden="true">#</a> 属性嵌套 (Nested Properties)</h3><p>属性名称前都具有相同的字符时，可使用属性嵌套的方法。注：font: {}，冒号后与花括号中间需有空格进行隔开</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token selector">font: </span><span class="token punctuation">{</span>
        <span class="token property">size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
        <span class="token property">family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
        <span class="token property">weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="占位符选择器-foo" tabindex="-1"><a class="header-anchor" href="#占位符选择器-foo" aria-hidden="true">#</a> 占位符选择器 <code>%foo</code></h3><p>有时需要定义一套样式，但并不给某个元素使用，必须在需要调用的时候才启用此样式库，使用 “%foo” 占位，通过 “@extend” 进行调用。%foo 名称可自己定义，前面需加上符号 “%“</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.button<span class="token placeholder">%buttonStyle</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//以上的定义不会编译</span>
<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%buttonStyle</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-success </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%buttonStyle</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.button.btn-default, .button.btn-success </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-success </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h4 id="变量的声明" tabindex="-1"><a class="header-anchor" href="#变量的声明" aria-hidden="true">#</a> 变量的声明</h4><p>使用符号 “$” 定义变量，变量名称可自己命名，赋值方法与 Css 相同。如：”$color: red;”</p><p>变量的定义与使用需有先后顺序，即先定义变量，然后再使用变量，书写的顺序则是将定义变量写在前面，使用变量写在后面。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的命名规则" tabindex="-1"><a class="header-anchor" href="#变量的命名规则" aria-hidden="true">#</a> 变量的命名规则</h3><ol><li>用符号 “$” 开头，后面跟随变量名称；</li><li>变量名称需使用字母开头，中间可使用字母、数字、中横线（连接符）、下划线；</li><li>支持大/小写字母。</li></ol><p>如果多个单词的连接，可以使用横线 “-“、下划线 “_” 或驼峰式的命名形式，需要注意的是，如果同样的单词，分别采用横线与下划线来连接，此名称相当于是同一个名称，在解析时，会采用最后一个声明的变量来解析。因此在命名的时候建议统一使用一个符号。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border_color</span></span><span class="token punctuation">:</span> #0ff<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$borderColor</span></span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border_color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h3><h4 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h4><p>在选择器中定义的变量，只能在该选择器或该选择器的子选择器中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// scss 代码编辑
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h4><p>定义后的变量，可以在全局范围内使用，全局变量的定义有两种形式：</p><p>1、直接定义在最外面的变量，即是全局变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// scss 代码编辑
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在选择器中定义的变量后面增加 “!global”，注意，!global 需添加在分号前，与变量值使用空格分割。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// scss 代码编辑
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>Scss 支持以下几种主要的数据类型：</p><ol><li>字符串（ 有引号或无引号的字符串 ）：”foo”, ‘bar’, baz, …</li><li>数字：1, 2.5, 18px, 30%, 9a, …</li><li>颜色：blue, #00ff00, rgba(0, 0, 0, .1)</li><li>布尔型：true, false</li><li>空值：null</li><li>数组 (list)， 用逗号或空格分割：1em 2em 2.5em 或 Helvetica, Arial, sans-serif, …</li><li>maps，相当于 JavaScript 中的 object：key1: value1, key2: value2, …</li></ol><p>判断数据类型的方式: type-of($value)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$layer-index: 10;
$font-base-family: &#39;Open Sans&#39;, Helvetica, sans-serif;
$top-bg-color: rgba(0,0,0,.1);
$block-base-padding: 6px 10px 6px 10px;
$blank-mode: true;
$var: null //值null是其类型的唯一值。他表示缺少值，通常由函数返回以指示缺少结果
$color-map: (color1: #f00, color2: #0f0, color3: #00f);
$fonts: (serif: &quot;Helvetica Neue&quot;, monospace: &quot;Consolas&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串-strings" tabindex="-1"><a class="header-anchor" href="#字符串-strings" aria-hidden="true">#</a> 字符串 (Strings)</h3><p>支持有引号的字符串与无引号的字符串，有引号的字符串，无论单引号还是双引号，编译后都为双引号，无引号的字符串编译后同样没有引号。如果一段话由多个单词组成，并且包含空格，需要将引号加上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// scss 代码编辑
$string1: &quot;Sample 1&quot;;
$string2: &#39;Sample 2&#39;;
$string3: red;
body {
    content: $string1;
    content: $string2;
    color: $string3;
}

// 编译后的 css
body {
  content: &quot;Sample 1&quot;;
  content: &quot;Sample 2&quot;;
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字-numbers" tabindex="-1"><a class="header-anchor" href="#数字-numbers" aria-hidden="true">#</a> 数字 (Numbers)</h3><ol><li>支持数字或带单位的数字，</li><li>支持整数或小数</li><li>支持正数与负数</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$number1: 30;
$number2: 6.9;
$number3: 16px;
$number4: 32a; // 不规范，但不会报错
// 注：数字后接的任何字母都会视为单位，单位会和数字当作一个整体进行计算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色-colors" tabindex="-1"><a class="header-anchor" href="#颜色-colors" aria-hidden="true">#</a> 颜色 (Colors)</h3><p>Css 原有颜色类型，包括十六进制、RGB、RGBA、HSL、HSLA和色彩单词</p><h3 id="布尔型-booleans" tabindex="-1"><a class="header-anchor" href="#布尔型-booleans" aria-hidden="true">#</a> 布尔型 (Booleans)</h3><p>只有两个值 “true” 和 “false”，只有自身是 false 或 null 才会返回 false，其他一切都会返回 true，主要用于逻辑判断。</p><h3 id="空值-null" tabindex="-1"><a class="header-anchor" href="#空值-null" aria-hidden="true">#</a> 空值 (Null)</h3><p>只有一个值 “null”，如 “$name: null;”。由于他为空，因此不能使用它与任何类型进行运算，主要用于逻辑判断。</p><h3 id="数组-lists" tabindex="-1"><a class="header-anchor" href="#数组-lists" aria-hidden="true">#</a> 数组 (Lists)</h3><p>通过空格或半角逗号分割的一系列的值，数组中还可以包含子数组，如下方的 “$list2” 和 “$list3″，当数组被编译为 css 时，圆括号不会被添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$list1: 1px 2px 3px 4px; //一维数字
$list2: 1px 2px, 3px 4px; //二维数字
$list3: (1px 2px) (3px 4px); //二维数字
// 指定数组中的某个值进行调用
nth( $list, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射-maps" tabindex="-1"><a class="header-anchor" href="#映射-maps" aria-hidden="true">#</a> 映射 (Maps)</h3><p>Maps 必须被圆括号包裹，可以映射任何键值对</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$map: (
  key1: value1,
  key2: value2,
  key3: value3
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="映射函数" tabindex="-1"><a class="header-anchor" href="#映射函数" aria-hidden="true">#</a> 映射函数：</h4><p>返回 Map 中 key 所对应的值( value )。如没有对应的 key，则返回 null 值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-get(map, key)

$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-get($font-sizes, &quot;small&quot;)
结果: 12px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断 map 是否有对应的 key，存在返回 true，否则返回 false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-has-key(map, key)

实例:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-has-key($font-sizes, &quot;big&quot;)
结果: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 map 中所有的 key 组成的队列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-keys(map)

实例:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-keys($font-sizes)
结果: &quot;small&quot;, &quot;normal, &quot;large&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并两个 map 形成一个新的 map 类型，即将 <em>map2</em> 添加到 <em>map1</em>的尾部</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-merge(map1, map2)

实例:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
$font-sizes2: (&quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px)
map-merge($font-sizes, $font-sizes2)
结果: &quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px, &quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除 <em>map</em> 中的 keys，多个 key 使用逗号隔开</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-remove(map, keys...)

实例:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-remove($font-sizes, &quot;small&quot;)
结果: (&quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-remove($font-sizes, &quot;small&quot;, &quot;large&quot;)
结果: (&quot;normal&quot;: 18px)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <em>map</em> 中所有的 value 并生成一个队列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map-values(map)

实例:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-values($font-sizes)
结果: 12px, 18px, 24px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入-scss-文件" tabindex="-1"><a class="header-anchor" href="#导入-scss-文件" aria-hidden="true">#</a> 导入 .scss 文件</h3><p>导入 .scss 文件的方式，使用 @import ” 进行导入，文件名可以有 .scss 后缀，也可以省略</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 方法1
@import &#39;main.scss&#39;;

// 方法2
@import &#39;main&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：导入的 .scss 文件，由于该文件内的代码会重新在发生导入的文件中生成，所以无需再单独生成一个被导入的文件的 .css 文件，解决的方法是在被导入的文件名前增加一个下划线 “_” 的符号，这样可以保证该文件不会被重新生成 .css 文件，而在导入该文件时，前面的下划线可以写入也可以省略：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 以下代码表示将导入一个名为 “_main.scss” 的文件
// 方法1
@import &#39;main&#39;;

// 方法2
@import &#39;_main&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入文件同样也可以写入选择器中，写入选择器后，导入的文件中的所有变量将只适用于该选择器，同时导入的文件中的所有选择器前也会增加发生导入的选择器前的名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {
    @import &#39;main&#39;;
    color: $color; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入普通的-css-文件" tabindex="-1"><a class="header-anchor" href="#导入普通的-css-文件" aria-hidden="true">#</a> 导入普通的 .css 文件</h3><p>以下几种方式，只会将文件作为普通的 css 语句进行引入</p><ol><li>文件拓展名为 .css</li><li>文件名以 http:// 或 https:// 开头</li><li>文件由 url() 的形式引入</li><li>@import 包含 media queries</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &#39;main.css&#39;;
@import &#39;http://puji.design/main.css&#39;;
@import url(main);
@import &#39;landscape&#39; screen and (orientation: landscape);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：采用 @import ‘main.css’ 这种形式引入文件，编译后，文件地址将为计算机的绝对地址，这样的引入形式慎用，建议采用 @import url(main) 的方式。</p>`,84),t=[l];function p(c,o){return s(),a("div",null,t)}const u=n(i,[["render",p],["__file","Scss.html.vue"]]);export{u as default};
