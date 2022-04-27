[환경]

- npm version : 8.5.0 (ver5.6 이상)
- node version : 16.14.1 (ver 14.0.0 이상)

1. CRA - 프로젝트 시작

CRA(Create-React-App)란?

- webpack, babel의 도구를 설치하거나 설정할 필요 없이, 최적화된 build 설정을 함으로써, 쉽고 빠르게 React 프로젝트를 실행할 수 있도록 도와주는 도구

- 설치 방법

```
npm init react-app `프로젝트명`
또는
yarn create react-app `프로젝트명`
```

- 참고 : ![CRA](https://create-react-app.dev/docs/getting-started/#npm)

2. react-router-dom(v6) 설치

- 페이지 이동 방식에 대한 처리를 하기 위한 라이브러리
- 새로운 페이지를 로드하지 않고, 한 페이지 내에서 필요한 데이터만 선택적으로 처리(렌더링)하는 방식(SPA)
- 설치 방법

```
npm i react-router-dom --save
또는
yarn add react-router-dom --save
또는
//직접 버전 적용 설치
npm i react-router-dom@6 --save
```

- v5와 v6 방식에 차이가 있으므로, package.json에서 버전 반드시 확인
- react-router : 웹/앱 용(CRA로 프로젝트를 시작하면 기본으로 설치되어 있다.)
  react-router-dom: 웹 용(설치 필요)

3. .gitignore추가

````
//IDE 설정을 별도로 한 경ㅜ
.idea
.vscode

//eslint, prettier 설정을 했을 경우
.eslintcache
.eslintrc
.prettierrc

4. CRA 폴더 및 파일 구성

바로가기 : 디렉토리 구조 및 컴포넌트 분리 상세

5. styled-components 설치

npm install styled-components --save
CSS-in-JS의 장점

- 참고 : 라이브러리 설치는 모두 package.json에서 확인

6. App.js 설정(router 설정)

- 2번에서 설치한 react-router-dom을 활용한 SPA 구현

- 일반적으로, 사이트의 주축이 되는 페이지들을 router의 각 모듈로 구성한다.

  → 현재 [로그인], [메인], [응시 환경 체크], [응시 화면] 으로 구성됨

- url로 페이지 분기 처리가 된다고 이해할 수 있다. ( ex. ~/main 을 주소창에 입력하면 <Main/>이라는 컴포넌트를 보여준다.)

- BrowserRouter : html의 history api를 이용하여 URL과 UI를 동기화하는 방식

  Routes : Route를 감싸는 부모 역할

  Route : url로 이동하는 동작을 정의할 때 사용되는 컴포넌트, 어떤 url 경로로 유입했을 때 어떤 컴포넌트를 보여줄 지 결정한다.

```javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/check" element={<Check />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
````

7. Style 기본 설정

7-1. styled-reset 설치

npm i styled-reset --save
reset으로 설정되는 style을 라이브러리 형태로 만들어 둔 것

설치해서 사용하면 편리하다.

Globalstyle에서 전역으로 설정해주면 프로젝트 내에서 공통으로 reset style이 적용된다.

7-2. theme, GlobalStyle 설정

(1) GlobalStyle.js

전역 공통 스타일 설정으로 일반적으로 폰트 또는 전역에서 공통으로 적용되어야 하는 스타일 등을 설정한다.

(2) theme.js

자주 사용되는 스타일, css 패턴 등을 모듈 형태로 만들어서 어느 파일에서나 import해서 사용할 수 있도록 한다.

7-3. font 설정

전역에서 설정해주기 위해 별도로 font.js 파일을 생성하였다.

필요한 폰트를 직접 로컬에 다운받아 font 파일에 넣어준다. (폰트 확장자 : .woff)

createGlobalStyle을 활용해서, theme.js와 비슷하게 모듈형태로 폰트를 import해서 사용할 수 있다.

[적용 방법]

index.js에서 ThemeProvider로 적용

ReactDOM.render(
<ThemeProvider theme={theme}>
<GlobalFonts/>
<GlobalStyle/>
<App/>
</ThemeProvider>,
document.getElementById("root")
);

8.프로젝트를 최초로 생성했을 경우

→ 폴더 내에 빈 파일이 없도록 생성해서 github에 올린다.

     (라우팅 된 파일의 내용이 없을 경우, 오류가 발생하므로 주의)

8-1.프로젝트를 최초로 생성한 사람이 아닌 경우

→ git clone 후 반드시 npm install 진행

9.브라우저 실행 및 확인 방법

→ npm start (터미널에서 입력하거나 IDE에서 configuration 설정을 통해 실행)

→ localhost:3000 에서 확인할 수 있다.

    (일반적으로는 자동으로 기본으로 설정된 브라우저의 새 창으로 열린다.)

→ 8-1의 경우 npm install 시 라이브러리 설치가 제대로 안되는 경우가 간혹 있다.

    이럴 경우, 브라우저에서 오류 화면을 확인할 수 있는데, 수동으로 npm install '라이브러리명' 또는 yarn add '라이브러리명'으로 설치해주면 해결된다.
