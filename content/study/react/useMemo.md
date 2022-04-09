---
emoji:
title: useMemo
date: '2022-02-13 22:49:52'
author: Rachel
tags: Front React useMemo
categories: React
---

useMemo, useCallback과의 차이점은 무엇인지(useCallback에 대해서는 다음글에서 다뤄보기로 한다.), uesEffect랑 어떤 차이가 있는지 알아보기로 한다.

첫번째! 성능최적화의 방법 중 하나인 useMemo에 대해 알아보자.

리액트 고수들만 잘 사용할 수 있는 스킬 중에 하나라고 하는데..! 사실 이 기능이 없어도 충분히 개발은 할 수 있다.

useMemo에 대해서 알기 위해서는 우선 메모이제이션 이라는 개념에 대해 알아야 한다.

메모이제이션 이란?

컴퓨터 프로그램이 동일한 계산을 반복해서 해야 할 때, 이전에 계산한 값을 메모리에 저장해서 동일한 작업을 최소화시켜 성능을 최적화하는 작업

useMemo는 간단하게 설명하자면, return 값을 기억해 두었다가 다시 사용하는 것이다. useCallback은 함수를 기억한다는 것에서 useMemo와 차이가 있다. 또한 useEffect()처럼 뒤에 의존성 배열을 함께 사용하는데, 이는 의존성 배열 안에 들어있는 값이 변경되었을 때만 메모이제이션을 함으로써 렌더링을 최적화시켜준다.
