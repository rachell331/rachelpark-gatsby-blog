---
emoji:
title: WASH - 전체 UI화면에 공통사항으로 적용될 Navigation 컴포넌트 작성하기
date: '2022-01-06 15:30:10'
author: Rachel
tags: Project
categories: Project
---

> **필수구현사항**

- 대메뉴에 마우스 Enter시 메뉴 slide-down, 메뉴에서 마우스 Leave 시 메뉴 slide-up
- 반복되는 내용은 컴포넌트로 분리, Array.map( ) 활용
- state와 props 적절하게 활용할 것

> ** Refactoring Review**

#### 1. import 순서

가독성을 위해 import 순서를 변경해주는 것이 좋다.

- React → Library(Package) → Component → 변수 / 이미지 → css 파일(scss 파일)

`변경 전`

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
```

`변경후`

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { SubMenu } from './Components/SubMenu';
import '../Nav/Nav.scss';
```

#### 2. 라이브러리 설치 확인하기, scss파일에서 import 확인 제대로 하기, 다른 branch에서 작업했을 경우 branch끼리의 merge해서 적용되도록 한다.

- react-icons도 라이브러리 이므로, 항상 설치되어 있는지 확인할 것
- react icon 설치 명령어 : `npm install react-icons --save`
- git branch간 병합 명령어 : `git merge branch명` (merge하고자 하는 branch에서 작업 실행할 것)

#### 3. 함수의 기능이 같을 경우 하나로 합칠 것

`기존 코드`

```js
export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      visible: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      visible: false,
    });
  };
```

visible이라는 Boolean값을 state로 만들어서 함수로직에 활용하려 한다.
이 때 두 함수에 같은 boolean값이 들어간 것으로 보아 하나로 합치면 더 간결한 코드가 될 것 같다.

`변경 된 코드`

```js
 onHover = visible => {
    visible
      ? this.setState({ visible: true })
      : this.setState({ visible: false });
  };

return (
      <nav
        onMouseLeave={() => {
          this.onHover(false);
        }}
      >
        <div className="innerNav">
          <h1 className="logo">
            <Link to="/">
                       <img src="/images/logo.png" alt="wash korea logo" />
            </Link>
          </h1>
          <div
            className="gnb"
            onMouseEnter={() => {
              this.onHover(true);
            }}
          >
```

#### 4. 반복되는 코드는 컴포넌트화 및 map() 사용하기

기존 코드에서는 하위 메뉴 부분은 전부 하드 코딩을 했었다. 이를 컴포넌트 분리해서 map()을 써서 활용하면 코드를 간결화 할 수 있다.

✔ SubMenu 컴포넌트 분리하기
→ 부모 컴포넌트에서 리스트 배열(SUB_MENU)작성한 내용을 props로 불러와서 사용하기

```js
export class SubMenu extends Component {
  render() {
    const { sub } = this.props;

    return (
      <ul className="depth02">
        {sub.map((value, idx) => {
          return (
            <li key={idx}>
              <Link to="/">{value}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
```

✔ 부모 컴포넌트에서 하위 메뉴 배열 생성

```
const MENU = ['제품', '워시 소개', '매장 안내', '이벤트'];

const SUB_MENU = [
  ['샤워', '샴푸', '바디워시', '비누', '배쓰 밤', '샤워용품'],
  ['바디', '바디 로션', '바디 미스트', '바디 오일', '바디 스크럽'],
  ['페이스', '폼클렌징', '팩', '스킨', '로션'],
  ['헤어', '헤어 에센스', '헤어 미스트', '헤어 스프레이', '드라이 샴푸'],
];
```

✔ state인 visible을 활용하기 위해 조건부 렌더링 사용
→ visible=true일 경우 lnbWrapper 하단 내용이 보이고 visible=false일 경우, lnbWrapper 하단 내용이 사라진다.

```js
{
  visible && (
    <div className="lnbWrapper">
      <div className="lnb">
        {SUB_MENU.map((value, idx) => {
          return <SubMenu sub={value} key={idx} />;
        })}
      </div>
    </div>
  );
}
```

#### 5. css 컨벤션 수정하기

[CSS property 순서]

- Layout Properties (position, float, clear, display)
- Box Model Properties (width, height, margin, padding)
- Visual Properties (color, background, border, box-shadow)
- Typography Properties (font-size, font-family, text-align, text-transform)
- Misc Properties (cursor, overflow, z-index)
