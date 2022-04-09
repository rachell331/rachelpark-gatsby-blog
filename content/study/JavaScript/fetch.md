---
emoji:
title: fetch
date: '2021-12-06 10:58:11'
author: Rachel
tags: Front Study
categories: JS
---

## Using Fetch

```js
fetch(url, options)
  .then((response) => console.log('response:', response))
  .catch((error) => console.log('error:', error));
```

네트워크를 통해 json 파일을 호출해서 콘솔에 data를 찍어보는 과정이다.

fetch( )함수는 url, 즉 API 주소를 첫번째 인자로 옵션 객체를 두번재 인자로 받고, Promise 타입의 객체를 반환한다.
두번째 then에서는 data를 응답 받은 후의 로직을 작성한다.

API 호출 성공시 응답(response) 객체를 resolve, 실패했을 경우에는 예외(error) 객체를 reject한다.

options 객체에는 HTTP방식(method), HTTP 요청 (headers), HTTP 요청 전문(body) 등을 설정,
respones(응답) 객체로 부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 등을 읽어올 수 있음.

### 1. GET 방식

fetch( )함수에서의 default method는 get이다. get방식은 원격 API에 있는 데이터를 가져올 때 사용하는 방식이다.
GET 방식의 경우 요청 전문을 받지 않고, 단순 불러오기만 하는 기능이므로 옵션 인자가 필요없다
단순히 특정 API에 저장된 데이터를 보여주는 웹페이지나 어플리케이션 에서 주로 GET방식의 HTTP 통신을 한다.

```js
base url: https://api.google.com
endpoint: /user/3
method: get
response:
    {
        "success": boolean,
        "user": {
            "name": string,
            "batch": number
        }
    }
```

위와 같은 형태의 데이터를 호출하기 위해서는

```js
fetch('https://api.google.com/user/3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name}` 님 환영합니다);
    }
  });
```

user/3 이 부분에서 `3` 이 user id이다. 고정된 API 형태가 아니라 계속해서 변동이 되므로 상황에 맞게 유동적으로 바꿔줘야 할 때가 있다.

대부분의 REST API는 json 형태의 데이터를 응답하기 때문에 응답(response) 객체는 json 메서드를 제공한다.
`호출`

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

`결과`
응답(response)객체로부터 json 포멧의 응답 전문을 자바스크립트 객체로 반환하여 얻을 수 있다.

```js
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"
}
```

<br />

### 2. POST 방식

원격 API에서 관리하고 있는 데이터를 생성해야 한다면 요청 전문을 포함할 수 있는 POST 방식의 HTTP 통신이 필요하다. fetch( ) 함수에 method 정보를 body에 담아서 넘겨주어야 한다.

1. 두 번째 인자에 method, body를 보내주어야 한다.
2. method가 post라고 명시해주어야 한다. (get은 default라 따로 명시가 필요없었다.)
3. body는 JSON형태로 보내줘야 하기 때문에 JSON.stringfy()함수에 객체를 인자로 전다랗여 JSON형태로 반환해야 한다.

`호출`

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Test',
    body: 'I am testing!',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

`결과`

```js
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 201, ok: true, …}
```

`콘솔 형태`

```js
{title: "Test", body: "I am testing!", userId: 1, id: 101}
```

🥑 **res.json( )의 의미**

```js
fetch('https://api.google.com/user', {
  method: 'post',
  body: JSON.stringify({
    name: 'yeri',
    batch: 1,
  }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      alert('저장 완료');
    }
  });
```

① 첫 번째 then : http 통신에성 response(응답)의 정보를 담고 있는 객체 - Response Object

- 그런데, 직접 console을 찍어보면 백엔드에서 넘겨주는 응답 body, 즉 실제 데이터는 보이지 않는다.
  그 이유는 JSON 데이터를 사용하기 위해서는 Response Object의 json 함수를 호출하고 return 해야 하기 때문이다.
  ② 따라서 두 번째 then 함수에서 응답 body의 데이터를 받을 수 있는 것이다.

### 3. PUT/DELETE 방식

- 수정 시 PUT 방식, 삭제 시 DELETE 방식을 사용한다.
