---
lang: en-US
title: Vefþjónustur
description: Leiðbeiningar fyrir Skútuna
---

# Vefþjónustur
[API skjölun](https://skutantest.samgongustofa.is/api/v1/)
> 'https://skutantest.samgongustofa.is/api/v1/ship-types'




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

::: tip Ábending
Fyrir notendur Landhelgisgæslunnar - smellið hér
:::

## Yfirlit skírteina


:::: code-group
::: code-group-item SKIP
```js
const foo = 'foo'
```
:::
::: code-group-item LÖGSKRÁNINGAR
```js
[HttpGet("words")]
[ProducesResponseType(typeof(List<StringSegment>), 200)]
[ProducesResponseType(typeof(BadArgumentInfo), 400)]
public IActionResult GetFancySoundingWords([FromQuery] int limit)
{
    if (limit > 500)
    {
        return BadRequest(new BadArgumentInfo
        {
            Argument = nameof(limit),
            Message = "Limit cannot exceed 500"
        });
    }
    
    var words = _scienceManager.GetScienceyWords(limit);
    return Ok(words.ToList());
}
```
:::
::::

<!-- Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component: -->


```json
{
  "shipID": "3030",
  "shipName": "Skipanafn",
  "imo": "3093020",
  "cert-haffaeri": "valid"
}
```


```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

Fá upplýsingar frá Hannesi <Badge text="TODO" />

## Tengingar

## API köll

## TODO




