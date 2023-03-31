import{_ as t,p,q as o,w as c,s as n,R as a,t as e,Y as l,n as i}from"./framework-aa5c4115.js";const u={},r=n("p",null,"到底什么是原型，为什么JavaScript会有原型？",-1),d=l(`<h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2><p>因为JavaScript没有类，批量地声明对象然后引用相同的属性会显得缺乏效率，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lbw&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;uu&#39;</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要不断地写入属性名和属性值，解决这种问题通过构造函数就能解决：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">h</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">h</span><span class="token punctuation">(</span><span class="token string">&#39;lbw&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数内部可以自己定义所需的变量，在初始化对象时通过<code>new</code> 命令，调用构造函数就能完成声明。这样的操作跟Java很像，但是JavaScript把函数整合了类的功能。</p><blockquote><p>this关键字是仅存在与函数体内的</p></blockquote><p>但是在某种情况之下，通过传入参数的函数构造对象形式会有点毛病，就是无法共享属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Stu</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>identity<span class="token operator">=</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token string">&#39;lbw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token string">&#39;pdd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>identity <span class="token operator">=</span>  <span class="token string">&#39;teacher&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    Stu  {identity: &#39;student&#39;, name: &#39;lbw&#39;} 
    Stu  {identity: &#39;teacher&#39;, name: &#39;pdd&#39;}
    */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个对象公共属性的修改并不会影响其他的对象，这样会造成资源的耗费，且不能共享数据</p><h2 id="使用原型-prototype" tabindex="-1"><a class="header-anchor" href="#使用原型-prototype" aria-hidden="true">#</a> 使用原型 (prototype)</h2><p>每一个对象（除了null）都有一个特殊的属性叫做原型，原型属性包含一个对象，这个对象可以被外部直接访问，与构造函数不同的是，这个属性是可以共享的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Stu</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token class-name">Stu</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>identity <span class="token operator">=</span>  <span class="token string">&#39;student&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token string">&#39;lbw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token string">&#39;pdd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
  Stu {name: &#39;lbw&#39;}
  name: &quot;lbw&quot;
[[Prototype]]: Object
	identity: &quot;student&quot;
    */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),k={class:"custom-container details"},v=n("summary",{class:"custom-container-title"},"参考文献",-1),m={href:"http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes",target:"_blank",rel:"noopener noreferrer"};function h(y,g){const s=i("ExternalLinkIcon");return p(),o("div",null,[r,c(" more "),d,n("details",k,[v,n("ul",null,[n("li",null,[n("a",m,[a("Javascript继承机制的设计思想--作者： 阮一峰"),e(s)])]),n("li",null,[n("a",b,[a("对象原型--MDN"),e(s)])])])])])}const _=t(u,[["render",h],["__file","Prototype_prototype-chain.html.vue"]]);export{_ as default};