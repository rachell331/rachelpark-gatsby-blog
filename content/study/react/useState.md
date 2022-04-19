---
emoji:
title: useState()
date: '2022-04-19 23:17:24'
author: Rachel
tags: React
categories: React
---

# useState

[정의]

- state를 함수 컴포넌트 안에서 사용할 수 있게 해준다.

- state를 조작하고 제어하는 기능.

​

[특징]

- 배열 구조 분해로 state 변수를 할당한다. (한 쌍의 value)

- state 변수를 선언하는 역할을 한다. (첫 번째 value)

- state 변수를 갱신하는 함수를 반환한다. (두 번째 value, setState 함수)

- 클래스 컴포넌트의 this.state와 동일한 기능을 제공한다.

- 초기 state값을 세팅할 수 있는 옵션을 제공한다. (hooks의 인자값으로 넘겨줌)

- useState를 일단 선언하게 되면, state를 부르는 곳에 값을 리턴해줄 수 있다.

- 컴포넌트가 다음 렌더링을 진행할 동안 useState는 현재 state값을 바라본다.

​

함수형 프로그래밍을 가능하게 해주는 useState, 예제를 통해 살펴보자.

```javascript
const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
};

export default App;
```
