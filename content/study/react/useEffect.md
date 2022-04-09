---
emoji:
title: uesEffect
date: '2022-04-09 23:15:31'
author: Rachel
tags: React useEffect react hooks
categories: React
---

# useEffect

태그: function, skills

# useEffect 란?

> 부수 효과(Side Effect)
화면에 그려지는 요소와 무관한 상태값 변경이 발생할 때 적용하는 것
즉, 렌더링 외부세계에 영향을 주는 어떤 행위
> 

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