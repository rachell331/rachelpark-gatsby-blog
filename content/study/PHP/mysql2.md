---
emoji:
title: PHP - MySQL 데이터와 웹 출력
date: '2022-03-07 22:11:04'
author: Rachel
tags: PHP MySQL DB
categories: Study PHP
---

## 사용자가 웹 사이트에 방문해서 페이지를 호출했을 때 발생하는 일

>

1. 사용자가 웹 브라우저로 페이지를 요청하고, 웹 서버로 그 요청이 전달된다.
2. 아파치, 엔진엑스 등의 웹 서버 소프트웨어가 요청받은 파일이 PHP 스크립트인지 확인한다.
   그리고, 파일에 포함된 PHP 코드를 PHP 인터프리터로 실행한다.
3. PHP는 MySQL 데이터베이스에 접속하고, 웹 페이지에 출력할 데이터를 요청한다.
4. MySQL 데이터베이스는 요청받은 데이터를 PHP 스크립트에 전달한다.
5. PHP 스크립트는 전달받은 데이터를 변수에 적절히 나누어 담고, echo 구문을 실행해 웹 페이지 내에서 출력한다.
6. PHP 인터프리터는 웹 페이지의 HTML을 웹 서버로 전달하고 작업을 종료한다.
7. 웹 서버는 웹 브라우저로 HTML을 전달한다.
   이 때, HTML 파일을 직접 요청할 때와 마찬가지로 평범한 HTML이 전달되며, 브라우저는 두 경우를 구분할 수 없다.

