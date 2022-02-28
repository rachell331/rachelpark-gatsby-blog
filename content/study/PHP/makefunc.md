---
emoji:
title: 함수 만들기
date: '2022-02-28 23:51:54'
author: Rachel
tags: PHP Study
categories: Study PHP
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
sum2라는 함수는

```php
<?php
function sum2($left, $right){
    return $left + $right; //값이 출력되기 때문에 표현식이다.
}
?>
```
