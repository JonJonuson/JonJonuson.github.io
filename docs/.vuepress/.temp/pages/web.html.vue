<template><div><h1 id="vefþjonustur" tabindex="-1"><a class="header-anchor" href="#vefþjonustur" aria-hidden="true">#</a> Vefþjónustur</h1>
<p><a href="https://skutantest.samgongustofa.is/api/v1/" target="_blank" rel="noopener noreferrer">API skjölun<ExternalLinkIcon/></a></p>
<blockquote>
<p>'https://skutantest.samgongustofa.is/api/v1/ship-types'</p>
</blockquote>
<!-- Notandi: {{ msg }}

<RedDiv>

Teljari: _{{ count }}_

</RedDiv>

<button @click="count++">Næsta</button>

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
</style> -->
<!-- | Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | -->
<div class="custom-container tip"><p class="custom-container-title">Ábending</p>
<p>Fyrir notendur Landhelgisgæslunnar - smellið hér</p>
</div>
<h2 id="yfirlit-skirteina" tabindex="-1"><a class="header-anchor" href="#yfirlit-skirteina" aria-hidden="true">#</a> Yfirlit skírteina</h2>
<CodeGroup>
<CodeGroupItem title="SKIP">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="LÖGSKRÁNINGAR">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token function">HttpGet</span><span class="token punctuation">(</span><span class="token string">"words"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token function">ProducesResponseType</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>StringSegment<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token function">ProducesResponseType</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>BadArgumentInfo<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> IActionResult <span class="token function">GetFancySoundingWords</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>FromQuery<span class="token punctuation">]</span> int limit</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>limit <span class="token operator">></span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">BadRequest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BadArgumentInfo</span>
        <span class="token punctuation">{</span>
            Argument <span class="token operator">=</span> <span class="token function">nameof</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">,</span>
            Message <span class="token operator">=</span> <span class="token string">"Limit cannot exceed 500"</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">var</span> words <span class="token operator">=</span> _scienceManager<span class="token punctuation">.</span><span class="token function">GetScienceyWords</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">Ok</span><span class="token punctuation">(</span>words<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<!-- Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component: -->
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"shipID"</span><span class="token operator">:</span> <span class="token string">"3030"</span><span class="token punctuation">,</span>
  <span class="token property">"shipName"</span><span class="token operator">:</span> <span class="token string">"Skipanafn"</span><span class="token punctuation">,</span>
  <span class="token property">"imo"</span><span class="token operator">:</span> <span class="token string">"3093020"</span><span class="token punctuation">,</span>
  <span class="token property">"cert-haffaeri"</span><span class="token operator">:</span> <span class="token string">"valid"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fá upplýsingar frá Hannesi <Badge text="TODO" /></p>
<h2 id="tengingar" tabindex="-1"><a class="header-anchor" href="#tengingar" aria-hidden="true">#</a> Tengingar</h2>
<h2 id="api-koll" tabindex="-1"><a class="header-anchor" href="#api-koll" aria-hidden="true">#</a> API köll</h2>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
</div></template>
