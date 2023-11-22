---
emoji: 📦
title: Vue 3 Tutorial - part 2
date: '2023-11-22 22:30:00'
author: 제이든
tags: Vue
categories: 잡동사니
thumbnail: /images/thumbnails/boxes.png
---

## 📦 잡동사니

하나의 키워드를 잡고 좀 편하게 정리하고 싶어 만든 `잡동사니`<br/>

> 잡동사니는 조선 후기 학자 `안정복`이 편찬한 `잡동산이(雜同散異)`에서 유래된 말이다.<br/>
> 잡동산이는 `잡기(雜記)`의 형태를 빌려온 책으로 구체적인 체계가 잡혀있지 않은 형식이다.<br/>
> 항목이 다소 난잡하고 내용의 구분이 혼동되어있다고 한다. 🤣

## Vue 튜토리얼

와... Vue는 튜토리얼을 한국어부터 일본어, 프랑스어, 포르투갈어 등등 거의 8개 국어를 지원한다. 간단한 투두리스트를 구현하기에 앞서 대략적인 api 및 사용법을 알고 싶어서 빠르게 튜토리얼을 진행했다.(Vue 3의 Composition API를 사용했다.)

### 계산된 속성

앞선 투두리스트에서 전체 할 일과 앞으로 할 일을 토글로 보여주고 싶다면 어떻게 해야할까?

이 때, `computed()`를 사용하면 된다. 단순하게 보면 계산에 사용된 상태를 추적하고 해당 상태가 변경될 때마다 다시 계산하는 API이다. 계산에 사용된 상태를 알아서 디펜던시로 추적한다.

```js
<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'HTML 배우기', done: true },
  { id: id++, text: 'JavaScript 배우기', done: true },
  { id: id++, text: 'Vue 배우기', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
```

### 생명주기와 템플릿 참조

지금까지 위에서는 반응형 및 선언적 렌더링으로 DOM을 업데이트를 처리했다. 그러나 필연적으로 직접 DOM을 조작해야하는 경우가 발생한다. 이 때, `ref`를 사용하여 템플릿 내의 DOM 요소에 직접 접근할 수 있다.

```js
<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContext = '제이든입니다!!!'
})
</script>

<template>
  <p ref="pElementRef">안녕</p>
</template>
```

- `ref`는 `null`로 초기화해야한다. `<script setup>` 실행 시 해당 엘리먼트가 아직 존재하지 않기 때문이다. 템플릿 참조는 컴포넌트가 마운트된 후에만 접근할 수 있다.
- 마운트된 후에 어떤 코드를 실행하고 싶다면 `onMounted()`를 사용한다.
  - 이를 `생명주기 훅`이라고 하며 `onUpdated`, `onUnmounted` 등이 있다.

> 이 부분은 사실상 리액트의 `useRef`와 `useEffect`와 유사한 느낌! 그런데 쪼끔더 직관적이라는 생각도 들고 한편으로는 리액트 클래스 컴포넌트랑 더 비슷한 것도 같다.

### 감시자

우리는 종종 `어떤 값이 업데이트(변경)될 때, 어떤 사이드 이펙트를 실행해야한다.` 이를 위해 `watch()`를 사용한다.

```js
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)

// 콜백 함수가 인자를 받는다면 아래와 같이 사용할 수 있다.
watch(todoId, (id, prevId) => {
  console.log(`todoId가 ${prevId}에서 ${id}로 변경되었습니다.`)
})
</script>

<template>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">다음 할 일 가져오기</button>
  <p v-if="!todoData">로딩...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```

> 이게 진짜 리액트의 `useEffect`를 닮았다. `생명주기 함수`와 `watch`를 결합하면 거진 `useEffect`와 동일할 듯?!

### 컴포넌트

당연히 vue.js도 컴포넌트 단위의 개발이 가능하며, 다른 파일로 작성된 컴포넌트를 module로 import하여 사용할 수 있다.

