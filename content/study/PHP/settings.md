---
emoji:
title: Setting with IDE(vscode)
date: '2022-02-21 21:15:30'
author: Rachel
tags: PHP Study
categories: PHP
---

# vscode 환경설정

1.  php랑 apache 먼저 설치하기

[macOS 10.14 Mojave PHP,Apache 설치 - Part1](https://tech.10000lab.xyz/php/php-apache-part1.html)

mac용 설치 가이드

[[was/server] 맥 apache httpd.conf 파일 위치](https://solbel.tistory.com/1467)

mac에서 아파치 설치 경로 확인하기

[[was/server] 맥 아파치 DocumentRoot 경로](https://solbel.tistory.com/1463?category=829515)

최종설정 했을 때 오류가 나온다

![Screen Shot 2022-02-20 at 5.34.23 PM.png](vscode%20%E1%84%92%E1%85%AA%E1%86%AB%20d1a20/Screen_Shot_2022-02-20_at_5.34.23_PM.png)

step1\_ 실행 중인 아파치 서버 확인 & 종료

```basic
ps -aef | grep httpd //확인
sudo apachectl stop //종료
```

step2\_ 아파치 설치파일(httpd.conf) 위치찾기

```basic
apachectl -t -D DUMP_INCLUDES
```

step3\_ 설치파일 에디터 열기

```basic
sudo vi /private/etc/apache2/httpd.conf
```

[[CentOS 7/8] 아파치 웹서버(httpd)와 PHP를 설치하자](https://engineeringcode.tistory.com/94)

리눅스 용 설치 가이드

- 의존성 라이브러리는 뭐고, 왜 설치해야 되는거냐..

[의존성(Dependency)](https://medium.com/leebongho/%EC%9D%98%EC%A1%B4%EC%84%B1-dependency-6f7ad5e93739)

1. vscode 확장팩 php debug, intellisensce 설치하기 및 환경변수 설정

[VScode: PHP executable not found 오류](https://promin.tistory.com/6)

- mac에서 환경변수 설정하기

[Mac : Mac OS에서 환경변수 조회/설정하기 (Checking & Setting environment variable in Mac OS. vim editor. vi editor)](https://cosmosproject.tistory.com/269)
