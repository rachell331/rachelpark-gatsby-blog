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
