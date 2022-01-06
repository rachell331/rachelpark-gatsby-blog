---
emoji:
title: 크로스 브라우징
date: '2022-01-06 22:33:37'
author: Rachel
tags: Front Study
categories: Study
---

# <span style="font-weight: 900;">크로스 브라우징</span>

# babel

Babel은 ES6 이상의 최신 문법을 ES5 이하의 문법으로 작성한 것 처럼 소스코드 내의 문법 형태를 변경해주는 JS transpiler. JS compiler라고 부르기도 한다.

Babel을 사용해 문법 형태가 변경된 소스 코드는 최신 문법을 지원하는 실행 환경 뿐만 아니라 아직 최신 문법들이 적용되지 않은 실행 환경에서도 작동한다.

### 자바스크립트 Build 및 Code 변환

Webpack을 이용하여 빌드를 하여 자바스크립트를 배포할수 있게 만드는데,

이때, Babel은 최신 자바스크립트 코드를 컴파일 타임에 호환되는 자바스크립트 코드로 변환한다.

Poilfill은 런타임에 Browser에서 지원되지 않는 함수를 체크한다.

## @babel/core, @babel/cli

```
# npm
$ npm install --save-dev @babel/core @babel/cli

# yarn
$ yarn add -D @babel/core @babel/cli
```

@babel/core,@babel/cli를 devDependencies에 추가한다. 그 이유는 Babel은 빌드 시에 필요하기 때문이다.

Babel은 plugin과 preset을 통해 코드를 어떻게 변환할지 판단하고 동작한다. plugin은 규칙 하나하나 미세하게 적용할 때 사용한다. preset은 plugin의 배열으로 여러 개의 규칙을 한번에 적용한다.

이는 Babel의 설정 파일인 babel.config.js 혹은 .babelrc에 입력해준다.

Babel command를 실행할 때마다 매번 옵션을 붙이기 번거로워 Babel 설정 파일을 이용한다. 설정 파일은 root에 추가하여 사용한다.

ex) babel.config.js

```
module.exports = fuction(api) {
  api.cache(true)

  const presets = ['next/babel']

  const plugins = [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ]

  return { presets, plugins }
}
```

위의 예시에서는 nextjs를 사용하고 있기 때문에 nextjs의 preset을 적용하였다. 가장 범용적으로 사용하는 preset은 @babel/preset-env이다.

plugin의 경우에는 Babel 공식 사이트 - plugins 혹은 검색을 이용하여 적절하게 사용하는 것이 좋다.

[출처](https://velog.io/@404_jjuya/Babel)

# polyfile

babel을 사용한다고 자바스크립트 최신 함수를 사용할수 있는건 아니다

babel은 문법을 변환해주는 역할만 할 뿐이다.

polyfill은 프로그램이 처음에 시작될 때

현재 브라우저에서 지원하지 않는 함수를 검사해서

각 object의 prototype에 붙여주는 역할이다.

즉, **babel은 컴파일-타임에 실행되고 babel-polyfill은 런-타임에 실행**된다.

babel-polyfill을 사용하고 싶다면 별도로 설정해줘야 한다.

또한 바벨은 ESNext 에서 지원하는 문법을 ES5 문법으로 번역해주지만,

ES5에 존재하지 않는 ES6의 Map, Promise, Set, Object.assigin() 등의 함수를 번역하지 못하기 때문에,

이것을 매꾸기 위해 polyfill 을 사용한다. (Map, Promise, Set 등을 사용가능한 객체로 만들어준다)

즉 babel 라이브러리가 최신 문법을 구형 문법에서도 사용할수 있게 만들어 주는것이라면

polyfill은 새롭게 정의된 객체들을 추가하여 채워주는 개념을 말한다.

babel 은 babel-polyfill 모듈을 사용하면 되지만,

현재 deprecated 되었기 때문에 core-js와 regenerator-runtime을 직접 사용하는 방식을 제안하고 있다.

### .babelrc

대표적으로 ES6 문법을 모아놓은 es2015 preset과 react 문법을 모아놓은 react preset이 있다. 사용할 preset을 presets에 추가하고 presets에 속해있는 plugin 외에 추가로 사용하고 싶은 plugin은 plugins에 넣자.

[출처](https://ljs0705.medium.com/babel-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-a1d0e6bd021a)

## @babel/polyfill

[babel-polyfill 공식](https://babeljs.io/docs/en/babel-polyfill)

async, await, function 을 프로젝트에서 활용하는 경우 설치해야 한다.

```
npm install core-js regenerator-runtime
```

로 설치하고 index.js 에서 아래 import 문을 선언한다.

```
//index.js import 설정
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
```

[출처](https://devhyun.com/blog/post/16)

## optional chaining

```
npm i -D @babel/plugin-proposal-optional-chaining
```

- @babel/plugin-proposal-optional-chaining: optional chaining 문법을 변환해주는 바벨 플러그인
- customize-cra, react-app-rewired: CRA를 커스터마이즈 할 수 있게 해주는 라이브러리

패키지 설치 후 루트 디렉토리에 .babelrc babel confing 파일을 만들어 준 후 optional chaining에 대한 플러그인을 연결 시켜준다.

```
{
    "plugins": [
        [
            "@babel/plugin-proposal-optional-chaining"
        ],
    ]
}
```

[eject 없이 optional chaining 사용하기 출처](https://sustainable-dev.tistory.com/126)

---

## react-app-polyfill

리엑트 개발에서 사용하는 다양한 문법을 변환해주는 라이브러리.

Promise, window.fetch, Symbol, Object.assign, Array.from + [ IE9 Map, Set ]와 같은 필요한 것만 포함하고 있어 사이즈가 작아 가벼운 게 특징이다.

```
npm i react-app-polyfill
yarn add react-app-polyfill
```

을 통해 설치해주고,

```
// IE9의 경우
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// IE11의 경우
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```

프로젝트의 index.js 상단 부에 위처럼 import 해오면 된다.

stable은 package.json의 browserslist에 해당하는 브라우저에 대해 안정적인 코드를 사용할 수 있게 한다.

- 적용되지 않는 경우 node_modules/.cache 폴더 삭제하고 다시 실행.

[https://velog.io/@jazzyfact95/TIL-React-IE-크로스-브라우징](https://velog.io/@jazzyfact95/TIL-React-IE-%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95)
