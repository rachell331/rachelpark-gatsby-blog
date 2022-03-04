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

$output 변수는 count.php 파일에서 생성된다.

count.html.php같은 파일을 php 템플릿이라고 한다. 정적 html 내에 들어간 php 구문이 동적내용을 담당한다.

즉 복잡한 PHP코드는 별도의 스크립트 파일로 두고, 변수를 생성한 다음 PHP 템플릿에서 그 변수에 해당하는 값을 동적으로 출력해 내는 방식이다.

​

✔️보안 고려 사항

url을 사용해 모든 파일에 접근하는 웹 브라우저의 특성상 누구나 url을 입력하면 사이트에 접속할 수 있는 치명적인 오류를 안고 있다.

따라서 이를 예방하기 위해 include로 가져올 파일을 public 이외의 디렉토리에 둔다.

public 디렉토리 외부에 있는 파일의 경우, 웹 브라우저에서 url을 입력하는 방식으로 접근할 수 없다. (보안 조치)

- 절대 경로 : 다른 서버에서 작업하게 되면 골치아파 진다. 비추천

- 상대 경로 : 현재 파일을 기준으로 지정한 경로. include를 실행한 파일과 같은 디렉토리 내에서 파일을 찾도록 만든다.

include '../count.html.php';
../ : 현재 스크립트 파일이 있는 디렉토리의 부모 디렉토리

public 디렉토리의 부모 디렉토리인 Project에서 count.html.php를 찾게 된다.

그러나, 상대 경로도 문제 발생의 여지는 아직 있다.

상대 경로는 작업 디렉토리를 기준으로 위치를 판단하는데, 이 작업 디렉토리가 기본적으로 스크립트를 실행하는 파일로 설정이된다.

따라서 모든 include 구문에 영향을 끼치며, 직업 디렉토리가 여러 개일 경우, 혼선을 빚을 수 밖에 없다.

​

따라서, 명확한 기준으로 상대 경로를 보완하기 위해, **DIR** 상수를 사용해야 한다.

​

**DIR**

: 현재 파일의 절대 경로 파악

저장된 위치에 따라 달라지며, 작업 디렉토리의 영향을 받지 않음. 모든 서버에서 잘 작동함.

**DIR**과 /../ 결합 시 public의 상위 디렉토리를 정확하게 은닉할 수 있음

include **DIR** . '/../count.html.php';
public 폴더는 사용자가 직접

접근할 파일과, 브라우저가 요청하는 css, js, image 파일들 만 관리하게 한다.

단, include문으로 참조하는 모든 파일은 public 폴더 외부에 위치시킨다.

PHP & MySQL 닌자 비법서, 한빛미디어(2019.02)

다중 템플릿, 단일 컨트롤러

​

컨트롤러

브라우저의 요청에 따라 PHP 템플릿 중에 하나를 선택해서 보여주는(응답하는) PHP 스크립트
즉, 브라우저로 보낼 템플릿을 결정하는 로직을 담고 있다.

1. form을 PHP 템플릿 형태로 전환한다.
2.

​
