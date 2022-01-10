---
emoji:
title: JWT
date: '2022-01-08 23:55:37'
author: Rachel
tags: Front Study
categories: Study
---

<<<<<<< HEAD

## 일반적인 인증 토큰 vs 클레임(Claim) 기반 토큰

=======

## <span style="font-weight: 900;">일반적인 인증 토큰 vs 클레임(Claim) 기반 토큰</span>

> > > > > > > 91a7cc9 (Modified: post content modify)

OAuth에 의해서 발급되는 access token은 일반적을 random한 의미없는 스트링 형태이다.

```jsx
a9ace025c90c0da2161075da6ddd3492a2fca776;
```

토큰에 대해 간단하게 설명하자면, access token을 통해서 사용자에게 부여할 수 있는 권한을 판별한 뒤에 허용애주는 역할을 한다.
즉, 토큰을 가지고 토큰과 연관된 정보를 서버에서 찾아야 한다.
일반적인 토큰은 단순 문자열이기 때문에 특정 정보를 담을 수 없다는 단점을 가지고 있다.

1. 발급된 토큰에 대해 만료 시킬 수단이 없다.
2. 발급된 토큰을 검사하거나 처리할 때 마다 DB에 접근해서 검사하게 될 경우 서버에 부담이 생길 수 밖에 없다.
3. 사용자 로그아웃 등으로 인한 토큰 관리 방법이 없다.

이러한 문제점들을 어느정도 해결하기 위해 **_“클레임 기반 토큰 방식”_**이 도입되었다.

- 클레임(Claim) : 사용자 정보, 데이터 속성 등

**클레임 기반 토큰 방식 :** 토큰 자체가 사용자에 대한 정보를 가지고 있는 것이다. JSON을 이용해서 정의한다.
클레임 기반의 토큰은 토큰 자체가 정보를 담기 때문에 외부에서 정보를 불러올 필요가 없다. 따라서 서비스나 API 접근을 제어할 때 서버에서 별도의 처리를 해주지 않아도 되며, 토큰 자체를 서버에서는 관리할 필요가 없기 때문에 구현이 단순해진다는 이점이 있다.
이 클레임 토큰 방식의 가장 대표적인 것이 **JWT** 이다.

> 💡 **JSON Web Token (JWT)**
> 정보를 JSON 객체로 안전하게 전송하기 위한 compact 하고 self-contained 방법을 정의하는 개방형 표준
> JWT는 암호화하여 당사자간의 기밀을 제공하거나 서명된 토큰을 제공한다

```jsx
//클레임 기반 토큰 - 사용자 정보나 데이터 속성등에 관한 정보를 담고 있는 토큰
{
	 "id":"terry",
	 "role":["admin","user"],
	 "company":"pepsi"
}
```

### <span style="font-wieght: 600; background-color: #FFF9B6;">🪵 JWT는 어디에 쓰이나?</span>

- **권한 부여**

사용자가 로그인하면 각 후속 요청에 JWT가 포함되어 사용자를 해당 토큰으로 인식하고, 허용되는 경로나 서비스 및 리소스에 접근할 수 있는 권한을 부여하는 역할을 한다.

**SSO(Single Sign On : 통합 인증) : 한 번의 인증 과정으로 여러 기능을 이용 가능하게 하는 기능. 즉, 하나의 아이디와 비밀번호로 프로그램의 모든 기능을 재로그인 없이 사용하는 기능**
오버헤드가 적고 여러 도메인에서 쉽게 사용할 수 있어서 오늘날 JWT를 널리 사용하게 한 기능이다.

\*오버헤드 : 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간 ・ 메모리 등을 말한다.

- 정보 교환

JWT는 당사자간에 정보를 안전하게 전송하는 방법 중의 하나이다.

**공개/개인 키 쌍**을 사용하여 JWT에 서명할 수 있기 때문에 **발신자를 식별**할 수 있다. 또한 **헤더, 페이로드**를 사용해서 서명을 계산하므로 **콘텐츠가 변경되지 않았는지도 검사**할 수 있다는 장점이 있다.

### <span style="font-wieght: 600; background-color: #FFF9B6;">🪵 JWT의 구조</span>

<span style="font-weight: 500;">1. JWT의 일반적인 구조</span>

```json
xxxxx.yyyyy.zzzzz
```

![[https://miro.medium.com/max/1200/1*u3a-5xZDeudKrFGcxHzLew.png](https://miro.medium.com/max/1200/1*u3a-5xZDeudKrFGcxHzLew.png)](https://miro.medium.com/max/1200/1*u3a-5xZDeudKrFGcxHzLew.png)

[https://miro.medium.com/max/1200/1\*u3a-5xZDeudKrFGcxHzLew.png](https://miro.medium.com/max/1200/1*u3a-5xZDeudKrFGcxHzLew.png)

- _Header (헤더)_

토큰 유형 & 사용중인 서명 알고리즘(HMAC SHA256 또는 RSA )로 구성

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

이 JSON을 Base64Url로 인코딩 한 형태가 JSON 웹 토큰의 첫 번째 부분을 형성한다. (`xxxxx`.yyyyy.zzzzz)

- _Payload (페이로드 - 전송 가능 데이터의 유효크기)_
  Entity(주로 사용자) 및 추가 데이터에 대한 설명
  등록/공개/비공개 클레임 세 가지 유형이 존재한다.

```json
//Payload example
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

**Base64Url로** 인코딩되어 JSON 웹 토큰의 두 번째 부분을 형성한다. (xxxxx. `yyyyy` .zzzzz)

- _Signature (서명)_
  서명을 하기 위해서는 인코딩 된 헤더, 페이로드, 비밀, 헤더에 지정된 알고리즘을 가져와서 서명해야 한다.

```json
//HMAC SHA256 알고리즘을 사용하는 경우 생성되는 서명방식
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```

SON 웹 토큰의 세 번째 부분을 형성한다. (xxxxx.yyyy.`zzzzz`)

<span style="font-wieght: 500;">2. 출력</span>
HTML, HTTP 환경에서 쉽게 인식되는 점으로 구분된 3개의 Base64-Url 문자열로 출력되며
인코딩된 헤더와 페이로드, 그리고 비밀로 서명된 JWT가 최종적으로 보여지게 된다.

![https://cdn.auth0.com/content/jwt/encoded-jwt3.png](https://cdn.auth0.com/content/jwt/encoded-jwt3.png)

```toc

```
