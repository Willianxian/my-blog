import{_ as n,o as s,c as a,a as e}from"./app.19adc695.js";const i={},l=e(`<h1 id="scss-\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#scss-\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> Scss \u57FA\u672C\u8BED\u6CD5</h1><blockquote><p>Scss \u5728 CSS \u8BED\u6CD5\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u53D8\u91CF (variables)\u3001\u5D4C\u5957 (nested rules)\u3001\u6DF7\u5408 (mixins)\u3001\u5BFC\u5165 (inline imports) \u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5B9E\u73B0\u66F4\u9AD8\u6548\u5730\u5F00\u53D1\u7F51\u7AD9\u524D\u7AEF\u3002</p></blockquote><h2 id="\u529F\u80FD\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u7279\u70B9" aria-hidden="true">#</a> \u529F\u80FD\u7279\u70B9</h2><ul><li>\u5B8C\u5168\u517C\u5BB9 CSS3</li><li>\u5728 CSS \u57FA\u7840\u4E0A\u589E\u52A0\u53D8\u91CF\u3001\u5D4C\u5957 (nesting)\u3001\u6DF7\u5408 (mixins) \u7B49\u529F\u80FD</li><li>\u901A\u8FC7\u51FD\u6570\u8FDB\u884C\u989C\u8272\u503C\u4E0E\u5C5E\u6027\u503C\u7684\u8FD0\u7B97</li><li>\u63D0\u4F9B\u63A7\u5236\u6307\u4EE4 (control directives)\u7B49\u9AD8\u7EA7\u529F\u80FD</li><li>\u81EA\u5B9A\u4E49\u8F93\u51FA\u683C\u5F0F</li></ul><h2 id="\u57FA\u7840\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u683C\u5F0F" aria-hidden="true">#</a> \u57FA\u7840\u683C\u5F0F</h2><h3 id="\u9009\u62E9\u5668\u5D4C\u5957-nested-selector" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u5D4C\u5957-nested-selector" aria-hidden="true">#</a> \u9009\u62E9\u5668\u5D4C\u5957 (Nested Selector)</h3><p>\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u9009\u62E9\u5668\u8FDB\u884C\u5D4C\u5957\uFF0C\u53EF\u66F4\u65B9\u4FBF\u4E0E\u76F4\u89C2\u7684\u67E5\u770B\u4E0E\u7BA1\u7406\u9009\u62E9\u5668\u7684\u7236\u5B50\u7EA7\u5173\u7CFB</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
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

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7236\u9009\u62E9\u5668\u6DFB\u52A0\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u7236\u9009\u62E9\u5668\u6DFB\u52A0\u5185\u5BB9" aria-hidden="true">#</a> \u7236\u9009\u62E9\u5668\u6DFB\u52A0\u5185\u5BB9 &amp;</h3><p>\u6DFB\u52A0\u7B26\u53F7 \u201D&amp;\u201C \uFF0C\u8868\u793A\u5728\u8BE5\u7236\u5BB9\u5668\u540E\u9762\u6DFB\u52A0\u76F8\u5E94\u7684\u540E\u7F00\uFF0C\u53EF\u662F\u8BE5\u5143\u7D20\u7684\u67D0\u4E2A\u884C\u4E3A\u6216\u5176\u4ED6\u7B49\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
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

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u5D4C\u5957-nested-properties" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u5D4C\u5957-nested-properties" aria-hidden="true">#</a> \u5C5E\u6027\u5D4C\u5957 (Nested Properties)</h3><p>\u5C5E\u6027\u540D\u79F0\u524D\u90FD\u5177\u6709\u76F8\u540C\u7684\u5B57\u7B26\u65F6\uFF0C\u53EF\u4F7F\u7528\u5C5E\u6027\u5D4C\u5957\u7684\u65B9\u6CD5\u3002\u6CE8\uFF1Afont: {}\uFF0C\u5192\u53F7\u540E\u4E0E\u82B1\u62EC\u53F7\u4E2D\u95F4\u9700\u6709\u7A7A\u683C\u8FDB\u884C\u9694\u5F00</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token selector">font: </span><span class="token punctuation">{</span>
        <span class="token property">size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
        <span class="token property">family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
        <span class="token property">weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5360\u4F4D\u7B26\u9009\u62E9\u5668-foo" tabindex="-1"><a class="header-anchor" href="#\u5360\u4F4D\u7B26\u9009\u62E9\u5668-foo" aria-hidden="true">#</a> \u5360\u4F4D\u7B26\u9009\u62E9\u5668 <code>%foo</code></h3><p>\u6709\u65F6\u9700\u8981\u5B9A\u4E49\u4E00\u5957\u6837\u5F0F\uFF0C\u4F46\u5E76\u4E0D\u7ED9\u67D0\u4E2A\u5143\u7D20\u4F7F\u7528\uFF0C\u5FC5\u987B\u5728\u9700\u8981\u8C03\u7528\u7684\u65F6\u5019\u624D\u542F\u7528\u6B64\u6837\u5F0F\u5E93\uFF0C\u4F7F\u7528 \u201C%foo\u201D \u5360\u4F4D\uFF0C\u901A\u8FC7 \u201C@extend\u201D \u8FDB\u884C\u8C03\u7528\u3002%foo \u540D\u79F0\u53EF\u81EA\u5DF1\u5B9A\u4E49\uFF0C\u524D\u9762\u9700\u52A0\u4E0A\u7B26\u53F7 \u201C%\u201C</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
<span class="token selector">.button<span class="token placeholder">%buttonStyle</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u4EE5\u4E0A\u7684\u5B9A\u4E49\u4E0D\u4F1A\u7F16\u8BD1</span>
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

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><h4 id="\u53D8\u91CF\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u58F0\u660E" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u58F0\u660E</h4><p>\u4F7F\u7528\u7B26\u53F7 \u201C$\u201D \u5B9A\u4E49\u53D8\u91CF\uFF0C\u53D8\u91CF\u540D\u79F0\u53EF\u81EA\u5DF1\u547D\u540D\uFF0C\u8D4B\u503C\u65B9\u6CD5\u4E0E Css \u76F8\u540C\u3002\u5982\uFF1A\u201D$color: red;\u201D</p><p>\u53D8\u91CF\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528\u9700\u6709\u5148\u540E\u987A\u5E8F\uFF0C\u5373\u5148\u5B9A\u4E49\u53D8\u91CF\uFF0C\u7136\u540E\u518D\u4F7F\u7528\u53D8\u91CF\uFF0C\u4E66\u5199\u7684\u987A\u5E8F\u5219\u662F\u5C06\u5B9A\u4E49\u53D8\u91CF\u5199\u5728\u524D\u9762\uFF0C\u4F7F\u7528\u53D8\u91CF\u5199\u5728\u540E\u9762\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219</h3><ol><li>\u7528\u7B26\u53F7 \u201C$\u201D \u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u968F\u53D8\u91CF\u540D\u79F0\uFF1B</li><li>\u53D8\u91CF\u540D\u79F0\u9700\u4F7F\u7528\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E2D\u95F4\u53EF\u4F7F\u7528\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E2D\u6A2A\u7EBF\uFF08\u8FDE\u63A5\u7B26\uFF09\u3001\u4E0B\u5212\u7EBF\uFF1B</li><li>\u652F\u6301\u5927/\u5C0F\u5199\u5B57\u6BCD\u3002</li></ol><p>\u5982\u679C\u591A\u4E2A\u5355\u8BCD\u7684\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6A2A\u7EBF \u201C-\u201C\u3001\u4E0B\u5212\u7EBF \u201C_\u201D \u6216\u9A7C\u5CF0\u5F0F\u7684\u547D\u540D\u5F62\u5F0F\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u540C\u6837\u7684\u5355\u8BCD\uFF0C\u5206\u522B\u91C7\u7528\u6A2A\u7EBF\u4E0E\u4E0B\u5212\u7EBF\u6765\u8FDE\u63A5\uFF0C\u6B64\u540D\u79F0\u76F8\u5F53\u4E8E\u662F\u540C\u4E00\u4E2A\u540D\u79F0\uFF0C\u5728\u89E3\u6790\u65F6\uFF0C\u4F1A\u91C7\u7528\u6700\u540E\u4E00\u4E2A\u58F0\u660E\u7684\u53D8\u91CF\u6765\u89E3\u6790\u3002\u56E0\u6B64\u5728\u547D\u540D\u7684\u65F6\u5019\u5EFA\u8BAE\u7EDF\u4E00\u4F7F\u7528\u4E00\u4E2A\u7B26\u53F7\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// scss \u4EE3\u7801\u7F16\u8F91</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border_color</span></span><span class="token punctuation">:</span> #0ff<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$borderColor</span></span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border_color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E\u7684 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u4F5C\u7528\u57DF</h3><h4 id="\u5C40\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF</h4><p>\u5728\u9009\u62E9\u5668\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u8BE5\u9009\u62E9\u5668\u6216\u8BE5\u9009\u62E9\u5668\u7684\u5B50\u9009\u62E9\u5668\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// scss \u4EE3\u7801\u7F16\u8F91
.container {
    $font-size: 16px;
    font-size: $font-size;
    .wrapper {
        font-size: $font-size;
    }
}

// \u7F16\u8BD1\u540E\u7684 css
.container {
  font-size: 16px;
}

.container .wrapper {
  font-size: 16px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h4><p>\u5B9A\u4E49\u540E\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u5168\u5C40\u8303\u56F4\u5185\u4F7F\u7528\uFF0C\u5168\u5C40\u53D8\u91CF\u7684\u5B9A\u4E49\u6709\u4E24\u79CD\u5F62\u5F0F\uFF1A</p><p>1\u3001\u76F4\u63A5\u5B9A\u4E49\u5728\u6700\u5916\u9762\u7684\u53D8\u91CF\uFF0C\u5373\u662F\u5168\u5C40\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// scss \u4EE3\u7801\u7F16\u8F91
$font-size: 16px;
.container {
    font-size: $font-size;
}
.footer {
    font-size: $font-size;
}

// \u7F16\u8BD1\u540E\u7684 css
.container {
  font-size: 16px;
}

.footer {
  font-size: 16px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u5728\u9009\u62E9\u5668\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u540E\u9762\u589E\u52A0 \u201C!global\u201D\uFF0C\u6CE8\u610F\uFF0C!global \u9700\u6DFB\u52A0\u5728\u5206\u53F7\u524D\uFF0C\u4E0E\u53D8\u91CF\u503C\u4F7F\u7528\u7A7A\u683C\u5206\u5272\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// scss \u4EE3\u7801\u7F16\u8F91
.container {
    $font-size: 16px !global;
    font-size: $font-size;
}
.footer {
    font-size: $font-size;
}

// \u7F16\u8BD1\u540E\u7684 css
.container {
  font-size: 16px;
}

.footer {
  font-size: 16px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><p>Scss \u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B\uFF1A</p><ol><li>\u5B57\u7B26\u4E32\uFF08 \u6709\u5F15\u53F7\u6216\u65E0\u5F15\u53F7\u7684\u5B57\u7B26\u4E32 \uFF09\uFF1A\u201Dfoo\u201D, \u2018bar\u2019, baz, \u2026</li><li>\u6570\u5B57\uFF1A1, 2.5, 18px, 30%, 9a, \u2026</li><li>\u989C\u8272\uFF1Ablue, #00ff00, rgba(0, 0, 0, .1)</li><li>\u5E03\u5C14\u578B\uFF1Atrue, false</li><li>\u7A7A\u503C\uFF1Anull</li><li>\u6570\u7EC4 (list)\uFF0C \u7528\u9017\u53F7\u6216\u7A7A\u683C\u5206\u5272\uFF1A1em 2em 2.5em \u6216 Helvetica, Arial, sans-serif, \u2026</li><li>maps\uFF0C\u76F8\u5F53\u4E8E JavaScript \u4E2D\u7684 object\uFF1Akey1: value1, key2: value2, \u2026</li></ol><p>\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u65B9\u5F0F: type-of($value)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$layer-index: 10;
$font-base-family: &#39;Open Sans&#39;, Helvetica, sans-serif;
$top-bg-color: rgba(0,0,0,.1);
$block-base-padding: 6px 10px 6px 10px;
$blank-mode: true;
$var: null //\u503Cnull\u662F\u5176\u7C7B\u578B\u7684\u552F\u4E00\u503C\u3002\u4ED6\u8868\u793A\u7F3A\u5C11\u503C\uFF0C\u901A\u5E38\u7531\u51FD\u6570\u8FD4\u56DE\u4EE5\u6307\u793A\u7F3A\u5C11\u7ED3\u679C
$color-map: (color1: #f00, color2: #0f0, color3: #00f);
$fonts: (serif: &quot;Helvetica Neue&quot;, monospace: &quot;Consolas&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u7B26\u4E32-strings" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32-strings" aria-hidden="true">#</a> \u5B57\u7B26\u4E32 (Strings)</h3><p>\u652F\u6301\u6709\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\u4E0E\u65E0\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\uFF0C\u6709\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\uFF0C\u65E0\u8BBA\u5355\u5F15\u53F7\u8FD8\u662F\u53CC\u5F15\u53F7\uFF0C\u7F16\u8BD1\u540E\u90FD\u4E3A\u53CC\u5F15\u53F7\uFF0C\u65E0\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\u7F16\u8BD1\u540E\u540C\u6837\u6CA1\u6709\u5F15\u53F7\u3002\u5982\u679C\u4E00\u6BB5\u8BDD\u7531\u591A\u4E2A\u5355\u8BCD\u7EC4\u6210\uFF0C\u5E76\u4E14\u5305\u542B\u7A7A\u683C\uFF0C\u9700\u8981\u5C06\u5F15\u53F7\u52A0\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// scss \u4EE3\u7801\u7F16\u8F91
$string1: &quot;Sample 1&quot;;
$string2: &#39;Sample 2&#39;;
$string3: red;
body {
    content: $string1;
    content: $string2;
    color: $string3;
}

// \u7F16\u8BD1\u540E\u7684 css
body {
  content: &quot;Sample 1&quot;;
  content: &quot;Sample 2&quot;;
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u5B57-numbers" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57-numbers" aria-hidden="true">#</a> \u6570\u5B57 (Numbers)</h3><ol><li>\u652F\u6301\u6570\u5B57\u6216\u5E26\u5355\u4F4D\u7684\u6570\u5B57\uFF0C</li><li>\u652F\u6301\u6574\u6570\u6216\u5C0F\u6570</li><li>\u652F\u6301\u6B63\u6570\u4E0E\u8D1F\u6570</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$number1: 30;
$number2: 6.9;
$number3: 16px;
$number4: 32a; // \u4E0D\u89C4\u8303\uFF0C\u4F46\u4E0D\u4F1A\u62A5\u9519
// \u6CE8\uFF1A\u6570\u5B57\u540E\u63A5\u7684\u4EFB\u4F55\u5B57\u6BCD\u90FD\u4F1A\u89C6\u4E3A\u5355\u4F4D\uFF0C\u5355\u4F4D\u4F1A\u548C\u6570\u5B57\u5F53\u4F5C\u4E00\u4E2A\u6574\u4F53\u8FDB\u884C\u8BA1\u7B97
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u989C\u8272-colors" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272-colors" aria-hidden="true">#</a> \u989C\u8272 (Colors)</h3><p>Css \u539F\u6709\u989C\u8272\u7C7B\u578B\uFF0C\u5305\u62EC\u5341\u516D\u8FDB\u5236\u3001RGB\u3001RGBA\u3001HSL\u3001HSLA\u548C\u8272\u5F69\u5355\u8BCD</p><h3 id="\u5E03\u5C14\u578B-booleans" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u578B-booleans" aria-hidden="true">#</a> \u5E03\u5C14\u578B (Booleans)</h3><p>\u53EA\u6709\u4E24\u4E2A\u503C \u201Ctrue\u201D \u548C \u201Cfalse\u201D\uFF0C\u53EA\u6709\u81EA\u8EAB\u662F false \u6216 null \u624D\u4F1A\u8FD4\u56DE false\uFF0C\u5176\u4ED6\u4E00\u5207\u90FD\u4F1A\u8FD4\u56DE true\uFF0C\u4E3B\u8981\u7528\u4E8E\u903B\u8F91\u5224\u65AD\u3002</p><h3 id="\u7A7A\u503C-null" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C-null" aria-hidden="true">#</a> \u7A7A\u503C (Null)</h3><p>\u53EA\u6709\u4E00\u4E2A\u503C \u201Cnull\u201D\uFF0C\u5982 \u201C$name: null;\u201D\u3002\u7531\u4E8E\u4ED6\u4E3A\u7A7A\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F7F\u7528\u5B83\u4E0E\u4EFB\u4F55\u7C7B\u578B\u8FDB\u884C\u8FD0\u7B97\uFF0C\u4E3B\u8981\u7528\u4E8E\u903B\u8F91\u5224\u65AD\u3002</p><h3 id="\u6570\u7EC4-lists" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-lists" aria-hidden="true">#</a> \u6570\u7EC4 (Lists)</h3><p>\u901A\u8FC7\u7A7A\u683C\u6216\u534A\u89D2\u9017\u53F7\u5206\u5272\u7684\u4E00\u7CFB\u5217\u7684\u503C\uFF0C\u6570\u7EC4\u4E2D\u8FD8\u53EF\u4EE5\u5305\u542B\u5B50\u6570\u7EC4\uFF0C\u5982\u4E0B\u65B9\u7684 \u201C$list2\u201D \u548C \u201C$list3\u2033\uFF0C\u5F53\u6570\u7EC4\u88AB\u7F16\u8BD1\u4E3A css \u65F6\uFF0C\u5706\u62EC\u53F7\u4E0D\u4F1A\u88AB\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$list1: 1px 2px 3px 4px; //\u4E00\u7EF4\u6570\u5B57
$list2: 1px 2px, 3px 4px; //\u4E8C\u7EF4\u6570\u5B57
$list3: (1px 2px) (3px 4px); //\u4E8C\u7EF4\u6570\u5B57
// \u6307\u5B9A\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u503C\u8FDB\u884C\u8C03\u7528
nth( $list, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6620\u5C04-maps" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04-maps" aria-hidden="true">#</a> \u6620\u5C04 (Maps)</h3><p>Maps \u5FC5\u987B\u88AB\u5706\u62EC\u53F7\u5305\u88F9\uFF0C\u53EF\u4EE5\u6620\u5C04\u4EFB\u4F55\u952E\u503C\u5BF9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$map: (
  key1: value1,
  key2: value2,
  key3: value3
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6620\u5C04\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04\u51FD\u6570" aria-hidden="true">#</a> \u6620\u5C04\u51FD\u6570\uFF1A</h4><p>\u8FD4\u56DE Map \u4E2D key \u6240\u5BF9\u5E94\u7684\u503C( value )\u3002\u5982\u6CA1\u6709\u5BF9\u5E94\u7684 key\uFF0C\u5219\u8FD4\u56DE null \u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-get(map, key)

$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-get($font-sizes, &quot;small&quot;)
\u7ED3\u679C: 12px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD map \u662F\u5426\u6709\u5BF9\u5E94\u7684 key\uFF0C\u5B58\u5728\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-has-key(map, key)

\u5B9E\u4F8B:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-has-key($font-sizes, &quot;big&quot;)
\u7ED3\u679C: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE map \u4E2D\u6240\u6709\u7684 key \u7EC4\u6210\u7684\u961F\u5217</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-keys(map)

\u5B9E\u4F8B:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-keys($font-sizes)
\u7ED3\u679C: &quot;small&quot;, &quot;normal, &quot;large&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5408\u5E76\u4E24\u4E2A map \u5F62\u6210\u4E00\u4E2A\u65B0\u7684 map \u7C7B\u578B\uFF0C\u5373\u5C06 <em>map2</em> \u6DFB\u52A0\u5230 <em>map1</em>\u7684\u5C3E\u90E8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-merge(map1, map2)

\u5B9E\u4F8B:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
$font-sizes2: (&quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px)
map-merge($font-sizes, $font-sizes2)
\u7ED3\u679C: &quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px, &quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u79FB\u9664 <em>map</em> \u4E2D\u7684 keys\uFF0C\u591A\u4E2A key \u4F7F\u7528\u9017\u53F7\u9694\u5F00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-remove(map, keys...)

\u5B9E\u4F8B:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-remove($font-sizes, &quot;small&quot;)
\u7ED3\u679C: (&quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-remove($font-sizes, &quot;small&quot;, &quot;large&quot;)
\u7ED3\u679C: (&quot;normal&quot;: 18px)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE <em>map</em> \u4E2D\u6240\u6709\u7684 value \u5E76\u751F\u6210\u4E00\u4E2A\u961F\u5217</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map-values(map)

\u5B9E\u4F8B:
$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)
map-values($font-sizes)
\u7ED3\u679C: 12px, 18px, 24px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BFC\u5165-scss-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165-scss-\u6587\u4EF6" aria-hidden="true">#</a> \u5BFC\u5165 .scss \u6587\u4EF6</h3><p>\u5BFC\u5165 .scss \u6587\u4EF6\u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528 @import \u201D \u8FDB\u884C\u5BFC\u5165\uFF0C\u6587\u4EF6\u540D\u53EF\u4EE5\u6709 .scss \u540E\u7F00\uFF0C\u4E5F\u53EF\u4EE5\u7701\u7565</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u65B9\u6CD51
@import &#39;main.scss&#39;;

// \u65B9\u6CD52
@import &#39;main&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u5BFC\u5165\u7684 .scss \u6587\u4EF6\uFF0C\u7531\u4E8E\u8BE5\u6587\u4EF6\u5185\u7684\u4EE3\u7801\u4F1A\u91CD\u65B0\u5728\u53D1\u751F\u5BFC\u5165\u7684\u6587\u4EF6\u4E2D\u751F\u6210\uFF0C\u6240\u4EE5\u65E0\u9700\u518D\u5355\u72EC\u751F\u6210\u4E00\u4E2A\u88AB\u5BFC\u5165\u7684\u6587\u4EF6\u7684 .css \u6587\u4EF6\uFF0C\u89E3\u51B3\u7684\u65B9\u6CD5\u662F\u5728\u88AB\u5BFC\u5165\u7684\u6587\u4EF6\u540D\u524D\u589E\u52A0\u4E00\u4E2A\u4E0B\u5212\u7EBF \u201C_\u201D \u7684\u7B26\u53F7\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u8BE5\u6587\u4EF6\u4E0D\u4F1A\u88AB\u91CD\u65B0\u751F\u6210 .css \u6587\u4EF6\uFF0C\u800C\u5728\u5BFC\u5165\u8BE5\u6587\u4EF6\u65F6\uFF0C\u524D\u9762\u7684\u4E0B\u5212\u7EBF\u53EF\u4EE5\u5199\u5165\u4E5F\u53EF\u4EE5\u7701\u7565\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\u5C06\u5BFC\u5165\u4E00\u4E2A\u540D\u4E3A \u201C_main.scss\u201D \u7684\u6587\u4EF6
// \u65B9\u6CD51
@import &#39;main&#39;;

// \u65B9\u6CD52
@import &#39;_main&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u5165\u6587\u4EF6\u540C\u6837\u4E5F\u53EF\u4EE5\u5199\u5165\u9009\u62E9\u5668\u4E2D\uFF0C\u5199\u5165\u9009\u62E9\u5668\u540E\uFF0C\u5BFC\u5165\u7684\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u53D8\u91CF\u5C06\u53EA\u9002\u7528\u4E8E\u8BE5\u9009\u62E9\u5668\uFF0C\u540C\u65F6\u5BFC\u5165\u7684\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u9009\u62E9\u5668\u524D\u4E5F\u4F1A\u589E\u52A0\u53D1\u751F\u5BFC\u5165\u7684\u9009\u62E9\u5668\u524D\u7684\u540D\u79F0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.container {
    @import &#39;main&#39;;
    color: $color; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BFC\u5165\u666E\u901A\u7684-css-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u666E\u901A\u7684-css-\u6587\u4EF6" aria-hidden="true">#</a> \u5BFC\u5165\u666E\u901A\u7684 .css \u6587\u4EF6</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF0C\u53EA\u4F1A\u5C06\u6587\u4EF6\u4F5C\u4E3A\u666E\u901A\u7684 css \u8BED\u53E5\u8FDB\u884C\u5F15\u5165</p><ol><li>\u6587\u4EF6\u62D3\u5C55\u540D\u4E3A .css</li><li>\u6587\u4EF6\u540D\u4EE5 http:// \u6216 https:// \u5F00\u5934</li><li>\u6587\u4EF6\u7531 url() \u7684\u5F62\u5F0F\u5F15\u5165</li><li>@import \u5305\u542B media queries</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@import &#39;main.css&#39;;
@import &#39;http://puji.design/main.css&#39;;
@import url(main);
@import &#39;landscape&#39; screen and (orientation: landscape);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u91C7\u7528 @import \u2018main.css\u2019 \u8FD9\u79CD\u5F62\u5F0F\u5F15\u5165\u6587\u4EF6\uFF0C\u7F16\u8BD1\u540E\uFF0C\u6587\u4EF6\u5730\u5740\u5C06\u4E3A\u8BA1\u7B97\u673A\u7684\u7EDD\u5BF9\u5730\u5740\uFF0C\u8FD9\u6837\u7684\u5F15\u5165\u5F62\u5F0F\u614E\u7528\uFF0C\u5EFA\u8BAE\u91C7\u7528 @import url(main) \u7684\u65B9\u5F0F\u3002</p>`,84),t=[l];function p(c,o){return s(),a("div",null,t)}var u=n(i,[["render",p],["__file","Scss.html.vue"]]);export{u as default};
