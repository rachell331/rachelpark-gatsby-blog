---
emoji:
title: React+Typescript 초기 세팅
date: '2022-01-17 19:14:31'
author: Rachel
tags: Front React Typescript
categories: React TS
---

- CRA+TS 타입스크립트 초기 세팅과정

1. 설치

```json
yarn create react-app my-app --template typescript
```

2. tsconfig.json 설정

```
{
  "compilerOptions": {
    "target": "es2016",
    "jsx": "react-jsx",
    "noImplicitAny": true,
    "module": "esnext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

3. eslint, prettier 설정
   참고 : [https://pravusid.kr/typescript/2020/07/19/typescript-eslint-prettier.html](https://pravusid.kr/typescript/2020/07/19/typescript-eslint-prettier.html)

```json
npm i --save typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i --save prettier eslint-plugin-prettier eslint-config-prettier
```

`.eslintrc.json` 파일 루트 디렉토리에 생성

```jsx
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    //"prettier/@typescript-eslint"
//prettier/@typescript-eslint has been removed in eslint-config-prettier v8.0.0.
  ]
}
```

참고[https://stackoverflow.com/questions/65675771/eslint-couldnt-find-the-config-prettier-typescript-eslint-after-relocating](https://stackoverflow.com/questions/65675771/eslint-couldnt-find-the-config-prettier-typescript-eslint-after-relocating)

4. `.vscode/setting.json`

```jsx
{
  "eslint.validate": [
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "javascript.format.enable": false,
  "typescript.format.enable": false
}
```

5. .gitignore

```jsx

.eslintcache
.vscode
.eslintrc
.prettierrc
```

6. router 설치

```json
npm i --save react-router-dom @types/react-router-dom
```

7. style-component 설치

```jsx
npm i styled-components @types/styled-components
```

8. reset style 설치

```jsx
yarn add styled-reset
```

9. `Globalstyle.tsx` & `theme.tsx` 설정하기

- react+typescript globalstyle 적용하기 + 스타일 props로 넘겨줘서 사용하기

```jsx
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  html, body {
    background: #f0f3f8;
  }

  a {
    text-decoration: none;
    
    &:visited {
      color: black;
    }
  }
`;

export default GlobalStyle;
```

```jsx
export interface ThemeProps {
  [key: string]: string | object;
}

export const theme: ThemeProps = {
  bgColor: '#f0f3f8',
  mainColor: '#333333',
  fontBlack: '#000000',
  fontWhite: '#ffffff',

  wrapper: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
  },

  flexCenter: {
    display: 'flex',
    justifyContnet: 'center',
    alignItems: 'center',
  },

  positionRelativeTop: {
    position: 'relative',
    top: 0,
    left: 0,
  },

  positionRelativeCenter: {
    position: 'relative',
    top: '50%',
    left: '50%',
    trasnform: 'translate(-50%, -50%)',
  },

  positionAbsoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    trasnform: 'translate(-50%, -50%)',
  },
};
```

> 💡 theme 다른 파일에서 불러와서 사용하고 싶을 때는 어떻게 하나?

- `기존`

```jsx
const PageNumber = styled.a`
  padding: 10px;
  font-size: 1.375rem;
  color: ${(props) => (props.isActiveButton ? '#3274e7' : '#333')};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.mainColor}; //그냥 이렇게 불러오면 됐었는데..
  }
`;
```

- `typescript` : type이 지정이 안되어있다는 에러가 나온다

```jsx
const theme: { [key: string]: string } = {
  bgColor: '#f0f3f8',
  mainColor: '#333333',
};

export default theme;
```

theme에서 타입 지정해주고, globalstyle에서는 변수 사용안함

📎참고

[https://junghyunkim.tistory.com/entry/이펙티브-타입스크립트2-타입스크립트-설정-noImplicitAny-strictNullChecks](https://junghyunkim.tistory.com/entry/%EC%9D%B4%ED%8E%99%ED%8B%B0%EB%B8%8C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B82-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-noImplicitAny-strictNullChecks)

```toc

```
