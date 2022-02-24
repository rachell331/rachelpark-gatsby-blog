---
emoji:
title: URL Parameter
date: '2022-02-24 23:29:37'
author: Rachel
tags: PHP Study
categories: Study PHP
---

# URL Parameter

## Input & Output

php라는 웹 어플리케이션이 URL을 통해서 입력값(input)을 전달받고, 그것을 출력(output)하기
`/parameter.php?name=이름&address=주소`
입력값과 입력값을 구분하는 연산자 : `&`

[parameter.php]

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>파라미터</title>
  </head>
  <body>
    안녕하세오,
    <?php echo $_GET['address'];?>에 사시는
    <?php echo $_GET['name']; ?>님
  </body>
</html>
```

리액트에서의 쿼리 스트링처럼 ? 문자 뒤에 파라미터 값들을 나열해주기

## 활용

예제 ) 보여지는 파라미터(id) 값에 따라서 ui가 다르게 보이도록 수정하기

사용한 문법

```php
$_GET
(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)
$_GET — HTTP GET variables
```

URL 매개변수(쿼리 문자열이라고도 함)를 통해 현재 스크립트에 전달된 변수의 연관 배열입니다.
배열은 GET 요청뿐만 아니라 쿼리 문자열이 있는 모든 요청에 ​​대해 채워집니다.

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      a {
        text-decoration: none;
        color: #000;
      }
    </style>
  </head>
  <body>
    <h1>WEB</h1>
    <ol>
      <li><a href="index.php?id=HTML">HTML</a></li>
      <li><a href="index.php?id=CSS">CSS</a></li>
      <li><a href="index.php?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>
      <?php
        echo $_GET['id'];
    ?>
    </h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam beatae natus delectus
    dolores sapiente cupiditate ipsa, mollitia ullam. Atque aliquam harum vel repellendus est rerum
    veniam? Quidem, beatae cum!
  </body>
</html>
​```
````
