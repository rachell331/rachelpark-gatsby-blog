---
emoji:
title: 크로스 브라우징
date: '2022-01-06 22:33:37'
author: Rachel
tags: Front Study
categories: Study
---

# <span style="font-weight: 900;">크로스 브라우징</span>

> 💡 **크로스 브라우징이란(cross browsing)?**
> : 브라우저마다 적용되는 모습에 약간의 차이가 있는데, 이러한 차이를 최소화하고 환경의 영향을 최소한으로 줄여서 웹 서비스를 최적화하는 것을 의미한다.

크로스 브라우징 이슈는 일부 최신 브라우저에서만 구동되는 기능을 IE나 기타 지원되지 않는 브라우저에서 구동시켜야 할 경우, 기능을 단순화/생략 해야 하는 경우에 발생한다.
프론트엔드에서 민감하게 반응해야 할 이슈일 수 밖에 없다.
브라우저에서 동작하지 않는 웹 사이트라니!

## <span style="font-weight: 600;">Babel</span>

크로스 브라우징 이슈를 해결하기 위한 tool

ES6+의 자바스크립트, 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서 모든 브라우저에서 동작할 수 있도록 호환성을 유지하게 해준다.

_“바벨은 주로 ECMAScript 2015+ 코드를 현재 및 과거의 브라우저와 같은 환경에서 호환되는 버전으로 변환하는데 주로 사용되는 도구입니다.” - 공식문서_

추상화 수준을 유지한 채로 코드를 변화시키는 “**트랜스파일러**” 역할

→ ES6+ Javascript를 하위 버전으로 or IE나 다른 브라우저에서도 웹 페이지가 동작하도록 해주는 역할

## <span style="font-weight: 600;">Polyfill</span>

기본적으로 지원하지 않는 이전 브라우저에서 최신 기능을 제공하는데 필요한 코드 (javascript)

### 📍react-app-polyfill

리액트에서 사용하는 다양한 문법들을 호환해주는 라이브러리

`Promise` (`async` / `await` 지원을 위해)

`window.fetch` (프라미스 기반 웹 요청 방법)

`Object.assign` (`{ ...a, ...b }` 등 Object 스프레드에 필요한 )

`Symbol` (`for...of` 구문과 그 친구들이 사용하는 내장 객체)

`Array.from` (배열 확장에 사용되는 내장 메서드. `[...arr]`)

```jsx
//react-app-polyfill
npm install react-app-polyfill
yarn add react-app-polyfill
```

```jsx
//index.js 에 import 해서 사용함
//IE9인 경우
import 'react-app-polyfill/ie9';
//IE11인 경우
import 'react-app-polyfill/ie11';
```

stable은 package.json의 browserslist에 해당하는 브라우저에 대해 안정적인 코드를 사용할 수 있게 한다.

적용되지 않는 경우 node_modules/.cache 폴더 삭제하고 다시 실행하면 정상적으로 작동할 것이다.

### 📍core-js

최신 자바스크립트를 지원하기 위한 라이브러리

핵심 polyfill 기능을 최신 자바스크립트에 포함시켜도 우리는 모든 브라우저에서 어플리케이션 호환성을 확장시킬 수 있다는 것을 의미한다.

```jsx
Supported engines⬆
Internet Explorer 8+ (sure, IE8 with ES3 limitations; IE7- also should work, but no longer tested)
```

다음은, 경우에 따라 크로스 브라우징 이슈에 대응하기 위한 자료이다.

[HTML5 Cross Browser Polyfills · Modernizr/Modernizr Wiki](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

[https://velog.io/@jazzyfact95/TIL-React-IE-크로스-브라우징](https://velog.io/@jazzyfact95/TIL-React-IE-%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95)

[https://devowen.com/293](https://devowen.com/293)

[https://developer.mozilla.org/ko/docs/Glossary/Polyfill](https://developer.mozilla.org/ko/docs/Glossary/Polyfill)
