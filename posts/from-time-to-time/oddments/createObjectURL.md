---
emoji: 📦
title: createObjectURL에 대해
date: '2024-02-20 23:00:00'
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

# 1. URL 객체

- 자바스크립트에서 사용되는 내장 객체
- URL(Uniform Resource Locator) 주소를 다루는 데 사용
- URL 객체의 프로퍼티 및 메서드를 사용하여 좀 더 편리하게 웹 페이지의 주소를 파싱하고 조작 가능

URL 객체의 주요 속성

1. **href**: 전체 URL 문자열
2. **protocol**: URL의 프로토콜 부분 ex) "http:", "https:" 등
3. **hostname**: URL의 호스트(도메인) 부분
4. **port**: URL의 포트 부분(생략 시 기본 포트값 사용)
5. **pathname**: URL의 경로 부분
6. **search**: URL의 쿼리 문자열
7. **hash**: URL의 해시 부분

예시)

```jsx
// URL 문자열을 이용하여 URL 객체 생성
const url = new URL('https://www.example.com/path?query=string#section');

// URL 객체의 프로퍼티에 접근
console.log(url.protocol); // 출력: "https:"
console.log(url.hostname); // 출력: "www.example.com"
console.log(url.pathname); // 출력: "/path"
console.log(url.search); // 출력: "?query=string"
console.log(url.hash); // 출력: "#section"
```

# 2. URL.createObjectURL()

- URL 객체가 제공하는 정적 메서드로 인자로 제공되는 객체를 가리키는 URL을 string으로 반환
- URL 객체는 본인을 생성한 페이지의 document가 사라지면 함께 메모리에서 제거 ex) 새로고침
  - 즉, URL 객체는 document가 사라지기 전까지는 메모리 차지

# 3. URL.revokeObjectURL()

- URL 객체가 제공하는 정적 메서드로 이전에 `URL.createObjectURL()`로 생성한 객체 URL을 해제
- 생성한 URL 객체를 사용할 일이 없을 때, 브라우저에게 해당 객체를 메모리에 들고 있지 않아도 된다고 알리는 메서드

## (참고사항) createObjectURL의 파라미터 객체

1. File 객체

- 사용자의 컴퓨터에서 파일을 나타내는 객체
- 웹 어플리케이션에서 사용자가 업로드한 파일을 다루거나, 페이지에서 다운로드한 파일 다룰 때 사용
- 파일의 이름, 크기, 형식 등과 같은 속성을 제공하면서 파일을 읽거나 전송하는 데 사용
- 주로 HTML **`<input type="file">`** 요소를 통해 사용자에게 파일 선택을 요청하고, JavaScript를 통해 해당 파일을 File 객체로 가져오는 방식으로 사용

1. Blob 객체

- Binary Large Object의 약자로, 바이너리 데이터를 나타내는 객체
- 이미지, 오디오, 비디오 등의 멀티미디어 데이터 혹은 사용자가 생성한 데이터를 다룰 때 사용
- 데이터의 크기와 MIME 타입을 가지고 이진 데이터를 생성하거나 조작하는 데 사용
  - MIME(Multipurpose Internet Mail Extensions) 타입
    - 인터넷에서 다양한 종류의 데이터를 식별하는 데 사용하는 표준화된 방법
    - 주로 웹 서버가 클라이언트에게 전송하는 데이터 형식을 지정하는 데 사용
    - MIME 타입은 데이터의 종류를 설명하고 어플리케이션이나 브라우저가 해당 데이터를 어떻게 처리해야하는지를 지정
    - 가장 일반적으로 ‘/’를 기준으로 type과 subtype 두 부분으로 구성(`type/subtype`)
    - type: video, text와 같이 데이터 타입이 속하는 일반 카테고리
    - subtype: MIME 타입이 지정된 타입의 정확한 데이터 종류 식별 카테고리
      - ex) `text/plain`, `text/html`, `image/jpeg` 등
    - 추가적인 세부정보를 제공할 때는 선택적으로 우측 맨 끝에 ‘;’를 통해 매개변수를 추가할 수 있음
      - ex) `text/plain;charset=UTF-8`: charset 매개변수를 통해 데이터의 문자에 사용되는 문자 세트를 지정 가능

### 참고

- [createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
- [revokeObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL_static)
