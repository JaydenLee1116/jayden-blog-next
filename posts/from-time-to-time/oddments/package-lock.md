---
emoji: 📦
title: package-lock.json에 대해
date: '2024-02-01 23:00:00'
author: 제이든
tags:
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

## 주제 선정 이유

- package.json에 있는 내용만으로는 의존성 버전이 정확치 않아서 정확한 버전을 명시한 게 lock 파일이다.
- 팀원들간에 서로 공통적인 의존성 버전을 가져야하기 때문에 일반적으로는 push해야한다.
- 다만, 의존성이 명확히 지켜진다면 문제가 안될 수도 있지 않을까? 싶긴하다. 정확한 이유는 한번 찾아보는 것도 좋겠다.

## 정리가 잘된 레퍼런스

[package-lock.json은 왜 필요할까?](https://hyunjun19.github.io/2018/03/23/package-lock-why-need/)

## 시간 절약을 위한 요약 🤩

- package.json에는 의존성의 버전이 범위 형태(^ 모양의 caret)으로 명시됨
- ^(caret)은 메이저 업데이트를 제외한 의존성 최신 버전을 설치하게 하는 표기법
- 즉, lock 파일이 없으면 프로젝트를 공유하는 팀원들 간에 minor 혹은 patch 부분의 버전이 달라질 수 있음
- ex) A 팀원: react: 18.1.1, B 팀원: react: 18.9.1

## 커피챗 중 나온 내용

Q. 어차피 package.json의 의존성 버전 업데이트는 원격에서 서로 공유가 되고 pull했을 때, 서로 문제 없이 반영이 될 거 같은데 굳이 `package-lock.json` 파일을 저장소에 올려야할까요?

A. 결론: 의존성에 대한 하위 의존성 때문에 필요하다고 합니다.

```jsx
- parent-library
	ㄴ child-library: ^1.6.8
```

위와 같은 경우, package.json만 존재하면 child-library의 명확한 특정 버전 명시가 되어있지 않아 서로 다른 버전의 child-library가 설치될 수 있습니다. 따라서 하위 의존성에 대한 특정 시점의 특정 버전을 명시해주기 위해 `package-lock.json` 이 필요하다고 합니다!

### 참고

- [package-lock.json은 왜 필요할까?](https://hyunjun19.github.io/2018/03/23/package-lock-why-need/)
