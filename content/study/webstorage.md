---
emoji:
title: Local storage vs Session storage vs Cookie
date: '2022-01-07 20:08:15'
author: Rachel
tags: Front Study
categories: Study
---

## <span style="font-weight: 900;">Local Storage vs Session Storage</span>

웹 스토리지 객체인 local storage, session storage 브라우저 내에 키, 값을 저장할 수 있게 한다.

페이지를 새로고침하거나 브라우저를 재실행해도 데이터가 없어지지 않고 남아있다

> 💡 **Web Storage**
> : 특정 도메인을 위한 세션 저장소, 로컬 저장소의 접근 경로로서 데이터를 추가하거나 수정할 수 있다

- 네트워크 요청시 서버로 전송되지 않아 서버에 부담이 가지 않는다는 장점이 있다.
- 웹 스토리지 조작은 자바스크립트 내에서만 수행되므로 서버가 HTTP 헤더를 통해 스토리지 객체를
  조작할 수 없다
- 대략 5MB까지의 데이터를 저장할 수 있으며 유효 기간이 존재하지 않는다.
- 스토리지 객체를 생성하고, 이를 사용해서 데이터 항목을 추가, 회수, 제거할 수 있다.

### <span style="background-color: #FFF1BD">**&nbsp;&nbsp;🪵 Local Storage&nbsp;&nbsp;**</span>

- 브라우저를 열었다 닫아도 데이터가 남아있다
- 유효 기간 없이 데이터를 저장한다
- 자바스크립트를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야 사라진다
- 저장 공간이 가장 크다
- 도메인별로 생성되고, 다른 `localStorage`에는 접근이 불가능하다
- 서로 다른 브라우저라도 동일한 도메인을 사용할 경우에는 접근이 가능하다
- 토큰과 같이 지속적으로 필요한 정보를 저장하기에 용이하다

### <span style="background-color: #FFF1BD">**&nbsp;&nbsp;🪵 Session Storage &nbsp;&nbsp;**</span>

- 브라우저가 닫힐 때까지만 데이터를 저장한다
- 브라우저가 열려 있는 한 새로고침, 페이지 복구를 걸쳐도 남아있다
- 데이터를 절대 서버로 전송하지 않는다
- 저장 공간이 쿠키보다 크다(5MB)
- 페이지 프로토콜별(HTTPS)로 데이터를 구분한다
- 페이지를 새로운 탭이나 창에서 열면, 최상위 브라우징 맥락의 값을 가진 새로운 세션을 생성한다.
- 같은 URL을 다수의 탭/창에서 열면 각각의 탭/창에 대해 새로운 `sessionStorage`를 생성한다.
- 탭/창을 닫으면 세션이 끝나고 `sessionStorage` 안의 객체를 초기화한다.

### <span style="background-color: #FFF1BD">**&nbsp;&nbsp;🪵 Cookies &nbsp;&nbsp;**</span>

웹 쿠키, 브라우저 쿠키 : 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각
데이터 조각들을 저장해 놓았다가, 동일한 서버에 재 요청 시 저장된 데이터를 함께 전송한다.

쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용
상태가 없는([stateless](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless)) HTTP 프로토콜에서 상태 정보를 기억시켜주기 때문에 세션관리, 개인화, 트래킹에 유용하게 사용된다.

- 세션 관리 : 서버에 저장해야 할 로그인, 장바구니 등의 정보 관리
- 개인화 : 사용자 정의 세팅
- 트래킹 : 사용자 행동 기록&분석 용도

웹 스토리지와 쿠키의 차이점을 다음과 같이 도식화 해보았다.↓

|                 | Local Storage                       | Session Storage                                        | Cookies                              |
| --------------- | ----------------------------------- | ------------------------------------------------------ | ------------------------------------ |
| 파일 저장 크기  | 5 ~ 10MB                            | 5MB                                                    | 4KB                                  |
| 서버 전송       | X                                   | X                                                      | O                                    |
| 브라우저 호환성 | HTML5                               | HTML5                                                  | HTML4/5                              |
| 접근성          | window                              | 동일한 tab                                             | window                               |
| 유효성          | 영원히                              | 브라우저 창을 종료할 때까지                            | 수동                                 |
| 용도            | 지속적인 정보</br>(ex. 자동 로그인) | 잠시 필요한 정보</br>(ex. 일회성 로그인, 입력 폼 저장) | 웹 사이트를 접속한 사용자의 정보수집 |

</br>
</br>
</br>

[https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
[https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)
[https://velog.io/@dorazi/쿠키-웹-스토리지-로컬-스토리지-세션-스토리지](https://velog.io/@dorazi/%EC%BF%A0%ED%82%A4-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80)
[https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
[https://ko.javascript.info/localstorage](https://ko.javascript.info/localstorage)

```toc

```