![웹 서버, 브라우저, PHP, MySQL 관계도](https://postfiles.pstatic.net/MjAyMjAzMDdfMjk2/MDAxNjQ2NTgxOTI2OTA5.iQnpDwo8y8o_5CHOo_ZkGcXDP2nQl0JJO-EHm3aOdJsg.HDYckGb0ZOz2ieFUMnTXRVwTzy-WsFeqMfyFOiwr2Eog.PNG.bori9791/Screen_Shot_2022-03-07_at_12.52.00_AM.png?type=w966)

### 📍 웹 사이트를 구축할 때 MySQL을 왜 도입할까?

- 데이터베이스의 콘텐츠를 동적으로 가지고 와서 웹 페이지를 생성하고 웹 브라우저에 띄워서 보여주기 위함이다.
- 사용자 : 웹 사이트에 방문해서 페이지를 요청한다.
- 브라우저 : 웹 서버에서 표준 HTML 문서를 받아서 출력한다.
- 콘텐츠 : 하나 이상의 MySQL DB 테이블에 저장이 되어 있다. 그리고 이 자료는 오직 SQL 쿼리 명령문을 사용해 주고받을 수 있다.

### 📍 PHP 스크립트가 하는 역할은 무엇일까?

여기서 PHP 스크립트는 두 가지 역할을 한다.
첫 번째, DB에서 데이터를 가져오는 SQL 쿼리
두 번째, 브라우저가 요청한 페이지를 처리하는 HTML

## PHP & MySQL

| 목표 : MySQL에서 사용자 계정 생성하고 PHP를 통해 MySQL에 접속한다.

1. MySQL 사용자 계정 생성하기
   [MySQL Workbench] - [Users and Privileges] - [Add Account] 로 계정 생성
   ![하단의 Add Account를 누르면 새로운 사용자를 등록할 수 있다.](https://postfiles.pstatic.net/MjAyMjAzMDdfMTEg/MDAxNjQ2NTgzNzM2MDQy.btmDTZO_5YwgWnAt4z5fNqbPEZsYsFqnSD4W20QN5n4g.LetC8Hc1YN2zVp5Gjn4Wz8OfS-goBlY5SaXuu4I-CKUg.PNG.bori9791/Screen_Shot_2022-03-07_at_1.20.42_AM.png?type=w966)
   하단의 Add Account를 누르면 새로운 사용자를 등록할 수 있다.

특정 권한을 부여하고 싶을 경우 상단의 탭 메뉴에서 [Schema Privileges] - [Add Entry] - 권한 부여하고 싶은 특정 스키마 옵션 선택
![](https://postfiles.pstatic.net/MjAyMjAzMDdfMTgw/MDAxNjQ2NTg0MjQ0NzU5.IfR5augsh2a2XogH7KQOcfW8ql2hZFzYdVHCqyUG-HQg.p5U-LKqZs4_OUnI-kSjutVkj1BvkY-ExRt8gDo_gSB8g.PNG.bori9791/Screen_Shot_2022-03-07_at_1.29.36_AM.png?type=w966)
![](https://postfiles.pstatic.net/MjAyMjAzMDdfMTI1/MDAxNjQ2NTg0MzMzNzYx.yVKoONQb7FOWQlAsLJhbkHn3e2VrND8VOIKwPAWgQIwg.BUpE-jB33XlOwGO_56tmz9ez-K8cw1sogcXdlmZwzp8g.PNG.bori9791/Screen_Shot_2022-03-07_at_1.31.12_AM.png?type=w966)

ok 버튼 클릭시 하단의 체크 박스가 나오는데, 각 체크 박스는 SQL 명령을 실행하는 권한을 나타낸다. 모두 권한을 부여하고자 할 경우 "Select All"을 클릭하고 Apply 버튼을 누르면 끝난다.

2. PHP를 사용하여 MySQL에 접속

[방법]
(1) MySQL 라이브러리

- 가장 오래된 데이터베이스 라이브러리
- PHP 2.0에 처음 도입
- 간단한 기능만 갖춤. PHP5.0에서 MySQLi로 대체
- mysql_connect()

(2) MySQLi(MySQL Improved) 라이브러리

- PHP 5.0 부터 적용
- mysqli_connect(), mysqli_query()

(3) PDO(PHP Data Object) 라이브러리

- PHP 5.1 부터 적용
- 객체 지향형, 데이터베이스와 통신(거의 모든 서버와 호환되는 장점을 지님)

📌 new PDO 구문

- PDO 객체 반환. 이 객체는 커넥션을 식별하는 정보를 담는다.

```
new PDO('mysql:host=호스트명;dbname=데이터베이스명', '사용자명', '비밀번호')
```

[parameter]

- 데이터베이스 정보를 나타내는 문자열 : DB종류(mysql:), 서버의 호스트명(host=hostname;), DB명(dbname=database)
- PHP에서 사용할 MySQL 사용자명
- 사용자명에 해당하는 비밀번호

```
$pdo = new PDO ('mysql:host=localhost;dbname=humor.joke', 'humordbuser', 'mypw');
```

MySQL서버가 정상적으로 작동하지 않을 경우, new PDO 구문은 예외를 발생시킨다.

> ✔️PHP 예외처리
> PHP가 지시받은 작업을 수행하지 못했을 때 발생.
> 예외가 발생하면 PHP는 작동을 멈추고 이후의 코드를 실행하지 않는다.
> 이 때, 오류 메세지를 표시하는데, 데이터베이스 접속 코드에서 예외가 발생할 경우 이 오류 메세지에 사용자의 정보가 담길 수 있다. 그래서 에러 핸들링에 각별히 주의해야 한다!

❗️따라서 예외를 처리하려면, 예외가 발생할 가능성이 있는 코드를 *try 구문*으로 감싸야 한다.

```php
try {
   //예외가 발생하는 작업
}
catch (ExceptionType $e) {
  //예외 처리
}
```

`try..catch..` 구문에서 `catch`는 예외가 발생했을 때만 실행된다.

```php
try {
   $pdo = new PDO('mysql:host=localhost;dbname=humor.joke', 'humordbuser', 'mydb');
   $output = '데이터베이스 접속에 성공하였습니다.';
}
catch (PDOException $e) {
   $output = '데이터베이스 서버에 접속할 수 없습니다.';
}
include __DIR__ . '/../templates/output.html.php';
```
