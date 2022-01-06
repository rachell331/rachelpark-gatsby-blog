---
title: Prep Project
date: '2022-01-04 16:48:20'
author: Rachel
tags: Project
categories: Project
---

![](./prep.gif)

👉 <a href="https://drive.google.com/file/d/1WS_sMDCiSXfQGuiVfNW02JQXhA6RRGI5/view?usp=sharing">데모 영상 전체보기</a><br/>
👉 <a href="http://18.221.140.44:8000/">웹 사이트 방문</a>

## 🏋️‍♀️ 프로젝트 소개

> ### Prep

- 다양한 액티비티 소개, 공유, 판매 플랫폼
- 액티비티 체험 기회 판매 및 제공
- 특정 기준(별점순, 리뷰순 등)에 따라 액티비티 추천 기능
- 원하는 액티비티 저장하거나 참여 후 후기 및 별점 부여 기능
- 마이페이지에서 구매한 상품목록 확인 가능, 리뷰이미지와 태그로 소셜 형태로 공유하는 기능

> ### 개발 인원 및 기간

- 개발기간 : 2021/11/15 ~ 2021/11/26
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- github 링크 : https://github.com/RachelParkBlog/Prep-frontend

> ### 프론트엔드 필수구현사항

1. 소셜로그인(카카오)
2. 메인페이지 - 할인률순, 별점순, 리뷰순, 신규 프립
3. 공통 부분 - Header & Footer & Navigation Modal
4. 리스트페이지 - 필터링, Modal, Pagination
5. 상세페이지 - 리뷰작성 및 확인, 별점기능

## 🥎 프로젝트 Wrap-up

### 내가 맡은 기능

#### ✔ Kakao Social Login

- 카카오 API 연동을 통한 소셜 로그인 구현 (REST API)
- token을 localstorage에 담아 인증된 사용자만 리뷰 작성
- 로그인을 할 경우 메인 페이지에서 '로그아웃' UI 변경

#### ✔ List Page

- children 속성을 사용한 모달창 구현
- 동적 라우팅(query parameter)
  - limit&offset 값 설정을 통한 pagination 구현
  - 카테고리 필터링 기능
  - 가격순, 별점순 등 세부 필터링 기능
- input의 type:range를 활용하여 가격 범위 조정
- checkbox 스타일 지정 및 state, props로 상태관리
- DB 연동된 백엔드 API 주소 데이터 시각화

#### ✔ Others

- Daily, Week Meeting 진행을 통한 scrum 관리(Trello)
- Git의 workflow를 익히고, 협업하는 기술

  <br/>

## <span style="background-color: #DADFED;">🖥 코드 리뷰</span>

🎩 기억하고 싶은 코드

```js

```

👑 새롭게 알 게 된 코드 or 리펙토링 진행한 코드

```js

```

## 🏈 프로젝트를 진행하면서

아쉬웠던 부분,
힘들었던 부분,
불화시 어떻게 해결했는지,
1차 때 부족한 부분을 어떻게 개선하려 했는지

## ⚽️ 프로젝트를 마치며.. </span>

앞으로의 다짐

```toc

```
