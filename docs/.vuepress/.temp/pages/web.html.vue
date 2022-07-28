<template><div><h1 id="vefþjonustur" tabindex="-1"><a class="header-anchor" href="#vefþjonustur" aria-hidden="true">#</a> Vefþjónustur</h1>
<p><a href="https://skutantest.samgongustofa.is/api/v1/" target="_blank" rel="noopener noreferrer">API skjölun<ExternalLinkIcon/></a></p>
<blockquote>
<p>'https://skutantest.samgongustofa.is/api/v1/ship-types'</p>
</blockquote>
<p>Notandi: {{ msg }}</p>
<RedDiv>
<p>Teljari: <em>{{ count }}</em></p>
</RedDiv>
<p><button @click="count++">Næsta</button></p>
<!-- | Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | -->
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Fyrir notendur Landhelgisgæslunnar - smellið hér</p>
</div>
<h2 id="yfirlit-skirteina" tabindex="-1"><a class="header-anchor" href="#yfirlit-skirteina" aria-hidden="true">#</a> Yfirlit skírteina</h2>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html" target="_blank" rel="noopener noreferrer">universal code requirements<ExternalLinkIcon/></a>. In short, make sure to only access Browser / DOM APIs in <code v-pre>beforeMount</code> or <code v-pre>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code v-pre>&lt;ClientOnly&gt;</code> component:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is default theme built-in <code v-pre>&lt;Badge /&gt;</code> component <Badge text="demo" /></p>
<h2 id="tengingar" tabindex="-1"><a class="header-anchor" href="#tengingar" aria-hidden="true">#</a> Tengingar</h2>
<h2 id="api-koll" tabindex="-1"><a class="header-anchor" href="#api-koll" aria-hidden="true">#</a> API köll</h2>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
</div></template>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'SGS077'
const count = ref(0)
</script>

<style>
.red-div {
  color: teal;
}
button {
  padding: 14px;
  border: 0;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 3px;
  background: #eee;
  color: navy;
  text-transform: uppercase;
}
</style>
