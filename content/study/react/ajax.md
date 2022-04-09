---
emoji:
title: Ajax(feat. Axios)
date: '2022-01-17 19:10:06'
author: Rachel
tags: Front Study React
categories: React
---

## Ajax (Asynchronous JavaScript and XML)

Ajax는 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만 갱신할 수 있음

즉 Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분에만 표시할 수 있다.

이때 서버와는 다음과 같은 다양한 형태의 데이터(JSON, XML, HTML, 텍스트 파일 등)를 주고받을 수 있다.

**서버에 새로고침 없이 요청을 할 수 있게 도와주는 역할**

- jQuery를 사용하여 **$.ajax( )**
- axios 설치해서 **axios.get( )**
- ES6+ 자바스크립트 **fetch( )**

> 💡 **서버** : 사용자가 페이지 요청을 하면 요청한 페이지를 웹 브라우저에 띄워주는 역할

✔️서버 요청을 하는 방법

1. GET : 주소창 url 입력만에 요청 (특정페이지의 자료 읽기)
2. POST : 서버로 중요한 정보를 전달 (로그인, 회원가입)

### Axios

1. 설치

```jsx
yarn add axios
npm install axios
```

1. 실행

   1. GET요청

   ```jsx
   import axios from 'axios';

   function App(){

     return (
   		...
       <button className="btn btn-primary" onClick={()=>{

         axios.get('https://codingapple1.github.io/shop/data2.json')
         .then((res)=>{ console.log(res.data);요청성공시실행할코드 })
         .catch((err)=>{ console.log(err); 요청실패시실행할코드 })

       }}>더보기</button>
     )
   }
   ```

b. POST 요청

```jsx
axios.post('서버url', { id: 'rachelpark', pw: '23423' }).then();
```

🎩 **Fetch와의 차이점?**

서버와 통신할 때 JSON 파일을 주고 받는다. 서버와 주고 받을 때는 텍스트만 전송할 수 있기 때문에 텍스트처럼 보이게 하기 위해 Object에 `"` 을 다 달아준 것. JSON형 자료는 Object로 변환해줘서 사용해야 하는데, axios를 사용하게 되면 별도로 Object로 자동변환해주는 반면, fetch()는 수동으로 객체로 반환해서 사용해야 한다는 차이가 있다.

공식문서 : [https://axios-http.com/kr/docs/example](https://axios-http.com/kr/docs/example)
