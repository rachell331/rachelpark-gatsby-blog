---
emoji:
title: PHP - 반복문
date: '2022-02-27 23:20:50'
author: Rachel
tags: PHP Study
categories: Study PHP
---

반복이 되는 코드를 줄이는 건 개발자의 몫..
문법도 중요하지만, 무엇보다 뭘하고자 하는지 설명하는게 우선이다

1. data 폴더에 있는파일의 목록을가져온다.
2. 파일의 목록 하나하나를 li와 a태그를 이용해서 글 목록을 만든다.

## array

```php
array(mixed ...$values): array
```

[예제]

```php
<?php
$fruits = array (
    "fruits"  => array("a" => "orange", "b" => "banana", "c" => "apple"),
    "numbers" => array(1, 2, 3, 4, 5, 6),
    "holes"   => array("first", 5 => "second", "third")
);
?>
```

'배열'은 서로 연관된 데이터를 담는 수단으로 사용되는 경우가 많다.

## scandir

지정된 경로 내에 존재하는 파일 또는 디렉토리 목록들을 나열한다.

```php
scandir ( 문자열 $directory , 정수 $sorting_order=SCANDIR_SORT_ASCENDING , ? 리소스 $context=null ): 배열 | 거짓
내용을 입력하세요.
```

[parameter]

- directory : 나열할 디렉토리
- sorting_order : 나열 순서 (ASCENDING: 오름차순(기본값), DESCENDING: 내림차순)
- context : 매개변수

[예제]

```php
<?php
$dir    = '/tmp';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);

print_r($files1);
print_r($files2);
?>
```

[결과]

```php
//배열
(
[0] => .
[1] => ..
[2] => bar.php
[3] => foo.txt
[4] => somedir
)
//배열
(
[0] => somedir
[1] = > foo.txt
[2] => bar.php
[3] => ..
[4] => .
)
```

✅ Tip
`" "` : php에서 `" "` 로 묶여있을 경우 $뒤에 String은 변수로 인식한다.
`\n` : 일반적인 줄바꿈을 의미함 (심미성이 좋다)

## count

배열 또는 객체의 길이 구하는 메서드

```php
count(Countable|array $value, int $mode = COUNT_NORMAL): int
```

```php
<?php
$a[0] = 1;
$a[1] = 3;
$a[2] = 5;
var_dump(count($a));
?>

//결과
int(3)
```

## while

while루프는 PHP에서 가장 간단한 반복문 유형

```php
while (expr)
statement
```

표현식 내의 중첩된 문을 반복적으로 실행한다.

- 반복이 끝날 때까지(PHP가 명령문을 실행할 때마다) 실행이 중지되지 않는다. (false이면 중지)
- if문을 사용해서 여러 명령문을 그룹화 할 수도 있다.

[예제]

```php
<?php
/* example 1 */

$i = 1;
while ($i <= 10) {
    echo $i++;  /* the printed value would be
                   $i before the increment
                   (post-increment) */
}

/* example 2 */

$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile;
?>

<?php

while( ++$i < 10 ); // look ma, no brackets!
echo $i; // 10

?>
```

자,그럼 앞서 나열했던 목록을 코드로 구현해본다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        a {
            text-decoration: none;
            color: #000;
        }
    </style>
</head>
<body>
    <h1><a href="index.php">WEB</a></h1>
    <ol>
        <?php
        $list = scandir("./data");
        // var_dump($list);
        $i = 2;
        while ($i < count($list)) {
            if ($list[$i] !== "." && $list[$i] !== "..") {
                echo "<li><a href=\"index.php?id=$list[$i]\">$list[$i]</a></li>\n";
                $i++;
            }
        }
        ?>
    </ol>
    <h2>
    <?php if (isset($_GET["id"])) {
        echo $_GET["id"];
    } else {
        echo "Welcome Home!";
    } ?>
    </h2>
    <?php if (isset($_GET["id"])) {
        echo file_get_contents("data/" . $_GET["id"]);
    } else {
        echo "Hello PHP";
    } ?>
</body>
</html>
```
