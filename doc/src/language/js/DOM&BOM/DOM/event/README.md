# 事件(Event)
## 阻止事件冒泡
```js
// jQuery
$el.click(event => {
  event.stopPropagation()
})


// Vue
// <div @click.stop="xxx"></div>


// 或

handler(event => {
  event.stopPropagation()
})


// React

// <div onClick={(event) => {
//   event.stopPropagation()
//   event.nativeEvent.stopImmediatePropagation()
// }}></div>
```

## 阻止元素的默认行为
```js
// jQuery

$el.click(event => {
  event.preventDefault()
})


// Vue

// <div @click.prevent="xxx"></div>

// 或

handler(event => {
  event.preventDefault()
})
```

## 常用按键的Char Codes
```js
// event.keyCode

// * 回车 13
// * 上箭头 38
// * 下箭头 40
```
[更多 Char Code](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)。