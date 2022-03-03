---
emoji:
title: form 예제
date: '2022-03-03 22:44:22'
author: Rachel
tags: PHP Study
categories: Study PHP
---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Form</title>
  </head>
  <body>
    <form action="name.php" method="get">
      <label for="firstname">이름 : </label>
      <input type="text" name="firstname" id="firstname" />
      <label for="lastname">성 : </label>
      <input type="text" name="lastname" id="lastname" />
      <input type="submit" value="제출" />
    </form>
  </body>
</html>
```

## form

- 저장된 데이터를 활용하여 동적 페이지 생성, 사용자와정보를 주고 받는 상호작용 구현
- PHP는 웹페이지를 요청할 때 정보를 함께 실어보낸다. name.html에서 클릭시 name.php 페이지를 요청하며, 쿼리 문자열에 변수를 전달한다.
- "제출"버튼클릭 시 name.php로 이동하고 변수와 값을 쿼리에 자동으로 추가한다. `type="text"` 속성이 지정된 input 태그가 변수의 역할을 맡음. input태그의 name 속성값이 변수명으로, 사용자가 입력한 텍스트는 해당 변수의 값으로 전달된다.

#### form 의 method는 전송방식을 결정한다.

_"get"_: firstname, lastname 값을 쿼리로 전달하고, PHP가 $\_GET 배열에 자동으로 할당됨. 그러나 비밀번호 같은 민감정보는 쿼리로 노출될 경우 곤란해진다.

```php
<?php
$firstName = $_GET['firstname'];
$lastName = $_GET['lastname'];
echo htmlspecialchars($firstName, ENT_QUOTES, 'UTF-8'). ' '. '님, 홈페이지 방문을 환영합니다!';
?>
```

![get 방식일 때의 URL](https://postfiles.pstatic.net/MjAyMjAzMDNfMTYy/MDAxNjQ2MzEyMDQ4MDY3.NMt4AWZ-XJepUYhE3zHLtzaH0zbNyDOFS0BapZZqRxsg.qL1KaL3pkOQfhvYkbjj8l5PIKvuxgYuDLusPzVwgsBEg.PNG.bori9791/Screen_Shot_2022-03-03_at_9.54.01_PM.png?type=w966)

​*"post"* : 사용자가 입력한 정보를 눈에 보이지 않는 경로로 전달. 텍스트가 너무 많아서 이 쿼리를 포함한 전체 URL이 넘어가지 않는 불상사를 막을 수 있다.
=> 쿼리로 변수를 보내지 않음. $_GET 배열로 폼 변수에 접근 불가. `$\_POST` 배열에 할당됨
∴

```php
<?php
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
echo htmlspecialchars($firstName, ENT_QUOTES, 'UTF-8'). ' '. '님, 홈페이지 방문을 환영합니다!';
?>
```

![post 방식일 때의 URL](https://postfiles.pstatic.net/MjAyMjAzMDNfMTcy/MDAxNjQ2MzEyMTU5ODA0.0MOe8kqIx6txZOv996FbxwHlC-pPm0SAdajuDeDUyI0g.nl_pB7Ev0593LyCTHeXoT31hDTAc5-lEmqSt7Pvq2Fsg.PNG.bori9791/Screen_Shot_2022-03-03_at_9.55.54_PM.png?type=w966)

결과페이지는 같지만, 사용자가 "제출"버튼을 눌렀을 때의 이동하는 URL이 다르다.

post 방식은 URL의 제약을 받지 않고, 민감정보를 은폐할 수 있지만, 페이지 출력시 필요한 정보가 URL에 담겨져 있지 않아서 검색 기능 등에 활용하기는 어렵다.

### ✨그럼 언제 Get vs Post 언제 사용할까??

- GET : 폼을 전송해도 서버 자원이 변경되지 않을 때 사용
- POST : 폼 전송 후 그 다음 파일이 삭제되거나 데이터의 변경이 있을 때 사용 (중복처리 방지)
