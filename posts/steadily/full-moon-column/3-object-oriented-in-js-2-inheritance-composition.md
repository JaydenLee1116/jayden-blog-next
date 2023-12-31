---
emoji: 🌑
title: JS로 보는 객체지향 - 2.상속과 합성편
date: '2023-03-20 10:00:00'
author: 제이든
tags: 기록 일지 성장 발전 개발
categories: 보름칼럼
---

# 🌕 보름칼럼

단순 기록보단 좀 더 양질의, 정리된 글을 쓰고자 시작하는 `보름칼럼`<br/>
부담없이 매 보름 하나의 주제를 깊게 들여다볼 수 있는 기회가 되었으면 좋겠다.<br/>
가수 윤종신님이 월간 윤종신을 통해 꾸준히 음악을 내시는 것과 같이 보름칼럼을 적어보자!

> 보름칼럼 규칙
>
> 1. 매일을 기록하는 성장일지보다 좀더 깊은 내용의 글을 작성할 수 있도록 하자.
> 2. 너무 욕심부리지말고 하나의 주제(키워드)에 집중한다.
> 3. 2주에 한 번 다듬어진 칼럼 형태의 글을 작성한다.
> 4. 마감은 매주 일요일을 기준으로 한다.

## 📃 글또 8기

개발자들이 모여 함께 글을 쓰고 피드백하는 커뮤니티인 [글또(글쓰는 또라이가 세상을 바꾼다.)](https://www.notion.so/zzsza/ac5b18a482fb4df497d4e8257ad4d516)에서
활동하게 되어 보름칼럼의 규칙은 글또의 규칙을 따르기로 한다.<br/>
2주마다 글을 작성하는 규칙은 동일하며, 그 마감 날짜는 아래와 같다. 마감 날짜를 체크하며 매번 글 작성에 대해 인지하도록 하자!<br/>

## 🚈 들어가기에 앞서...

- [JS로 보는 객체지향 - 1.객체편](https://jaydenlee1116.github.io/steadily/full-moon-column/2-object-oriented-in-js-1-object/)
- [JS로 보는 객체지향 - 2.상속합성편](https://jaydenlee1116.github.io/steadily/full-moon-column/3-object-oriented-in-js-2-inheritance-composition/)

처음 프로그래밍을 배우고 가장 이해가 안되고 공감되지 않았던 개발자분들의 말이 있었다. `어떤 실체화된 현실 세계의 것을 코드로 구현하고 현실의 문제를 해결하는 게 개발자다.`와 같은 말들이었다.
당장 화면에 `Hello, Wolrd!`를 찍어내고, 몇몇 계산을 편하게 하는 정도의 나에겐 전혀 공감이 되질 않았다. 이후 공부를 하며 그 말을 따라가다보니 `객체지향`에 도달했다.<br/>
처음 책 `객체지향의 사실과 오해`를 읽었을 때, 읽다가 중간에 포기했었다. 너무 좋은 책이라고 이야기는 들었지만, 기본적인 객체에 대한 개념이 없는 상태에서
읽었기 때문이다. 내용이 너무 추상적으로 다가왔고 읽을수록 더 헷갈리는 느낌이었다. 그렇게 시간이 조금 더 흐르고 어느정도 절차지향에서 함수, 모듈을 나누고 클래스를
사용하기 시작하면서 다시 이 책을 펼쳐들었다. 그리고 이 책은 짧은 개발자로서의 인생에서 내 최애 서적이 되었다. 정말 정말 재미있게 마치 빨려들어가듯이 읽었고 다 읽고 난 뒤,
정말 현실에 있는 모든 걸 다 코드로 구현할 수 있을 것만 같았다.(물론 실제로 그렇진 않다. 🤪)<br/>
처음 `객체`라는 개념으로 코드를 작성했던 기쁨을 기억하고 동시에 이제 처음 `객체지향`에 궁금증이 생기신 분들이 쉽게 그 느낌(?)을 받으셨으면 하는 마음으로 이 글을 작성한다.

## 🐜 개미 클래스

이전 클래스인 개미를 다시 한번 보자.

```js
class Ant {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  
  move() {
    if (Math.random() < 0.5) {
      this.position--;
    } else {
      this.position++;
    }
  }
  
  report() {
    console.log(`${this.name} 개미의 위치는 ${this.position} 지점 입니다.`)
  }
}
```

기존 Ant class에서 본인의 정보를 보고하는 `report()` 메서드만 추가해주었다.

## 🐜 검은개미 클래스(feat. 상속)

Ant class는 전반적인 개미를 표현한다. 그렇지만 현실 세계의 개미는 검은개미도 있고, 흰개미도 있고, 붉은개미 등등 다양한 종이 존재한다.<br/>
그렇다면 개미보다 상대적으로 더 하위에 있는 개체는 어떻게 구현할 수 있을까? 먼저 Ant class를 상속하여 검은개미 class를 구현해보자. 

```js
class BlackAnt extends Ant {
  constructor(name, age, position) {
    super(name, age, position);
  }
  
  sayColor() {
    console.log("I'm Black Ant");
  }
}
```

위와 같이 상속함으로써 Ant class의 속성(name, age, position)과 메서드(move(), report())를 그대로 가져오면서
BlackAnt만이 갖는 `sayColor()`라는 메서드를 사용할 수 있게 되었다.

### 🐜 (추가)검은개미 클래스를 굳이 상속으로 만들 필요가 있을까?

상속을 사용하여 검은개미 클래스를 구현해보았다. 그렇지만 여기서 한가지 의문이 들 수 있다. 과연 위의 검은개미 클래스가 적절할까?<br/>
`sayColor()`라는 메서드는 굳이 BlackAnt에만 존재해야하는지 다시 한번 고민해볼 수 있다. 굳이 상속을 사용하기 위함이 아니라면 아래와 같이 구현할 수 있다.

```js
class Ant {
  constructor(name, age, position, color) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.color = color;
  }
  
  move() {
    if (Math.random() < 0.5) {
      this.position--;
    } else {
      this.position++;
    }
  }
  
  report() {
    console.log(`${this.name} 개미의 위치는 ${this.position} 지점 입니다.`)
  }
  
  sayColor() {
    console.log(`I'm ${this.color} Ant!`)
  }
}

const blackFirst = new Ant('ark', 3, 0, 'Black');
```

4번째 파라미터로 개미의 색깔을 전달함으로써 검은개미 객체를 표현할 수 있었다. 이와 같이 개발에는 정답이 없음을 알 수 있다. 본인이 필요한 방법으로 생각해서
코드를 짜면 된다.

## 🐜 여왕개미 클래스(feat. 합성, 위임)

그렇다면 이제 여왕개미 클래스를 구현해보자. 여왕개미는 위에서 구현한 검은개미를 위임받아서 그 개미를 다루도록 할 것이다.(여왕개미니까 직접 움직이지 않을 것이다.)</br>
(여왕개미도 개미이므로 Ant를 상속해야겠지만 간단하게 설명하기 위해 독립적인 여왕개미(QueenAnt) 클래스를 구현해보겠다.)

```js
// 여기에 BlackAnt 클래스 코드가 있다고 가정

class QueenAnt {
  constructor(workers = []) {
    this.workers = workers;
  }
  
  makeWorker(name, age, position) {
    const worker = new BlackAnt(name, age, position);
    this.workers.push(worker);
  }
  
  commandMove() {
    this.workers.forEach((worker) => worker.move());
  }
  
  commandReport() {
    this.workers.forEach((worker) => worker.report());
  }
}
```

코드 양이 조금 늘어났지만, 그 컨셉은 간단하다. 여왕개미는 `workers`라는 배열로 일개미들을 갖고 있다.
또한 `makeWorker()`을 통해 전달된 `name, age, position`을 갖는 검은개미를 생성하고 `workers`에 추가한다. 바로 이 때, `BlackAnt`가 위임된 것이다.<br/>
이제 `commandMove()`, `commandReport()` 메서드를 통해서 각각의 개미들이 일제히 움직이고 본인의 이름과 위치를 보고하게 된다.<br/>

말그대로 위임(혹은 합성; composition)을 통해서 QueenAnt는 굳이 move, report 등의 메서드 없이도 BlackAnt를 통해 해당 메서드를 사용(활용)할 수 있게 되는 것이다.
만약 BlackAnt를 상속하여 QueenAnt를 구현했다면 BlackAnt에 대한 의존성이 높아져 위임보다 더 유지보수가 어려울 가능성이 높다.(물론 이것도 때에 따라서 다르다.)

## 🐜 또다른 여왕개미 클래스(feat. 의존성 주입(DI))

의존성 주입(Dependency Injection; DI)는 무엇일까? 혹시 이 단어에서 어딘가 이상함을 느껴지지 않는가? 객체지향은 각 객체간의 책임과 역할을 분리하는 것 즉, 의존성을 낮춤으로써
제품의 유지보수, 리팩토링, 테스트 코드 작성 등에서 유리함을 얻을 수 있다. 그런데 `의존성을 주입한다`??? 덜어내야할 의존성을 주입한다는 것이 이상하게 느껴질 수 있다.<br/>
사실 의존성 주입이라고 부르는데에는 `외부에서 어떤 기능을 제공(주입)받음으로써` 각 객체의 의존성을 낮춘다는 의미가 있다.<br/>
거두절미하고 위의 코드에서 의존성 주입을 통해 또다른 여왕개미 클래스를 구현해보자.

```js
// 마찬가지로 BlackAnt 클래스 코드가 있다고 가정(혹은 import)

class QueenAnt {
  constructor(Ant, workers = []) {
    this.workers = workers;
    this.Ant = Ant;
  }
  
  makeWorker(name, age, position) {
    const worker = new this.Ant(name, age, position);
    this.workers.push(worker);
  }
  
  commandMove() {
    this.workers.forEach((worker) => worker.move());
  }
  
  commandReport() {
    this.workers.forEach((worker) => worker.report());
  }
}
```

자, 이제 어떤가? 이번엔 QueenAnt 객체를 생성할 때, 어떤 `Ant` class를 인자로 받는다. 즉, name, age, position을 인자로 받는
어떠한 Ant class도 인자로 받아서 활용할 수 있게 되는 것이다. 기존의 QueenAnt는 언제나 BlackAnt라는 class만을 사용했지만, 이번에 구현한
QueenAnt는 의존성을 주입 받음으로써 어떠한 Ant든 받아서 활용할 수 있게 된다. 또한, 의존성 주입을 통해 테스트 코드를 더욱더 간단하게 작성할 수 있게 된다.
(물론 위의 코드같은 경우, class 자체를 넘겨주고 있지만 보통은 구현한 객체를 넘겨서 메서드를 활용하므로 mock data 작업에 있어서도 유리해진다.)

## 🚉 글을 마치며...

어쩌다보니 객체지향에서 `상속과 합성`에 대한 내용을 다루게 되었다. 기존에 객체지향 2번째 글은 뭔가 거대한 개미 생태계를 구현함으로써 객체간의 협동을 쉽게 표현해보고 싶었다. 
그런데 큰 생태계를 구현하려고보니 여러 객체를 만들어야 서로 메시지를 주고받으며 협력하는 생태계를 구현할 수 있겠다는 생각이 들었다. 해서 이번엔 객체를 구현하는 방법 중 위임과 합성을
다뤄보게 되었다. 사실 그동안 나도 상속과 주입에 대해서 대충 `주입이 좀더 의존성이 낮고 지향해야한다.`만 알았지 이렇게 조금더 깊게(?) 구현도 해보면서 알아본 건 처음이다.<br/>
객체지향을 처음 공부했을 때도 그렇지만, 정말 정말 매력적인 프로그래밍 패러다임인 것 같다. 다음엔 어떤 주제로 글을 쓰게 될지 모르겠지만, 객체지향 3편인 협동으로 할지 혹은 최근 관심이 생긴
웹 렌더링을 할지 아직 고민중이다!

> 아직 많이 부족한 개발자입니다. 내용에 대한 오류가 있다면, 언제든 편하게 말씀해주세요! 감사합니다!

## 🎁 참고

- [네이버 국어사전](https://ko.dict.naver.com/#/main)
- [위키백과 - 객체지향 프로그래밍](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
- [책 - 객체지향의 사실과 오해](https://product.kyobobook.co.kr/detail/S000001628109)
- [DI in JavaScript 번역](https://velog.io/@moongq/Dependency-Injection)

```toc

```
