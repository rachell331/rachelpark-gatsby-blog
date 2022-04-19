---
emoji:
title: React Hooks
date: '2022-04-19 23:11:02'
author: Rachel
tags: React
categories: React
---

# 리액트 훅의 역할

→ 함수형 컴포넌트에서 state를 자유롭게 사용할 수 있게 해준다.
→ 즉, 함수형 프로그래밍을 가능하게 한다.

훅의 역사는 recompose에서 시작된다.

![https://www.npmjs.com/package/react-recompose]()

![hook과 상당히 흡사한 모습을 하고 있는 것을 확인할 수 있다.](https://postfiles.pstatic.net/MjAyMjA0MTlfMjI0/MDAxNjUwMzcyOTMyMzA5.B1Izp-JYkFF8f2zPfiDlL66vmciGC1VdPLG3m89iwoIg.XbVg1p-mU8l7dtEx21R1vj_vkSzyROW5KJEdo0Sex74g.PNG.bori9791/Screen_Shot_2022-04-19_at_9.55.26_PM.png?type=w966)

이 라이브러리는 리액트 팀의 간택을 받았고, 이걸 만든 개발자는 리액트팀에 합류해서 hook을 릴리즈하게 된다.
그렇게 우리가 잘 알고 있는 hook이 탄생한 것!

간단한 함수로, 어떻게 편리해졌는지 class형 컴포넌트와 비교를 해보자면,,,

1. 클래스형 컴포넌트

```javascript
class Counter extends Component {
  state = {
    count: 0,
  };
  countUp = (num) => {
    this.setState({
      count: num,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button
          onClick={() => {
            this.countUp(count + 1);
          }}
        >
          증가
        </button>
      </>
    );
  }
}
```

2. 함수형 컴포넌트

```javascript
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
}
```

클래스형 컴포넌트는 일일히 적어야 (ex. didmount, willmount, didupdate..등)하는 반면, 함수형 컴포넌트는 훨씬 간단하고 깔끔하다!✨

useState는 항상 2개의 value를 리턴한다.

대부분 array 형태로 주어지는데, array의 첫 번째 요소는 value이고, 두 번째 요소를 이 value값을 변경하는 함수이다.

state변경함수에 "set"을 붙이는 건 컨벤션일 뿐이다 (하지만, 대중적으로 사용되므로 지키는게 좋겠지..?)

useState는 리액트의 state 관리 범주 안에 있으면서 훅! 끌고와서 사용하는 개념이라고 이해하면 조금 쉬울 것이다.

hook의 의미를 생각해보면 쉽다. (🪝갈고리)

정확하게는, hooks란 react에서 함수형 프로그래밍을 할 때, state에 접근하는 가장 기본적인 방법이다.

​

[장점]

- React state를 함수 안에서 사용할 수 있게 해준다.
- 클래스 안에서 동작하지 않지만 클래스를 작성하지 않고도 사용할 수 있다.
