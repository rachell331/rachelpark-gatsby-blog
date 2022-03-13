---
emoji:
title: webpack으로 빌드하기
date: '2022-03-13 22:05:51'
author: Rachel
tags: Front Study webpack React babel webpack-babel build
categories: Study React
---

### webpack & babel

<aside>
📌 목표 : CRA 없이 웹팩과 바벨을 사용해서 프로젝트 초기 세팅을 진행하려고 한다.
</aside>

웹팩은 자바스크립트로 되어 있고, node는 자바스크립트 실행기일 뿐이다!
웹팩의 역할 : 파일을 하나로 합쳐준다. `webpack.config.js` 로 모든 것이 돌아간다.

1. npm 시작

```bash
npm init
```

author 설정해주고, license 적어준 다음, enter 하면 package.json이 생긴다.

1. react, react-dom 설치

```bash
npm i react react-dom
```

1. webpack 설치

```bash
npm i -D webpack webpack-cli //D는 개발시에만 필요할 때 붙임, 실제 서비스에 필요하지 않을 경우
```

그래서 설치가 되고, `package.json` 을 보면, 실제 서비스에 필요한 것들은 `dependencies` 에, 개발에만 쓰이는 것들은 `devDependencies` 에 기록된다.

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Rachel",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2"
  }
}
```

1. `webpack.config.js` 파일 생성

```json
const push = require('path'); //node에서 path 조작

module.exports = {
    name: 'webpack-practice',
    mode: 'development', //실서비스일 경우 'production'으로 변경해주면 된다.
    devtool: 'eval', //빠르게
    resolve: {
        extensions: ['.js', '.jsx']
    }, //entry에서 확장자를 생략하기 위한 설정
    entry: {
        app: ['./client'], //client.jsx가 Component.jsx를 파일 내에서 불러오기 때문에, 중복으로 사용할 필요 없음,
    }, //입력
    output: {
        path: path.join(__dirname, 'dist'), //join을 하면 알아서 현재 폴더 내에서 경로를 합쳐줌
        filename: 'app.js'
    }, //출력
};
```

1. `client.jsx` 파일 생성

기존에 script로 불러왔던 파일들을 노드의 모듈 시스템을 활용해서 npm에 설치했던 것을 바로 불러올 수 있게 된다.

```jsx
constReact = require('react');
constReactDom = require('react-dom');
constComponent = require('./Component');

ReactDom.render(<Component />, document.querySelector('#root'));
```

1. 웹팩 실행 방법

(1) npx로 실행하기

```jsx
npx webpack
```

(2) `package.json` 에 script 내에 구문 작성하기

```jsx
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack"
  },
```

그리고 터미널 창에 `npm run dev` 입력시 웹팩 실행

1. babel의 필요성

6번을 실행하게 되면 에러와 맞닥뜨리게 된다.

```visual-basic
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const MyComponent = require('./MyComponent')
|
> ReactDom.render(<MyComponent/>, document.querySelector('#root'));
```

웹팩이 `jsx` 파일을 읽지 못해서 발생하는 오류이다.

→ 바벨 안에서 jsx 설정을 해줘야지만, 이를 사용할 수 있게 된다.

1. babel 설치하기 - 개발에서만 사용한다.

```bash
npm i -D @babel/core //바벨의 기본적인 것
npm i -D @babel/preset-env //설치 환경에 맞추어 최신 문법을 구버전으로 바꿔주는 것을 지원함
npm i -D @babel/preset-react //jsx 같은 확장자 지원
npm i -D babel-loader //바벨과 웹팩을 연결해줌
```

1. `webpack.config.js` 에 modules:[] 추가

→ entry에 있는 파일을 읽고, 거기에 module을 적용한 후 이를 output에 출력한다.

→ entry와 output 사이에 추가

```bash
modules: {
        rules: [{
            test: /\.jsx?/, //(1)
            loader: 'babel-loader',  //(2)
            options: {
							presets: ['@babel/preset-env', '@babel/preset-react'].
						} //(3)
        }], //여러개의 규칙을 적용하기 때문에 배열로 작성
    },
```

(1) 규칙을 적용할 파일들 - 의미 : (정규표현식).js파일과 .jsx 파일에 이 rule을 적용하겠다는 의미이다.
(2) 어떤 룰? 바벨 로더: 최신 문법들을 옛날 브라우저에서도 돌아가는 문법으로 바꿔주는 역할
(3) 바벨의 옵션들

→ 다시 웹팩을 실행해본다.(6번)
