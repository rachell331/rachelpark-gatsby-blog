---
emoji:
title: uesEffect
date: '2022-04-09 23:15:31'
author: Rachel
tags: React useEffect react hooks
categories: React
---

# useEffect 란?

> 부수 효과(Side Effect)
> 화면에 그려지는 요소와 무관한 상태값 변경이 발생할 때 적용하는 것
> 즉, 렌더링 외부세계에 영향을 주는 어떤 행위

class형 컴포넌트의 생명주기(life cycle)에서 `componentDidmount`, `componentDidUpdate`, `componentWillUnmount`가 합쳐진 것과 같다.

**useEffect를 사용하는 대표적인 예**

- 데이터 가져오기(fetch, axios..)
- 구독(setInterval,setTimeout...)
- React 컴포넌트의 DOM을수정

## [개요]

**✔️ 내가 계속해서 헷갈렸던 부분**

1. `useEffect`를 쓰면 매번 재렌더링이 되는가?

2. 재렌더링이 될 때 변하는 값만 업데이트되는가? or 전체가 다시 그려지는가?

3.상태값을 변경할 때 `useState`만 사용하는 경우와, `useEffect`를 사용해야만 하는 경우가 있다. 무슨 차이인가?

정말 많이 사용하는 hook인 `useEffect`가 너무 남발하듯 사용하다보니 궁극적으로 사용하는 이유를 혼동하고, 불필요한 일에도 사용하게 되면서 너무 많이 렌더링이 되는 불상사 등 최적화를 시키는 데 문제가 발생하여 의문점이 생긴 부분을 해결해보고자 한다.

## [개념정리]

### 1. 렌더링(Rendering)

→ 리액트에서 함수 컴포넌트의 렌더링은 return문 안에 있는 UI를 화면에 그려주는 작업이다.

렌더링에 영향을 주는 값들은 '상태값'으로 우리가 흔히 알고 있는 `state, props`**값**이다.

따라서 `useEffect`는 렌더링과 무관한 로직이 렌더링과정에서 실행되게 되면, 성능이나 최적화에 영향을 미칠 수 있기 때문에 render가 될 때 실행되면 안된다.

```javascript
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
```

> count는 단순한 숫자에 불과하다.
> (1) 처음으로 화면에 그려질 때(렌더링 할 때) : useState로부터 가져온 count = 0
> (2) setCount에서 현재 count 값에 +1을 리턴해준다. (count update in Click event)
> (3) 컴포넌트를 호출해서 화면에 그린다. (재렌더링) : 이 때 count = 1
> (4) 한 번 더 클릭하면, (2)의 useState 함수가 호출되면서 count의 값을 업데이트해준다.
> (5) 컴포넌트를 호출해서 화면에 그린다. (재렌더링)

_React는 state를 업데이트 할 때마다 컴포넌트를 호출한다.(렌더링)_

여기서 렌더링의 결과물은 `Counter.js`의 상태(state) 값을 지켜본다. 여기서 상태 값은 함수 안에서 고유의 상수로 존재하는 값이다.
따라서 <u>어떠한 데이터 바인딩도 수행하지 않는다.</u>

> 🤔 여기서 질문 : 클릭할 때마다 count값이 계속 바뀌어져서 보이는데, 그럼 이때마다 화면 전체가 렌더링되는건가?
> 답은 YES,
> state를 변경하는 useState를 호출할 때 리액트는 컴포넌트 전체를 다시 한 번 그리게 된다.
> 왜냐하면 리액트는 가장 최신의 렌더링 결과물과 일치하도록 DOM에 업데이트를 해주기 때문이다.
> [정리]

• useEffect는 총 2개의 인자를 받는다.

• 첫번째 인자는 function으로서의 Effect이다.

두번째 인자는 dependency(의존성)인데, 이 deps 리스트가 있다면, 이 리스트에 있는 값 일때만 값이 변하도록(update)

useEffect가 활성화 되는 것이다.

• 이 desp 리스트를 한국말로는 "의존성 배열"이라고 하는데, 이 의존성 배열안에 있는 변수의 상태값이 변할 경우,

function으로서의 effect는 다시 실행된다는 것을 명심하자 (componentDidUpdate)

• useEffect는 함수를 일반적으로 리턴하기 때문에, componentWillUnMount의 역할도 한다.

• useEffect 안에 함수를 넣으면, 그 함수는 dependency가 존재하지 않는 한,

componentDidMount, componentDidUpdate 때 호출된다.

• 리턴 문은 componentWillUnMount일 때 실행된다.

함수를 리턴한다면, useEffect를 리턴받은 그 함수는 componentWillUnMount 때 호출된다.

​