```js
<script setup>
import ChildComp from './ChildComp.vue'
</script>

<template>
  <ChildComp />
</template>
```

### Props

자식 컴포넌트는 부모 컴포넌트로부터 `props`를 통해 데이터를 받을 수 있다. 우선 자식 컴포넌트에서 부모 컴포넌트에서 받을 `props`에 대해 선언해야 한다.

> 이 때, `defineProps`는 `컴파일 타임 매크로`이므로 따로 `import`할 필요가 없다.

ChildComp.vue

```js
<script setup>
const props = defineProps({
  msg: String
})
</script>

<template>
  <h2>{{ msg || 'prop이 아직 전달되지 않았습니다!' }}</h2>
</template>
```

그리고 부모 컴포넌트에서는 `v-bind`와 `props`의 속성값으로 데이터(값)를 전달할 수 있다.

App.vue

```js
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('부모 컴포넌트로부터 💌을 전달받았어요!')
</script>

<template>
  <ChildComp :msg='greeting' />
  <!-- <ChildComp v-bind:msg='greeting' /> -->
</template>
```

### Emits

자식 컴포넌트는 부모 컴포넌트로부터 `props`를 받을 수 있을 뿐 아니라, 이벤트를 `emit(발송)`할 수도 있다.

> 이 때, 마찬가지로 `defineEmits`도 `컴파일 타임 매크로`이므로 따로 `import`할 필요가 없다.

ChildComp.vue

```js
<script setup>
// 발송할 이벤트의 이름을 정의한다.(여러 개일 수 있으니 배열로 정의한다.)
const emit = defineEmits(['response'])

emit('response', '자식 컴포넌트로부터 🌷를 받았어요!')
</script>

<template>
  <h2>자식 컴포넌트</h2>
</template>
```

그리고 부모 컴포넌트에서는 `v-on`과 `emit`의 속성값으로 이벤트를 수신할 수 있다.

App.vue

```js
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('자식 컴포넌트로부터 아직 메시지를 받지 못했어요!')
const temp = (msg) => {
  childMsg.value = msg;
}
</script>

<template>
  <ChildComp @response='temp'/>
  <!-- <ChildComp v-on:response='temp'/> -->
  <p>{{ childMsg }}</p>
</template>

<!-- 아래와 같이 적을 수도 있다. 그래도 가능하면 함수를 분리해주는 게 좋겠지..? -->
<!-- <template>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template> -->
```

### Slot

부모 컴포넌트는 자식 컴포넌트에게 `props`를 사용하여 데이터를 전달하는 것 외에도 `slot`을 사용하여 템플릿 조각을 전달할 수 있다.

ChildComp.vue

```js
<template>
  <!-- slot 내부의 값은 부모 컴포넌트로부투 값을 받지 못한 경우에 표시되는 값이다. -->
  <slot>대체: 부모로부터 컨텐츠를 못 받았어요! 😢</slot>
</template>
```

App.vue

```js
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('Vue는 개발자에게 정말 유용하죠! 🎁')
</script>

<template>
  <ChildComp>부모로부터: {{ msg }}</ChildComp>
</template>
```

# 📝 회고

확실히 그래도 react를 아는 상태에서 배우니까, vue를 배우는 데에는 어려움이 없었다. 그리고 vue는 react보다 더 직관적이라는 느낌이 든다. 아무래도 react는 상위 컴포넌트에서 하위 컴포넌트로 모든 걸 전달하기 때문에 `양방향 바인딩`이라는 말이 어떤 느낌인지 몰랐다. 이번에 확실히 vue를 공부해보니까 `양방향 바인딩`이라는 말이 무엇인지 알 것 같다. 처음엔 너무 생소했는데, 배우다보니까 되게 재미있어서 기대가 된다!!

## 참고

- [Vue.js](https://vuejs.org/)
- [Vue.js 튜토리얼](https://ko.vuejs.org/tutorial/#step-1)
