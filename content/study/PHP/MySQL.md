---
emoji:
title: PHP - MySQL 세팅
date: '2022-02-28 23:55:24'
author: Rachel
tags: PHP MySQL DB
categories: Study PHP
---

> ※참고
> PHP 작동 원리 : php는 서버사이드 언어이다. 웹 서버는 php로 작성된 특정 지시문을 읽고 실행한다.
> 사용자가 브라우저에 요청을 하면, 웹 서버는 요청 결과를 전송하기 전에 php 지시문을 먼저 실행한다.

## 데이터베이스

데이터베이스는 하나 이상의 테이블로 구성. 테이블은 하나 이상의 칼럼으로 구성. 칼럼은 테이블에 저장될 데이터의 일부분을 담는다.

### 1. MySQL 설치

설치 사이트 : https://downloads.mysql.com/archives/community/

1-1. MySQL Workbench 설치
https://dev.mysql.com/downloads/file/?id=509437

mysql workbench 실행 후 첫 화면

- 로컬에서 실행 중인 MySQL : 기본값
  hostname : 127.0.0.1 또는 localhost
  port(default) : 3306
- 클릭하면 password 입력창이 나온다. MySQL 설치시 최초 입력했던 비밀번호을 입력하고 test 시도

​

2. 데이터베이스 생성

​

​

[Reference]
https://gmlwjd9405.github.io/2018/05/09/mysql-workbench-guide.html
