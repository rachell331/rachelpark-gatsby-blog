---
emoji:
title: 함수 만들기
date: '2022-02-28 23:51:54'
author: Rachel
tags: PHP Study
categories: PHP
---

sum 이라는 함수는 입력값(parameter, 인자값)에 따라 다르게 동작한다.

```php
<?php
function sum($left, $right){
print($left + $right);
}
?>
```

> 기능
> [1] 함수의 입력값을 가져와서 더함
> [2] 그 더한 값을 화면에 출력한다.

_참고_ 하나의 함수는 하나의 기능을 가지는 것이 좋다

함수의 출력값에 대해서 알아보자.
sum2라는 함수는 함수가 자체적으로 결과를 출력해주는 print 기능은 없지만, 값이 출력되는 표현식을 만들 수 있다.

```php
<?php
function sum2($left, $right){
    return $left + $right; //값이 출력되기 때문에 표현식이다.
}
?>
```

파라미터(parameter)는 입력값이고 인자를 전달하면, 파라미터가 그 함수 안에서만 사용되는 변수가 된다.

최종적으로 작업한 결과를 return을 통해 함수를 실행한 결과를 보여준다/표현한다 (표현식)

이 함수 자체는 statement로 값이 되지 않지만, 이 함수를 호출하면 리턴값이 있을 경우 값이 되기 때문에 표현식이라고 말할 수 있는 것이다.
