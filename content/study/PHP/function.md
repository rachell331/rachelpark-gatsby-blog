---
emoji:
title: Functions
date: '2022-02-25 23:43:26'
author: Rachel
tags: PHP Study
categories: Study PHP
---

#### strlen

strlen — 문자열 길이 가져오기

```
strlen ( 문자열 $string ): 정수
```

주어진 문자열의 길이를 반환한다.

```php
<?php
    $str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nesciunt blanditiis repellendus nulla facere molestiae a. Aspernatur alias aut corrupti ex quis. Reprehenderit nam eos, inventore culpa at sapiente suscipit?";
    echo str;
?>
    <h2>
    <?php
    echo strlen($str)
    ?>
```

#### nl2br

nl2br — 문자열의 모든 줄 바꿈 앞에 HTML 줄 바꿈을 삽입합니다.

```
nl2br(string $string, bool $use_xhtml = true): string
```

`<br>`태그가 인식된 문자열을 반환한다.

```php
<?php
    $str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.

    Rerum nesciunt blanditiis repellendus nulla facere molestiae a. Aspernatur alias aut corrupti ex quis. Reprehenderit nam eos, inventore culpa at sapiente suscipit?";
    echo $str;
?>

<?php
    echo nl2br($str);
?>
```

#### file_get_contents

file_get_contents — 전체 파일을 문자열로 읽습니다.

```
file_get_contents (
     string $filename ,
     bool $use_include_path=false ,
     ? 리소스 $context=null ,
     정수 $offset= 0 ,
     ? 정수 $length=null
): 문자열 | 거짓
```

파일의 내용을 문자열로 반환한다. 실패시 false 반환하며, 공백이나 특수문자가 있는 URI를 여는 경우에는 urlencode( )를 사용해서 URI 인코딩 작업을 거쳐야 한다.

[parameter]

- filename : 읽을 파일의 이름
- use_include_path : 포함 경로
- context : null(default)
- offset : 읽기가 시작되는 지점
- length : 데이터의 최대 길이

예제
(1) 웹사이트 url 출력

```php
<?php
$homepage = file_get_contents('http://www.example.com/');
echo $homepage;
?>
```

(2) include_path 내에서 검색하기

```php
<?php
// If strict types are enabled i.e. declare(strict_types=1);
$file = file_get_contents('./people.txt', true);
// Otherwise
$file = file_get_contents('./people.txt', FILE_USE_INCLUDE_PATH);
?>
```

(3) 파일의 섹션 읽기

```php
<?php
// Read 14 characters starting from the 21st character
$section = file_get_contents('./people.txt', FALSE, NULL, 20, 14);
var_dump($section);
?>
```

[예제] - data/id 값에 해당하는 파일의 내용 불러오기

```html
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
    <?php
    echo file_get_contents("data/".$_GET['id']);
    ?>
  </body>
</html>
```

- _참고_ 문자열 + 변수 함께 사용시 .(마침표)를 사용

```
"data/".$_GET['id']
```

url 순서

- localhost:포트번호/index.php?id=HTML
- localhost:포트번호/index.php?id=JavaScript
- localhost:포트번호/index.php?id=CSS

​

#### 조건문

> id 값이 존재하지 않으면, welcome home을 출력
> id 값이 존재하면, data 폴더 내의 각 id값에 해당되는 콘텐츠가 출력
