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

(1) int

(2) float

(3) string
