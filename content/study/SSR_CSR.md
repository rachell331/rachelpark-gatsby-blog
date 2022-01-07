---
emoji:
title: SSR / CSR
date: '2022-01-06 19:09:43'
author: Rachel
tags: Front Study
categories: Study
---

## <span style="font-weight: 900; background-color: #FEECE9;">SSR vs CSR</span>

![SSR과 CSR의 차이 (출처 :  [https://www.bottlehs.com/vue/vue-js-서버-사이드-렌더링/](https://www.bottlehs.com/vue/vue-js-%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81/))](https://www.bottlehs.com/assets/vue-ssr-vs-csr.png)

SSR과 CSR의 차이 (출처 : [https://www.bottlehs.com/vue/vue-js-서버-사이드-렌더링/](https://www.bottlehs.com/vue/vue-js-%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81/))

> 💡 **SSR 이란**
> : Server Side Rendering(서버 사이드 렌더링)의 약자.
> 서버에서 렌더링을 작업하여 웹 사이트의 초기 로딩 속도 개선, 캐싱, 검색 엔진 최적화(SEO)를 가능하게 해주는 기술
> 요청에 맞는 HTML 해석하고 구성해서 사용자에게 보여주는 방식으로 데이터가 맵핑된 페이지를 클라이언트(브라우저)에게 바로 보여줄 수 있다.

서버 사이드 렌더링은 초기 렌더링을 사용자가 아닌 서버 쪽에서 처리하는 것이다. 사용자는 서버에 렌더링한 결과물을 받아와서 사용하기 때문에 초기 로딩 속도가 개선되었다는 특징이 있다.

> 💡 **CSR 이란**
> : Client Side Rendering(클라이언트 사이드 렌더링)의 약자.
> 최초 1회 서버에 전체 페이지 로딩하여 보여준 후 사용자의 요청이 올 때마다 브라우저에 렌더링하는 방식으로 SPA 개발이 용이한 프레임워크(Angular JS 등)이 등장하게 된다.

클라이언트 사이드 렌더링은 데이터를 클라이언트(브라우저)에서 추가로 요청하여 재구성해야 하기 때문에 전체적인 페이지 완료 시점은 SSR보다 느려진다.

### <span style="font-weight: 600;">그렇다면 차이점은?</span>

### <span style="font-weight: 600;">1. 초기 로딩 속도</span>

**초기에 구동되는 속도는 SSR이 빠르다.** 서버를 이용해서 페이지를 구성하기 때문에 CSR보다 페이지 구성 속도는 느리더라도 전체적인 페이지 구성이 완료되어 사용자에게 보여주는 시점(구동시점)은 더 빠르다

CSR은 사용자 반응에 따라 필요한 부분만 렌더링하기 때문에SSR보다 초기 전송되는 페이지의 속도는 빠르지만 html, css, javascript를 읽어들이고 화면을 그리는 시간이 모두 끝나야 콘텐츠가 사용자에게 보여지기 때문에 구동시점은 느리다

### <span style="font-weight: 600;">2. 검색 엔진 최적화(SEO)</span>

대부분의 웹 크롤러나 봇들은 자바스크립트가 아닌 HTML에서 컨텐츠를 수집한다.
따라서 **SSR은 서버에서 렌더링하여 HTML 콘텐츠를 구성하기 때문에 검색 엔진에 노출 가능**하다.
반면, CSR은 빈 페이지로 인식을 하기 때문에 검색 엔진에 제대로 노출이 되지 않는다.

### <span style="font-weight: 900;">3. 보안</span>

SSR은 서버 측에서 세션으로 관리하지만, CSR은 클라이언트 측의 쿠키말고는 저장할 곳이 마땅치 않다.
그렇지만..
SSR이 CSR에 비해 성능이 우수한 면도 있지만 모든 면에서 SSR이 CSR보다 우수하지는 않다.

## <span style="font-weight: 900; background-color: #FEECE9;">Next.js를 사용한 서버 렌더링</span>

Next는 서버 렌더링이 된 앱을 더 쉽게 작성하는데 도움을 주는 오픈 소스
직관적인 라우팅, 정적인 최적화, 자동화된 분리 등의 기능이 들어 있어 개발을 훨씬 용이하게 한다.
CSR과 SSR이 next js 기반에서 어떻게 다른지(왜 SSR이 필요한지)

✔️ **CSR의 한계**

웹 페이지에 필요한 데이터가 방대해지면서, CSR만을 지원하는 경우, 페이지 로드 이후 동적으로 콘텐츠를 생성하기 때문에 콘텐츠를 빠르게 소비하는 사용자 입장에서는 느리다고 느껴질 수 밖에 없다

✔️ **SSR, 그리고 Next.js**

이러한 한계점을 해결하기 위해서 웹 페이지 로드는 React 전용 SSR 프레임워크인 Next.js로 해서 최적화와 동시에 검색 엔진에 노출되게 하고, Ajax와 같은 클라이언트의 요청에 의한 처리가 필요할 경우에만 CSR로 처리함으로써 기존 CSR의 단점을 보완하고, SSR의 장점을 살려준다

✔️ **CRA와 다른점**

Create React App은 단순하고 클라이언트 측에서 렌더링하는 데 필요한 HTML 코드를 생성한다. 따라서 렌더링하기 전에 소스 코드를 보면 기본적으로 몇 개의 js 파일과 빈 div로 구성되어 있음을 알 수 있다. 이 js 파일은 브라우저의 해당 div에 콘텐츠를 만들어 준다(클라이언트 측 렌더링). 즉, 브라우저에서 페이지를 위한 모든 구동이 수행된다.

Next.js는 Create React App과 비슷하긴 하지만 서버 측 렌더링을 지원한다. 본질적인 기능은 URL을 기반으로 서버 자체에서 필요한 HTML 코드가 생성된다는 것이다. 그래서 브라우저는 빈 'div'가 아닌 미리 렌더링된 HTML 코드를 수신함으로써 최적화 시킬 수 있다.

즉, 리액트 기반으로 개발환경을 구축한다는 공통점이 있지만, CRA는 클라이언트 사이드 렌더링(CSR)만 하고, Next.js는 서버 사이드 렌더링(SSR)에 특화된 프레임워크라는 차이점이 있다.

```toc

```
