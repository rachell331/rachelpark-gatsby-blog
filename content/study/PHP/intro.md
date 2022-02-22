---
emoji:
title: Intro & Data Types
date: '2022-02-21 23:38:08'
author: Rachel
tags: PHP Study
categories: Study PHP
---

## 1. 개요

index.html은 정적 페이지를 형성하며, 웹 서버가 해석할 줄 알기 때문에 바로 응답처리를 할 수 있다.

반면, index.php는 웹 서버가 해석할 줄 모르기 때문에 php 구문에서 해석한 결과를 클라이언트에게 전송하게 된다.

또한 php는 웹 페이지를 동적으로 생성할 수 있는 프로그래밍이기 때문에 reload 할 때마다 달라진다.

​

### [1] index.html

브라우저에 <body>안의 내용이 그대로 보인다.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    2022-02-21 22:46:23
  </body>
</html>
```

### [2] index.php

브라우저에서 새로고침을 할 때마다 시간이 실시간으로 변경되는 모습을 볼 수 있다. → reload 될 때 마다 달라지는 모습

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        echo date("Y-m-d H:i:s");
    ?>
</body>
</html>
```

## 2. 데이터 Types

[](https://www.php.net/manual/en/language.types.intro.php)

(1) int & float

- 정수(Integer) [ ...,-1,0,1,2,...]
- 부동소수점(float) : 소수점

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
echo 1; //출력 방법1
print(2); //출력 방법2
echo 1.1;
?>
</body>
</html>
```

출력 할 때 : echo
구문이 끝나면 무조건 ;(세미콜론)은 필수
사칙연산

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h3>1+1</h3>
<?php echo 1+1?>
<h3>2-1</h3>
<?php echo 2-1?>
<h3>2*2</h3>
<?php echo 2*2?>
<h3>4/2</h3>
<?php echo 4/2?>
</body>
</html>
```

(2) string

- 문자열 표현 방식 : `' '`, `" "` 로 표현 (큰 따옴표는 큰 따옴표 끼리, 작은 따옴표는 작은 따옴표 끼리)
- `echo "Hello \"W\"orld!";` 이렇게 하면 중복 사용 가능 ( `\ `)사용!

```
<?php
echo "Hello World!";
?>
```

- concatenation operator(결합 연산자) : `.` (좌항, 우항을 결합해서 하나의 문자열을 만든다.)

```
<?php
echo "Hello "."World!";
?>
```

- 문자열 길이 구하기 :

```
int strlent ( string $string )
```

```
<?php
echo strlen("Hello World!");
?>
```

(3) 변수(variables)

- 선언 : `$` 로 한다.

```
<?php

$front = "Hello";
$back = "World!";

echo "$front ${$front}";
echo "$back ${$back}";
echo "$front $back";
?>
```
