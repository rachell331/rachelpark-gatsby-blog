---
emoji:
title: Context API
date: '2022-01-17 19:16:15'
author: Rachel
tags: Front React
categories: React
---

# Context API

- 컴포넌트가 많아서 상태 관리가 어려울 때 사용하는 방법 - props 연속 사용, 중첩 발생시 사용
- props 전달 없이도 하위 컴포넌트들 끼리 state값을 동일하게 공유할 수 있다는 장점이 있음
- 하위 컴포넌트들이 props 없이도 부모의 값을 사용할 수 있다.
- Reudx, MobX 등 기타라이브러리 보다 쉽게 전역 상태 관리를 할 수 있다는 장점이 있음

### 🎩 [최상위 컴포넌트에 바로 입력하기]

1. context 만들기

```jsx
/*최상위 컴포넌트에서 선언하기*/
export let StockContext = React.createContext();
```

2. 같은 값을 공유할 HTML을 범위로 감싸기

```jsx
<StockContext.Provider value={공유하고 싶은 데이터}>
	HTML
</StockContext.Provider>
```

3. 하위 컴포넌트들에서 자유롭게 사용하기

```jsx
import { useContext } from 'react'
import {StockContext} from '최상위 폴더명';

let stock = useContext(stockcontext:범위 이름); //hook
//props 없이도 값들을 공유할 수 있다.

console.log({stock})
```

### 🎩 [별도 파일 분리해서 만들기] `src/contexts/Store.js`

```jsx
/*Store.js 파일 따로 만들어서 하기*/

import React, { createContext, useState } from 'react';

export const StockContext = createContext({
  stock: [12, 22, 4],
});

const Store = (props) => {
  const [stock, setStock] = useState([12, 22, 4]);
  return <StockContext.Provider value={stock}>{props.children}</StockContext.Provider>;
};

export default Store;
```

```jsx
/*최상위 컴포넌트 App.js에서 Provider로 감싸기*/

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store, { StockContext } from './contexts/Store'; //🍇
import Navigation from './components/Navigation';
import Main from './Main';
import List from './components/List';
import Detail from './components/Detail';
import shoesData from './shoesData';
import './App.css';

function App() {
  const [shoes, setShoes] = useState(shoesData);
  return (
    <Store>
      //🍇
      <BrowserRouter>
        <Navigation />
        <StockContext.Provider value={{ stock: [34, 26, 19] }}>
          {' '}
          //🍇
          <Routes>
            <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
            <Route path="/list" element={<List shoes={shoes} />} />
            <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          </Routes>
        </StockContext.Provider>
      </BrowserRouter>
    </Store>
  );
}

export default App;
```

```jsx
/*자식 컴포넌트에서 사용하기 : useContext */

import React, { useContext } from 'react';
import { StockContext } from './contexts/Store'; //🍇

export default function Product({ item }) {
  const { stock } = useContext(StockContext); //🍇
  console.log(item);
  return (
    <div className="col-md-4">
      <img src={item.imgUrl} width="100%" height="370px" alt="item" />
      <h4>상품명 : {item.title}</h4>
      <p>
        상품설명 : {item.content}
        <br />
        가격: {item.price}
        <br />
        재고: {stock[item.id]} //🍇
      </p>
    </div>
  );
}
```

> 💡 **Redux : 라이브러리**

- 모든 컴포넌트들이 같은 값을 공유할 수 있는 저장공간(store) 생성 기능
- state 데이터 관리 기능도 있다.
