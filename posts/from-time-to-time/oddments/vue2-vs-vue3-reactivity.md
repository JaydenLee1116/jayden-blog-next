---
emoji: 📦
title: Vue 2 vs Vue 3 - Reactivity
date: '2023-11-24 23:30:00'
author: 제이든
tags: Vue
categories: 잡동사니
thumbnail: /images/thumbnails/boxes.png
---

## 📦 잡동사니

하나의 키워드를 잡고 좀 편하게 정리하고 싶어 만든 `잡동사니`

> 잡동사니는 조선 후기 학자 `안정복`이 편찬한 `잡동산이(雜同散異)`에서 유래된 말이다.
>
> 잡동산이는 `잡기(雜記)`의 형태를 빌려온 책으로 구체적인 체계가 잡혀있지 않은 형식이다.
>
> 항목이 다소 난잡하고 내용의 구분이 혼동되어있다고 한다. 🤣

## Reactivity(반응성)

Vue는 `반응성(Reactivity)`이라는 개념을 가지고 있다. 이는 Vue의 핵심이라고 할 수 있는데, 이를 통해 데이터의 변화를 감지하고 자동으로 화면을 갱신할 수 있다. 이를 통해 개발자는 데이터의 변화를 직접 감지하고 화면을 갱신하는 코드를 작성할 필요가 없게 된다.

먼저 아주 간단한 예제를 통해 Vue의 반응성을 살펴보자.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue;

  const App = {
    data() {
      return {
        message: 'Hello Vue!',
      };
    },
  };

  createApp(App).mount('#app');
</script>
```

위 코드를 실행시켜보면 vue에서 제공하는 `data()` 함수를 통해 `message`라는 데이터를 정의하고, 이를 화면에 렌더링하는 것을 확인할 수 있다. 이때 `message`의 값이 변경되면 화면에 렌더링된 `message`의 값도 자동으로 변경되는 것을 확인할 수 있다. 이는 Vue의 반응성을 통해 가능한 일이다.

그렇다면 Vue는 이와 같은 반응성을 어떻게 구현하고 있을까? Vue2와 Vue3의 반응성 구현 방식을 간단하게 비교해보자.

### Vue2 - Object.defineProperty

![vue2-reactivity](https://v2.vuejs.org/images/data.png)

Vue2에서는 `Object.defineProperty`를 사용하여 반응성을 구현한다. 이는 `getter`와 `setter`를 사용하여 객체의 속성에 접근할 때마다 `getter`와 `setter`를 호출하게 된다. 이를 통해 객체의 속성에 접근할 때마다 `getter`와 `setter`를 호출하여 객체의 변화를 감지하고 화면을 갱신할 수 있다.

```html
<div id="app"></div>

<script>
  const appEl = document.querySelector('#app');
  function render(innerValue) {
    appEl.innerHTML = innerValue;
  }

  const data = {
    message: 'hello, vue2! hello, jayden!',
  };

  const dataCopy = { ...data };

  const handler = {
    get() {
      console.log('defineProperty getter');
      return dataCopy.message;
    },
    set(value) {
      console.log('defineProperty setter');
      dataCopy.message = value;
      render(value);
    },
  };

  Object.defineProperty(data, 'message', handler);
</script>
```

위 코드를 실행시켜보면 `message`의 값을 변경할 때마다 `getter`와 `setter`가 호출되는 것을 확인할 수 있다. 이를 통해 `message`의 값이 변경되면 화면에 렌더링된 `message`의 값도 자동으로 변경되는 것을 확인할 수 있다.
그런데 이 방법에는 한계가 존재한다. `Object.defineProperty`는 객체의 속성을 정의할 때만 동작하기 때문에 객체의 속성이 추가되거나 삭제되는 것을 감지할 수 없다. 즉, 정의해둔 `message`의 값이 변경되는 것은 감지할 수 있지만, `message`의 값이 아닌 다른 속성의 값이 변경되는 것은 감지할 수 없다는 것이다.

> 이 때, `dataCopy`를 둔 이유는 `data`의 `message` 속성에 접근할 때마다 `getter`와 `setter`가 호출되기 때문에 `data`의 `message` 속성에 접근할 때마다 `data`의 `message` 속성의 값이 변경되는 것을 방지하기 위함이다.
>
> 정확히 vue2의 내부 구현은 아니지만, 이를 통해 vue2의 반응성이 어떻게 동작하는지 이해할 수 있다.

### Vue3 - Proxy

Vue3에서는 `Proxy`를 사용하여 반응성을 구현한다. 이는 `getter`와 `setter`를 사용하여 객체의 속성에 접근할 때마다 `getter`와 `setter`를 호출하게 된다. 이를 통해 객체의 속성에 접근할 때마다 `getter`와 `setter`를 호출하여 객체의 변화를 감지하고 화면을 갱신할 수 있다. 또한, `Proxy`는 객체의 속성이 추가되거나 삭제되는 것도 감지할 수 있다.

```html
<div id="app"></div>

<script>
  const appEl = document.querySelector('#app');

  function render(innerValue) {
    appEl.innerHTML = innerValue;
  }

  const data = {};

  const handler = {
    get(target, prop) {
      console.log('proxy getter');
      return target[prop];
    },
    set(target, prop, value) {
      console.log('proxy setter');
      target[prop] = value;
      render(value);
    },
  };

  const proxyData = new Proxy(data, handler);
</script>
```

> 정확히 vue3의 내부 구현은 아니지만, 이를 통해 vue3의 반응성이 어떻게 동작하는지 이해할 수 있다.
>
> `Proxy`는 `Object.defineProperty`와 달리 `data`의 `message` 속성에 접근할 때마다 `getter`와 `setter`가 호출되지 않는다. 이는 `Proxy`가 `data`를 감싸고 있기 때문에 `data`의 `message` 속성에 접근할 때마다 `Proxy`의 `getter`와 `setter`가 호출되기 때문이다.
>
> 또한, `Proxy`의 `handler`에서 `get`과 `set`은 `target`과 `prop`을 인자로 받는다. `target`은 `Proxy`가 감싸고 있는 `data`이고, `prop`은 `data`의 속성이다. 이를 통해 `Proxy`의 `handler`에서 `target`과 `prop`을 사용하여 `data`의 속성에 접근할 수 있다. 이 부분이 `Object.defineProperty`와 다르게 의존성 주입을 통해 `data`의 속성에 접근할 수 있게 했다.

# 📝 회고

Vue2와 Vue3의 반응성 구현 방식을 간단하게 비교해보았다. Vue2에서는 `Object.defineProperty`를 사용하여 반응성을 구현하고, Vue3에서는 `Proxy`를 사용하여 반응성을 구현한다. 이를 통해 Vue3는 Vue2보다 더욱 강력한 반응성을 제공한다는 것을 알 수 있었다. 아주 기초적인 구현이긴 하지만, Vue가 어떻게 동작하고 그 내부의 반응성이 어떻게 구현되어있는지 이해하는데 도움이 되었다.

## 참고

- [Vue2 - reactivity](https://v2.vuejs.org/v2/guide/reactivity.html)
- [Vue3 -reactivity](https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity)
