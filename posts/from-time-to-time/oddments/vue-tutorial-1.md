---
emoji: 📦
title: Vue 3 Tutorial - part 1
date: '2023-11-21 22:30:00'
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

## Vue 튜토리얼

와... Vue는 튜토리얼을 한국어부터 일본어, 프랑스어, 포르투갈어 등등 거의 8개 국어를 지원한다. 간단한 투두리스트를 구현하기에 앞서 대략적인 api 및 사용법을 알고 싶어서 빠르게 튜토리얼을 진행했다.(Vue 3의 Composition API를 사용했다.)

### SFC(Single File Component)

Vue의 SFC는 HTML, CSS, JavaScript를 캡슐화한 코드 블록 혹은 컴포넌트로 재사용 가능한 `.vue` 파일이다.

Vue의 핵심 기능은 `선언적 렌더링`으로 HTML을 확장하는 템플릿 문법을 사용하고 JS 상태를 기반으로 HTML이 어떻게 보이는지 설명한다. 그리고 `반응형`으로 선언적으로 만든 템플릿은 상태가 변경될 때마다 DOM을 자동으로 업데이트한다.(사실 이 설명은 React와 비슷하다.)

### 상태

변경 시, 업데이트를 트리거할 수 있는 상태는 `반응형`으로 간주한다. 이 `반응형 상태`를 `reactive()` API를 사용하여 선언할 수 있다. `reactive()`로 생성된 객체는 일반 객체처럼 작동하는 JS Proxy이다.

- reactive(): 객체(배열, Map, Set과 같은 빌트인 타입 포함)에서만 작동한다.
- ref(): 모든 타입의 값을 사용할 수 있으며 `ref()`로 생성된 객체는 `.value` 프로퍼티를 통해 접근해야 한다.

간단하게 ref와 reactive를 사용하여 작성한 예제 코드

```js
<script setup>
  import { ref, reactive } from 'vue'

  const message = ref('Hello World! Hello Jayden!')
  const counter = reactive({
    count: 0,
  });

  const increment = () => {
    counter.count++
  }
</script>

<template>
  <h1>{{message}}</h1>
  <h1>{{counter.count}}</h1>
  <button @click='increment'>
    클릭하기
  </button>
</template>
```

- 스크립트에서는 ref의 값에 접근하려면 `.value`를 사용해야 한다. 반면, 템플릿에서는 `.value`를 사용하지 않아도 된다.

### 속성 바인딩

Vue에서 이중 중괄호는 텍스트 삽입에만 사용된다. 속성을 동적 값에 바인딩하려면 `v-bind` 디렉티브를 사용한다.

```js
<div v-bind:id="dynamicId"></div>
```

- `디렉티브`는 `v-` 접두사로 시작하는 특수한 속성으로 Vue 템플릿 문법이다.
- `v-bind` 디렉티브는 `:`로 축약할 수 있다.

```html
<div :id="dynamicId"></div>
```

아래는 ref에 특정 텍스트를 할당하고 글자를 빨간색으로 바꾸는 예제 코드

```js
<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class='titleClass'>나를 빨갛게 만들어 보세요</h1> <!-- 여기에 동적 클래스 바인딩 추가 -->
</template>

<style>
.title {
  color: red;
}
</style>
```

### 이벤트 리스너

Vue에서 이벤트 리스너를 추가하려면 `v-on` 디렉티브를 사용한다.

```js
<button v-on:click="increment">{{ count }}</button>
```

- `v-on` 디렉티브는 `@`로 축약할 수 있다.

```js
<button @click="increment">{{ count }}</button>
```

이 때, 템플릿에서 `increment`는 `<script setup></script>`에서 선언된 함수이다.

```js
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++;
}
</script>

<template>
  <button @click='increment'>숫자 세기: {{ count }}</button>
</template>
```

### 폼(form) 바인딩

`v-bind`와 `v-on` 디렉티브를 사용하여 폼 입력과 애플리케이션 상태를 양방향으로 바인딩할 수 있다.

```js
<script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="여기에 입력하기">
  <p>{{ text }}</p>
</template>
```

양방향 바인딩을 단순화하기 위해 `v-model` 디렉티브를 사용할 수 있다.

```js
<script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <input v-model='text' placeholder="여기에 입력하기">
  <p>{{ text }}</p>
</template>
```

- `v-model`은 `<input>`의 값을 바인딩된 상태와 자동으로 동기화한다.
- 따라서 더 이상 `v-on`을 사용하여 입력 이벤트를 수신할 필요가 없다.

### 조건부 렌더링

Vue에서 조건부 렌더링은 `v-if` 디렉티브를 사용한다.

```js
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">토글 버튼</button>
  <h1 v-if='awesome'>Vue는 굉장해! 엄청나!</h1>
  <h1 v-if='!awesome'>오 안돼 😢</h1>
</template>
```

`v-else-if`로도 쓸 수 있다.

```js
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">토글 버튼</button>
  <h1 v-if='awesome'>Vue는 굉장해! 엄청나!</h1>
  <h1 v-else-if='!awesome'>오 안돼 😢</h1>
</template>
```

`v-else`로도 쓸 수 있다.

```js
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">토글 버튼</button>
  <h1 v-if='awesome'>Vue는 굉장해! 엄청나!</h1>
  <h1 v-else='awesome'>오 안돼 😢</h1>
</template>
```

```js
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">토글 버튼</button>
  <h1 v-if='awesome'>Vue는 굉장해! 엄청나!</h1>
  <h1 v-else>오 안돼 😢</h1>
</template>
```

흠... 여기는 조건문 돌아가는 게 쪼끔 헷갈리네... 일단 else는 기본적으로 위에 있는 조건문이 false일 때 실행된다고 생각하면 되겠다.

### 리스트 렌더링

Vue에서 리스트 렌더링은 `v-for` 디렉티브를 사용한다.

아래는 간단한 투두리스트를 구현한 예제 코드

```js
<script setup>
import { ref } from 'vue'

// 각 할 일에 고유한 ID 부여
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'HTML 배우기' },
  { id: id++, text: 'JavaScript 배우기' },
  { id: id++, text: 'Vue 배우기' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter(td => td !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>할 일 추가</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
```

React와의 가장 큰 차이점은 `addTodo()` 함수에서 배열(객체)을 `mutable`하게도 다룰 수 있다는 점이다.

## 참고

- [Vue.js](https://vuejs.org/)
- [Vue.js 튜토리얼](https://ko.vuejs.org/tutorial/#step-1)
