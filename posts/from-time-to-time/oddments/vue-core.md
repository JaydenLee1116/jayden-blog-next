---
emoji: 📦
title: Vue Core
date: '2023-12-18 23:30:00'
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

## Vue 라이프 사이클

뷰의 인스턴스(Instance) 혹은 컴포넌트(Component)가 생성되어 소멸되기까지 거치는 모든 과정

과정을 순서대로 간단하게 살펴보면 아래와 같다.

1. data 초기화 및 관찰 ⇒ `Reactivity` 주입
2. 뷰 템플릿 코드 컴파일 ⇒ Virtual DOM에서 DOM으로 변환
3. 뷰 인스턴스를 실제 DOM에 부착
4. 그 뒤 data의 변경에 따른 인스턴스 업데이트
5. 인스턴스 소멸

Vue의 라이프 사이클을 알아야하는 이유는 인스턴스의 라이프 사이클 중간중간에 어떤 로직을 개입 혹은 호출할 수 있도록 해주는 api를 제공하기 때문이다.

- Vue 2 기준 라이프 사이클 및 옵션 속성

![Vue LifeCycle](https://joshua1988.github.io/vue-camp/assets/img/lifecycle.dcbe29f6.png)

- Vue 3 기준 라이프 사이클 및 훅(라이프 사이클 API)

| Vue 2 Options api | Vue 3 라이프사이클 API    | 비고                                 |
| ----------------- | ------------------------- | ------------------------------------ |
| beforeCreate      | setup 내부 코드 실행 시점 | Vue 3는 따로 API 없음                |
| created           | setup 내부 코드 실행 시점 | Vue 3는 따로 API 없음                |
| beforeMount       | onBeforeMount             |                                      |
| mounted           | onMounted                 |                                      |
| beforeUpdate      | onBeforeUpdate            |                                      |
| updated           | onUpdated                 |                                      |
| beforeDestroy     | onBeforeUnmount           | destory 라는 표현이 unmount로 변경됨 |
| destroyed         | onUnmounted               | destory 라는 표현이 unmount로 변경됨 |
| errorCaptured     | onErrorCaptured           |                                      |

## Vue ref, reactive 차이

ref와 reactive 모두 data에 `반응성(reactivity)`을 주입하는 API이다.

물론 정해진 규칙은 아니지만, 일반적으로 아래와 같이 구분지어 사용한다.

- ref: `primitive type` 데이터에 대한 반응성(reactivity)을 주입한다.

  ```html
  <script setup>
    import { ref } from 'vue';
    const count = ref(0);
  </script>

  <template>
    <h1>테스트</h1>
    <div>{{ count }}</div>
    <input v-model="count" />
  </template>
  ```

- reactive: `object type` 데이터에 대한 반응성(reactivity)을 주입한다.

  ```html
  <script setup>
    import { reactive } from 'vue';
    const state = reactive({
      count: 0,
    });
  </script>

  <template>
    <h1>테스트</h1>
    <div>{{ state.count }}</div>
    <input v-model="state.count" />
  </template>
  ```

이 때, `reactive`의 경우 객체의 속성에 반응성(reactivity)을 주입하는 만큼, deep하게 반응성을 주입한다. 즉, 객체 내부에 객체가 있을 경우, 그 객체 내부의 값까지 반응성을 갖도록 한다. 아래는 그 예시 코드이다.

```html
<script setup>
  import { reactive } from 'vue';
  const state = reactive({
    middle: {
      count: 0,
    },
  });
</script>

<template>
  <h1>테스트</h1>
  <div>{{ state.middle.count }}</div>
  <input v-model="state.middle.count" />
</template>
```

### 의문점: template에서 value를 붙여줘야하는 ref를 쓰지않고 언제나 reactive를 사용하면 좋은 거 아닐까?

1. 참조 타입이 아닌 데이터에 대해서 굳이 참조 타입 데이터를 만들어서 단일 데이터를 선언하는 것은 메모리 낭비가 될 수 있다.
2. reactive는 참조 타입 내부의 값들에 대해 deep하게 반응성을 주입하게 되어있기 때문에 deep하게 들어가기 위한 로직이 사용된다. 즉, 무작정 reactive를 사용하는 것은 성능에 좋지 않을 수 있다.

## Vue.js의 computed

`computed`는 Vue.js에서 계산된 값을 사용할 때 사용한다. 즉, 특정 데이터를 계산하여 사용할 때 사용한다. 예를 들어, `count`라는 데이터가 있고 이 데이터를 2배로 계산하여 사용하고 싶다면 아래와 같이 `computed`를 사용하면 된다.

```html
<script setup>
  import { ref, computed } from 'vue';
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <h1>테스트</h1>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <input v-model="count" />
</template>
```

## Vue.js의 methods

`methods`는 Vue.js에서 특정 로직을 실행할 때 사용한다. 예를 들어, 버튼을 클릭했을 때 특정 로직을 실행하고 싶다면 아래와 같이 `methods`를 사용하면 된다.

```html
<script setup>
  import { ref } from 'vue';
  const count = ref(0);
  const doubleCount = ref(0);
  const increaseCount = () => {
    count.value++;
  };
  const decreaseCount = () => {
    count.value--;
  };
  const calculateDoubleCount = () => {
    doubleCount.value = count.value * 2;
  };
</script>

<template>
  <h1>테스트</h1>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="increaseCount">증가</button>
  <button @click="decreaseCount">감소</button>
  <button @click="calculateDoubleCount">계산</button>
</template>
```

### Vuejs의 methods vs computed

아래의 코드를 보면 2가지 모두 같은 결과를 내는 것을 볼 수 있다.

```html
<script setup>
  import { ref, computed } from 'vue';
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const getDouble = () => count.value * 2;
</script>

<template>
  <h1>테스트</h1>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <div>{{ getDouble() }}</div>
  <input v-model="count" />
</template>
```

하지만 `computed`는 특정 데이터를 계산하여 사용할 때 사용하고, `methods`는 특정 로직을 실행할 때 사용한다. 즉, `computed`는 특정 데이터를 계산하여 사용할 때 사용하고, `methods`는 특정 로직을 실행할 때 사용한다.

그럼에도 굳이 특정 반응성을 갖는 값을 통해 어떤 값을 반환하는 `methods`를 사용하지 않고 `computed`라는 api가 존재하는 이유는 뭘까? 그 이유는 아래와 같다.

1. 캐싱과 종속성 관리

- computed: Vue는 computed 속성의 값들을 자동으로 캐싱하고, 의존성 추적(dependency tracking)을 통해 해당 값이 변경될 때만 다시 계산한다. 즉, 성능 향상에 도움이 되며, 필요한 경우에만 계산을 수행하게 된다.

- methods: 메소드는 호출될 때마다 항상 다시 계산된다. 같은 결과를 얻을 수 있지만, 불필요한 계산을 하게 된다.

2. 템플릿에서의 사용

- computed: 템플릿에서 doubleCount를 사용할 때 마치 데이터 속성처럼 사용할 수 있다. 또한, Vue는 자동으로 의존성을 추적하고 해당 값이 변경될 때만 자동으로 업데이트한다.

- methods: 메소드를 호출할 때마다 해당 값을 계산하므로, 템플릿에서는 메소드 호출의 형태로 값을 가져와야 한다.

## v-model

어떤 상태(반응형 데이터)와 화면(뷰)를 양방향 바인딩시켜주는 디렉티브이다. 즉, 상태와 화면이 항상 일치하도록 해준다.

input에 입력한 값을 즉시 화면에 반영하는 컴포넌트를 개발한다고 가정한다.

### 1. v-model을 사용하지 않는 경우

```html
<script setup>
  import { ref } from 'vue';
  const text = ref('');
  const handleInputText = event => {
    text.value = event.target.value;
  };
</script>

<template>
  <div>{{ text }}</div>
  <input :value="text" @input="handleInputText($event)" />
</template>
```

1.  `:value` 로 script의 `text` 값을 화면에 해당하는 template에 바인딩해주고 (데이터 → 뷰 바인딩)
2.  `@input` 이벤트에 핸들러 함수를 전달함으로써 화면에서 일어나는 인터렉션에 따라 script의 `text` 값을 변경(즉, 바인딩)해주고 있다. (뷰 → 데이터 바인딩)

### 2. v-model을 사용한 경우

```html
<script setup>
  import { ref } from 'vue';
  const text = ref('');
</script>

<template>
  <div>{{ text }}</div>
  <input v-model="text" />
</template>
```

위와 같이 훨씬 더 간결하게 데이터와 뷰를 바인딩하는 것을 볼 수 있다.

## 템플릿 참조를 위한 ref

특정 DOM 혹은 컴포넌트에 직접 접근하기 위해 사용하는 속성이다.

`<script setup>` 기준으로 아래와 같이 사용할 수 있다.

```html
<script setup>
  import { onMounted, ref } from 'vue';

  const targetEl = ref(null);
  console.log('setup 후 입니다.');
  console.log(targetEl);
  onMounted(() => {
    console.log('mount 직후입니다.');
    console.log(targetEl);
  });
</script>

<template>
  <h1>테스트</h1>
  <div ref="targetEl">target 입니다.</div>
</template>
```

위의 코드 실행 결과로 찍힌 로그값을 확인해보자.

![콘솔 3개 사진](/images/posts/from-time-to-time/oddments/vue-core/1.png)

즉, 위와 같이 아직 element가 마운트되기 전에는 \_rawValue, \_value의 값이 null인 것을 확인할 수 있다.

반면에 `onMounted` 에서 실행는 콜백함수의 로그값에는 div가 있는 것을 확인할 수 있다.

즉, mount가 된 직후(실제 DOM element가 생성된 후)에 targetEl에 해당 element가 할당되면서 접근할 수 있게 되는 것이다.

## Vue 3의 `setup()` vs `<script setup>`

## setup()

Vuejs에서 Composition API 형태로 코드를 작성하기 위해 선언해주어야 하는 옵션이다.

### 1. Options API로 작성하는 경우

```html
<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
</script>

<template>
  <h1>테스트</h1>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>
```

### 2. Composition API로 작성하는 경우

```html
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const text = ref('');

      return {
        text,
      };
    },
  };
</script>

<template>
  <h1>테스트</h1>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>
```

## `<script setup>`

Vuejs의 Composition API 중 setup() 함수를 더 간단하게(선언적으로) 작성할 수 있게 해주는 문법이다.

```html
<script setup>
  import { ref } from 'vue';

  const text = ref('');
</script>

<template>
  <h1>테스트</h1>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>
```

## setup()과 `<script setup>`의 LifeCycle 개입의 차이

setup()과 `<script setup>`의 큰 차이점으로는 위에서 언급했던 LifeCycle에 접근하는 방법에 있다.

LifeCycle에 개입하는 방법의 차이가 있으며 위의 내용처럼 `<script setup>`에서는 `beforeCreate` 혹은 `created`와 동일한 접근 방법은 존재하지 않는 것을 알 수 있다.(다만, script setup의 코드가 실행되는 시점이 위 2개의 접근 시점과 거의 비슷하다.)

## Pinia 상태관리

Pinia는 Vuex와 마찬가지로 Vue의 상태를 중앙 store에서 관리하기 위한 상태 관리 라이브러리이다.

위의 Vuex 내용에 빗대어 간단하게 설명드리자면 `Composition API에서 좀더 편하게 전역 상태를 관리할 수 없을까?` 하는 니즈에서 시작된 라이브러리이다.

Vuex에서 크게 state, getters, mutations, actions가 있었다면 pinia는 이를 좀더 추상화하고 압축시켰다. 따라서 `state`, `getters`, `actions` 이 3가지를 큰 골자로 제공하고 있다.(즉, actions를 통해 state에 대한 동기, 비동기 로직을 모두 처리하게 된다.)

표로 살펴보면 아래와 같다.

| Vue      | Vuex      | Pinia   |
| -------- | --------- | ------- |
| data     | state     | state   |
| computed | getters   | getters |
| methods  | mutations | actions |
| methods  | actions   | actions |

Pinia는 Options 형태의 스토어와 Setup 형태의 스토어 모두 지원한다. 단, 이 페이지에서는 Setup 형태의 스토어 예제 코드만 작성토록 하겠다.

```jsx
// stores/counter.js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Torder');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

// counter.vue
<script setup>
import { useCounterStore } from '@/stores/counter'

// 컴포넌트 어디에서나 `store` 변수에 접근할 수 있다. ✨
const store = useCounterStore();

// 아주 중요!!! composition api에서 props를 구조분해할당하게 되면 반응성(reactivity)이 사라지는 것 처럼
// pinia의 store를 통해 전달하는 값들 또한 구조분해할당을 사용하면 안된다!

// ❌ 아래의 name, doubleCount는 값이 변경되지 않으며 초기값을 유지한다.
const { name, doubleCount } = store;

// ✅ 아래와 같이 사용하면 반응성을 유지하게 된다.
store.doubleCount
// 혹은
const doubleValue = computed(() => store.doubleCount);
</script>
```

- ref()는 `state` 로 동작한다.
- computed()는 `getters` 로 동작한다.
- function()은 `actions` 로 동작한다.
- Pinia가 우리가 선언한 값들을 인식하기 위해서는 반드시 객체 형태로 return 해주어야 한다.

반면 ref와 getters에 대해서는 `storeToRefs()`를 사용하여 반응성(reactivity)을 유지할 수 있다.

```jsx
// stores/counter.js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Torder');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

// counter.vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { name, doubleCount } = storeToRefs(store);
</script>
```

# Reference

- [Vue.js 공식문서](https://vuejs.org/)
- [Cracking Vue.js](https://joshua1988.github.io/vue-camp/)
- [Vuex: Vuex 시작하기 - 1](https://joshua1988.github.io/web-development/vuejs/vuex-start/)
- [Vuex: Vuex 시작하기 - 2](https://joshua1988.github.io/web-development/vuejs/vuex-getters-mutations/)
- [Vuex: Vuex 시작하기 - 3](https://joshua1988.github.io/web-development/vuejs/vuex-actions-modules/)
- [Pinia 공식문서](https://pinia.vuejs.kr/)
