---
emoji:
title: Node 개요
date: '2022-01-26 14:15:37'
author: Rachel
tags: Study DOM
categories: JS
---

## DOM 이란?

DOM은 **문서의 구조화된 표현(structured representation)**을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 **구조화된 nodes**와 **property**와 **method** 를 갖고 있는 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

### <p style="background-color: #fffae6;">Document Object Model : 문서 객체 모델</p>

👉 자바스크립트 **node 객체**의 계층화된 트리

> 💡 what is **Node** ?
> 노드는 컴퓨터과학에 사용되는 기초적인 단위
> 자료구조를 이루는 하나하나를 의미함 (ex. 연결 구조, 트리 구조)
> **하나의 자료 구조에 포함된 정보**를 의미

_“브라우저는 html 문서를 로딩 시 이 계층 구조를 해석해서 마크업이 어떻게 캡슐화 되었는지 보여주는 노드 객체 트리를 생성함”_

### 노드 객체 유형

```jsx
for (var key in Node) {
  console.log(key + ' = ' + Node[key]);
}
```

![Screen Shot 2022-01-26 at 3.41.06 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ffc6c6f-be70-4b0f-9b20-4dd6dc562d88/Screen_Shot_2022-01-26_at_3.41.06_PM.png)

![Screen Shot 2022-01-26 at 3.41.38 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe28f215-4351-4ac1-9290-a129be62ad73/Screen_Shot_2022-01-26_at_3.41.38_PM.png)

가장 일반적인 유형

- DOCUMENT_NODE (ex. window.document)
- ELEMENT_NODE (ex. <body>, <a>, <p>, <script>, <style>, <html> 등등)
- ATTRIBUTE_NODE (ex. class=”funEdges”)
- TEXT_NODE (ex. 줄바꿈과 공백을 포함한 HTML 문서 내의 텍스트 문자)
- DOCUMENT_FRAGMENT_NODE (ex. document.createDocumentFragment)
- DOCUMENT_TYPE_NODE (ex. <!DOCTYPE html>)
