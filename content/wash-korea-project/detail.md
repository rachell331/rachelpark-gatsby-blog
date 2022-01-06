---
emoji:
title: WASH - ProductDetailPage
date: '2022-01-06 15:31:44'
author: Rachel
tags: Project
categories: Project
---

> **필수구현 사항**

- 구매 수량 버튼을 눌렀을 때 수량에 따른 가격 변동
- 탭 메뉴 클릭 시 스타일 변경 및 스크롤 위치 이동
- 새로고침시 scrollTop 구현
- Mock Data 활용해서 리뷰창 구현하기 → 추후 API 통신

> 1.  state를 활용하여 구매 수량에 따른 가격 변동 버튼 만들기

```js
constructor(props) {
    super(props);
    this.state = {
      quantity: 1,

    };
  }
countUpQunatity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };
countDownQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity < 2 ? 1 : quantity - 1,
    });
  };

changePriceToString = price => {
    let includeCommaPrice = price.toString().split('');
    return (
      includeCommaPrice.slice(0, includeCommaPrice.length - 3).join('') +
      ',' +
      includeCommaPrice
        .slice(includeCommaPrice.length - 3, includeCommaPrice.length)
        .join('')
    );
  };
```

```
const updatePrice = quantity * price;

<button className="minusQuantityButton"  onClick={countDownQuantity} >－</button>
<span>{quantity}</span>
<button className="plusQuantityButton" onClick={countUpQunatity}>＋</button>

총 제품 금액 <span>₩ {this.changePriceToString(updatePrice)}</span>
```

<br />

🐝debugging : 백만원 단위 이후로 `,`표시가 안됨
→ Number.prototype.toLocalString() 사용
숫자를 특정 언어에 맞게 문자열로 변환해준다.

`수정후`

```js
changePriceToString = price => {
  return price.toLocaleString('ko-kr');
```

> 2.  탭 메뉴 클릭 시 스타일 변경 및 스크롤 위치 이동

1. `ref`를 활용해서 특정 요소에 고유값을 부여해서 탭 메뉴를 클릭했을 때 ref를 할당한 요소로 위치가 이동하게끔 만든다.(scroll event)
2. `offseTop`값을 활용해서 요소들의 위치를 받아오려고 했는데, react에서는 documentGetElement 나 querySelector의 사용이 자유롭지 않다. DOM에 직접 접근할 수 없기 때문이다. 이때문에 `ref`를 사용하게 되었다.
3. `window.scrollTo()` : https://developer.mozilla.org/enUS/docs/Web/API/Window/scrollTo
4. 다른 방법 :
   https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element

```js
export class ProductContent extends Component {
  tabMenuDescription = React.createRef();

  goToTabMenu = tabmenu => {
    window.scrollTo({
      top: tabmenu.current.offsetTop - 290,
      behavior: 'smooth',
    });
  };

  render() {

    return (
      <section className="productContent">
        <TabMenu
          goToDescriptionTab={() => {
            this.goToTabMenu(this.tabMenuDescription);
          }}
        />

      <div className="productDetailContents" ref={this.tabMenuDescription}>


```

className `productDetailContents`라는 div 요소에 `tabMenuDescription`라는 ref를 지정해서 window scroll를 현재 인자로 들어온 ref의 (offsetTop - 190)만큼 top(:0)으로부터 smooth하게 이동한다.
290만큼 빼준 이유는 각 요소 위에 탭메뉴가 있는데, 이를 스크롤 했을 때 보여주기 위함이다.

_+) 추가적으로 각 탭 메뉴에 style 요소를 주는 것을 너무 복잡하게 생각해서 생각보다 시간이 오래 걸렸다. 탭 메뉴를 요소의 상단마다 배치했으므로 각 탭 메뉴의 하위메뉴 일부분에다가 style을 주는 간단한 작업이었는데, 함수 로직을 짜내려고 했던게 가장 큰 시간 낭비의 원인이였다.
`ex` 탭메뉴의 인덱스 요소와 탭 메뉴 바로 다음에 나오는 div box에 dataset을 지정해서 이 두 가지 요소의 번호가 같으면 style 속성을 집어넣으려는 바보같은 삽질 때문에 하루를 날려버렸던 기억이 난다........._

> 3.  새로고침시 scrollTop 구현

1. 처음에 test를 진행했을 때는 새로고침이 즉, 재렌더링이 되어도 스크롤이 이전에 머물러있던 위치에 계속해서 고정되어 있음을 발견하였고, 이를 tab menu에 scroll 이벤트가 들어갔기 때문이라고 추측하였다.
2. 하여, 새로고침되면 페이지의 최상단으로 올라가기 위한 작업이 필요하다고 판단됐고, 열심히 구글링을 해보니 React는 새 페이지를 랜더링 한 후 스크롤을 상단으로 자동으로 올려주지 않는다고 한다. 그래서 scrollToTop.js 라는 적절한 컴포넌트를 만들어서 router 전체를 감싸줘서 scroll이 상단에 위치할 수 있게 끔 조치를 취해주면 된다.
   참고 : https://hmtb.tistory.com/37
3.

```js
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
```

위 코드에서 cdu 실행시(재렌더링시) window 전역객체의 scroll을 0으로 만들어준다

> 4.  Mock Data 활용해서 리뷰창 구현하하기

백엔드에서 데이터 형식을 요청했을 때의 데이터에 맞는 형식으로 Mock data를 만들었다.
~~(이후에 데이터 형식 바뀌었음)~~

```
{
  "result": [
    {
      "category": {
        "id": 1,
        "name": "샤워"
      },
      "id": 1,
      "name": "레몬 코 워시",
      "price": 50000,
      "product_image": [
        {
          "id": 1,
          "url": "https://topclass.chosun.com/news_img/1807/1807_008_1.jpg"
        }
      ],
      "sub_category": {
        "id": 1,
        "name": "샴푸"
      },
      "sub_name": "#상큼한 모발 #샴푸바",
      "weight": "55g",
      "description": "안녕하세유"
    },
```

```js
addReviewComments = (id) => {
  const { content, image, rating } = this.state;
  fetch('dat/commentList.json/reviews', {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      product_id: id,
      content: content,
      image: image,
      rating: rating,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        content: data.content,
        image: data.image,
        rating: data.rating,
      });
      if (data.message === 'SUCCESS') {
        this.viewReviewComments(id);
      }
    });
};
```

1. POST로 리뷰 작성한 내용을 db에 전송해준다.
2. 이 때 headers의 Authorization에 로그인된 회원의 토큰을 담아서 인증된 사용자만 리뷰를 작성할 수 있게끔 만들어 두었다.
3. POST로 넘겨줄때는 리뷰창에 입력된 내용이 변경되므로 state값이 변경되었다. (setState 함수 사용)
4. 가장 하단 코드 `if ~ data 메세지가 SUCCESS`일 경우에만 그 다음 함수인 viewReviewComments 함수를 실행하도록 한다.

- 이 함수에 대해 간략히 설명하자면 GET 방식으로 POST로 넘겨준 데이터를 읽어와서 화면에 보이도록 작업하는 함수이다.

```js
viewReviewComments = (id, input) => {
  fetch(`dat/commentList.json/reviews?product_id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        productList: data.result,
        content: input,
      });
    });
};
```

보여주기만 하면 되므로 body에 따로 담을 건 없고, product의 id안에 review 코멘트가 달리는 거이기 때문에 product의 id값을 참조키로 가진다. 따라서 링크에 product_id값을 path parameter로 적용해서 해당하는 리뷰만 나올 수 있도록 작성하였다.
