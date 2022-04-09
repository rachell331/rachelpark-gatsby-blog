---
emoji:
title: PHP - MySQL 세팅
date: '2022-03-06 23:55:39'
author: Rachel
tags: PHP MySQL DB
categories: PHP
---

> ※참고
> PHP 작동 원리 : php는 서버사이드 언어이다. 웹 서버는 php로 작성된 특정 지시문을 읽고 실행한다.
> 사용자가 브라우저에 요청을 하면, 웹 서버는 요청 결과를 전송하기 전에 php 지시문을 먼저 실행한다.

## 데이터베이스

데이터베이스는 하나 이상의 테이블로 구성. 테이블은 하나 이상의 칼럼으로 구성. 칼럼은 테이블에 저장될 데이터의 일부분을 담는다.

### 1. MySQL 설치

설치 사이트 : https://downloads.mysql.com/archives/community/

1-1. MySQL Workbench 설치
[https://dev.mysql.com/downloads/file/?id=509437](https://dev.mysql.com/downloads/file/?id=509437)

✔️ mysql workbench 실행 후 첫 화면
[mysql workbench 실행 후 첫 화면](https://postfiles.pstatic.net/MjAyMjAzMDVfMTMx/MDAxNjQ2NDUyODU0MTQ1.-GkVnyU1XR1ktU84VEr1q_IgwuvrOQxkLOes_IjGeYsg.lX_IqZscUJQnu88ML_YqYGsRe2Fos_oGcWlZbPnzVF4g.PNG.bori9791/Screen_Shot_2022-03-05_at_1.00.50_PM.png?type=w966)

- 로컬에서 실행 중인 MySQL : 기본값
  hostname : 127.0.0.1 또는 localhost
  port(default) : 3306
- 클릭하면 password 입력창이 나온다. MySQL 설치시 최초 입력했던 비밀번호을 입력하고 test 시도

### 2. 데이터베이스 생성

[스키마 패널] - 마우스 우클릭 - [Create Schema] - Apply까지 눌러야 최종적으로 생성됨
[db생성](https://postfiles.pstatic.net/MjAyMjAzMDVfMjY0/MDAxNjQ2NDU0NDEyODEy.sTirie-txxRPcNS-1D6QqX7wphOca3eO7D5CGX4ioBYg.IGHq6EQ_sB8DRzowlrO3FIo6W6mCGuE_ol1b-st4z-Mg.PNG.bori9791/Screen_Shot_2022-03-05_at_1.26.45_PM.png?type=w966)

### 3. 구조화된 쿼리 언어(SQL)

데이터 베이스 생성시 다음과 같은 구문을 봤을 것이다.

```
CREATE SCHEMA `new_schema` ;
```

이러한 구문 처럼 직접 입력하여 MySQL에 직접 전달하고 실행하는 명령 구문을 구조화된 쿼리 언어(Structured Query Language) 라고 한다.
보통 SQL이라고 칭하며, SQL로 작성한 명령을 "쿼리"라고 부르기도 한다.

> - MySQL 은 데이터베이스 소프트웨어, SQL은 데이터베이스와 소통할 떄 사용하는 언어

- 일관성을 위해 데이터베이스 명령어 : 대문자 표기
- 데이터베이스, 테이블, 칼럼명 등의 엔티티 : 소문자 표기

### 4. 테이블 생성

- 테이블(table) : 데이터 구조 묘사
- [tables] 마우스 우클릭 - Create Table - 테이블 명 작성
  [테이블 생성](https://postfiles.pstatic.net/MjAyMjAzMDZfMjA3/MDAxNjQ2NTYyOTkxNDc0.rniINOaFDZOy5Muk7jIXTT10zTT8_Kk5Vf6B8fEiPyYg.cweVAqssjZQsA2j5aclaMSNSW9Nb4CqXg58IkgNSrysg.PNG.bori9791/Screen_Shot_2022-03-06_at_7.36.25_PM.png?type=w966)

✅ DataType
•INT : 정수(Integer)
•TEXT : 길이가 긴 텍스트
•DATE : 날짜

✅ 필드 체크 박스
•PK : Primary Key의 약자. 기본키. PK로 설정된 칼럼은 테이블 엔트리의 고유한 식별자로 인식된다.
•NN : Not Null. 반드시 값이 존재해야 함. 빈 값으로 두지 않는다.
•AI : Auto Increment 자동 증가. 값을 입력하지 않아도 자동으로 증가됨

### 5. 데이터 추가

테이블 이름 선택 - 마우스 우클릭 - Select Rows - limit 1000 선택
[](https://postfiles.pstatic.net/MjAyMjAzMDZfMjYy/MDAxNjQ2NTY1NzI1NzUz.mGHJNnHJEkOkC9AEgN49fFW49tacH5o2aoaA-ksTXXYg.FeX21HiJ8F6HdQ5N3tOIwtXc02MEHN_v1LrObt6BAmAg.PNG.bori9791/Screen_Shot_2022-03-06_at_8.18.54_PM.png?type=w966)
입력방식 ↓

```
INSERT INTO 테이블명 SET
칼럼명1 = 칼럼값1,
칼럼명2 = 칼럼값2,
...
```

OR

```
INSERT INTO 테이블명
(칼럼명1, 칼럼명2, ...)
VALUES (칼럼값1, 칼럼값2, ..)
```

### 6. 데이터 조회

(1) 전체 컬럼 조회

```
SELECT * FROM `테이블명`
```

(2) 특정 컬럼 조회

```
SELECT `id`, `jokedate` FROM joke
```

(3) 본문 중 일부만 가져오고 싶을 때 : LEFT함수로 텍스트 자르기

```
SELECT `id`, LEFT(`joketext`, 20), `jokedate` FROM `joke`
```

(4) 결과의 개수를 세는 함수 : COUNT( )

```
SELECT COUNT(`id`) FROM `joke`
```

count(\*)로 검색해도 동일한 결과가 나오지만, 컬럼 전체를 읽어야 하기 때문에 오래 걸린다. 기본키로 컬럼을 특정해서 구분지을 수 있다면, 기본키만 검색해도 충분하다

### 7. 데이터 수정

```
UPDATE 테이블명 SET
   칼럼명 = 값, ..
WHERE 조건
```

예를 들어, 글의 등록일자를 변경할 경우

```
UPDATE `joke` SET `jokedate` = "2022-02-05" WHERE id = "1"
```

_WHERE절은 조건문 이다._
생략은 가능하다. 생략할 경우, 모든 컬럼이 동일하게 변경되므로 매우 주의해서 사용해야 한다.

### 8. 데이터 삭제

```
DELETE FROM 테이블명 WHERE 조건
```

[Reference]
https://gmlwjd9405.github.io/2018/05/09/mysql-workbench-guide.html
