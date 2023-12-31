---
emoji: 🎶
title: 오브젝트 Chapter 1
date: '2023-11-18 23:00:00'
author: 제이든
tags: 글 문서 요약
categories: 스터디 책
thumbnail: /images/thumbnails/book.png
---

# 🎶 오브젝트

이 글은 [오브젝트](https://product.kyobobook.co.kr/detail/S000001766367)를 읽고 작성한 글이다.
책을 통해서 얻은 내 나름의 핵심 개념을 정리하면서 책을 읽는 것을 목표로 한다.
개인적으로 개발 공부를 하며 가장 인상 깊게 읽은 인생 도서가 동일한 저자인 조영호님의 [객체지향의 사실과 오해](https://product.kyobobook.co.kr/detail/S000001628109)인만큼 정말 기대된다!!

## 0. 들어가기에 앞서

### 과학의 발전

- 쿤은 과학의 발전이 진리를 향해 한 걸음씩 접근한다는 진보의 개념을 부정
- 과학이 단순히 계단 형태의 발전을 이루는 것이 아니라, 새로운 발견이 기존의 과학적 견해를 붕괴시키는 혁명적 과정을 거치면서 발전했다고 주장

### 프로그래밍 패러다임

- 특정 시대의 어느 성숙한 개발자 공동체에 의해 수용된 프로그래밍 방법과 문제 해결 방법, 프로그래밍 스타일
- 프로그래밍 패러다임을 통해 동일한 프로그래밍 스타일과 모델을 공유할 수 있게 함으로써 불필요한 부분에 대한 의견 충돌을 방지
- 동일한 규칙과 방법을 공유하는 개발자로 성장할 수 있도록 준비시킬 수 있다.

> 객체지향 패러다임은 은총알이 아니다. 객체지향이 적합하지 않은 상황에서는 언제라도 다른 패러다임을 적용할 수 있어야 한다.

## 1. 객체, 설계

- 소프트웨어 개발에서 실무가 이론보다 앞서 있는 대표적인 분야로 '소프트웨어 설계와 유지보수'를 들 수 있다.
- 대부분의 설계 원칙과 개념은 이론에서 출발해서 실무에 스며들었다기 보단 실무에서 반복적으로 사용되다가 이론으로 정리되었다.
- 추상적인 개념과 이론은 훌륭한 코드를 작성하는 데 필요한 도구일 뿐이다.

### 모듈

모듈이란 크기와 상관없이 클래스나 패키지, 라이브러리와 같이 프로그램을 구성하는 임의의 요소를 의미한다.

#### 모듈의 세 가지 목적

1. 실행 중에 제대로 동작하는 것
2. 변경을 위해 존재하는 것
3. 코드를 읽는 사람과 의사소통하는 것

### 의존성

- 의존성은 변경에 대한 영향을 암시
- 어떤 객체가 변경될 때, 그 객체에게 의존하는 다른 객체도 함께 변경될 수 있다는 사실을 내포
- 높은 결합도: 한 모듈의 변경이 다른 모듈에 영향을 많이 미치는 것 즉, 의존성이 높은 것

### 캡슐화

- 개념적이나 물리적으로 객체 내부의 세부적인 사항을 감추는 것
- 캡슐화의 목적은 객체의 자율성을 높이는 것, 변경하기 쉬운 객체를 만드는 것

### 캡슐화와 응집도

- 핵심은 객체 내부의 상태를 캡슐화하고 객체 간에 오직 메시지를 통해서만 상호작용하도록 만드는 것
- 높은 응집도: 밀접하게 연관된 작업만을 수행하고 연관성 없는 작업은 다른 객체에게 위임하는 것
  - 응집도가 높은 객체는 변경이 발생할 때 해당 객체만 수정하면 되므로 변경에 대한 영향이 적다.
  - 즉, 자신의 데이터를 스스로 처리하는 자율적인 객체를 만들면 된다.

### 절차지향과 객체지향

- 절차지향: 데이터와 프로세스를 별도의 모듈에 위치시키는 방식
- 객체지향: 데이터와 프로세스를 단일 모듈로 묶는 방식 즉, 본인의 데이터를 스스로 처리하는 자율적인 객체를 만드는 것
- `책임의 이동`을 통해서 절차지향을 객체지향으로 변환할 수 있다.

### 훌륭한 객체지향 설계

불필요한 세부사항을 `캡슐화`하는 `자율`적인 `객체`들이 낮은 `결합도`와 높은 `응집도`를 가지고 `협력`하도록 최소한의 `의존성`만을 남기는 것

- 훌륭한 객체지향 설계에서는 소프트웨어를 구성하는 모든 객체들이 자율적으로 행동하는 설계를 가리킨다.
- 실세계에서는 생명이 없는 수동적인 존재라고 하더라도 객체지향의 세계로 넘어오는 순간 생명과 지능을 가진 존재가 된다!!!

> 좋은 설계란 오늘 요구하는 기능을 온전히 수행하면서 내일의 변경을 매끄럽게 수용할 수 있는 설계

### 마음에 새기면 좋을 것 같은 부분!!

`객체지향 패러다임은 여러분이 세상을 바라보는 방식대로 코드를 작성할 수 있게 돕는다.` 객체지향을 처음 접했을 때, 가장 와닿았던 부분!!!
