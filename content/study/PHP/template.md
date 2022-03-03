---
emoji:
title: php 템플릿
date: '2022-03-03 22:44:22'
author: Rachel
tags: PHP Study
categories: Study PHP
---

# 템플릿

필요성 : PHP코드를 따로 모아서 전용 파일로 분리시킨다. (html과 분리 작업)
핵심은 "include문"이다.

## <span style="color: violet;">include문</span>

include문이 실행된 위치에 다른 파일의 내용을 _끼워넣는다_.

[예제]
1부터 10까지 매번 출력하는 대신 $output 변수에 값을 대입한다.
이 때 $output 변수는 스크립트를 실행할 때 빈 값으로 초기화시킨다.

```php
<?php
$output = "";
for ($count = 1; $count <= 10; $count++) {
  $output .= $count . " ";
}

include "count.html.php";
```

📌 `$output .= $count . ' ';`
$output 변수값 끝에 숫자와 공백을 추가한다. .= 는 결합 연산자와 할당 연산자를 연결한 단축 연산자로 기존 문자열 끝에 문자열을 덧붙인다.
원래는 `$output = $output . $count . ' ';`

📌 `include 'count.html.php'`
해당 위치에서 PHP가 `count.html.php`를 실행하라는 명령어.
`count.html.php` 파일 열고, 내용 복사하고, count.php 파일의 include 자리에 붙여넣으면 똑같이 작동한다.

📌 PHP코드로 끝날 경우 닫힘 태그는 불필요

`count.html.php`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>count until 10</title>
  </head>
  <body>
    <p>
      <?php echo $output; ?>
    </p>
  </body>
</html>
```

$output 변수는 count.php 파일에서 생성된다.
`count.html.php`같은 파일을 php 템플릿이라고 한다. 정적 html 내에 들어간 php 구문이 동적내용을 담당한다.
즉 복잡한 PHP코드는 별도의 스크립트 파일로 두고, 변수를 생성한 다음 PHP 템플릿에서 그 변수에 해당하는 값을 동적으로 출력해 내는 방식이다.
