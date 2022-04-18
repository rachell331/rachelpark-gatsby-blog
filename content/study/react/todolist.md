---
emoji:
title: React - ToDoList 구현
date: '2022-04-18 23:31:26'
author: Rachel
tags: React
categories: React
---

![](https://images.velog.io/images/bori9412/post/10745309-8c12-4509-87b6-909788d52c17/image.png)

## [ Mission : ToDo List - React로 구현해보기 ]

![](https://images.velog.io/images/bori9412/post/cbe372c8-7efe-43d4-bb37-467f8e930be0/image.png)

전체구조를 도식화 해보았다.
![](https://images.velog.io/images/bori9412/post/9a5ccfdf-371b-490c-88d6-9e913b1c437d/image.png)

📌 **구조 분해 할당**
배열, 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있게 하는 javascript 표현식
`예시`

```javascript
let a, b;
[a, b] = [10, 20];

console.log(a); //10
console.log(b); //20
```

TodoListTemplate.js 에서 props를 인자로 받아야 하는 것을`(props) → { ... ]`의 형태가 아닌
**`({form, children}) → {...}`**의 형태로 작성

<img src="https://images.velog.io/images/bori9412/post/1acfd7cb-8a49-45ae-8539-0534bbe8f44e/image.png" style="margin: 0; width: 500px;">

- form은 input과 button이 들어있는 component를 렌더링할 때 사용 (JSX 형태로 전달)

**📌 e.stopPropagation() : 이벤트의 확산을 멈추는 기능**
여기서는 하위요소의 x를 눌렀을 때 onRemove를 실행해주는데, onToggle에 영향이 가지않도록 하는 것
<img src="https://images.velog.io/images/bori9412/post/1212af21-89b7-419c-b213-4de9bfff1f81/image.png" style="margin: 0; width: 500px;">

📌 **최상위 컴포넌트 (부모컴포넌트)인 App에서 초기값 state 설정하기**

- input 안에 text, todos의 배열 기본아이템 3개, 각 todo 객체들을 구분해줄 id값 지정
- 데이터가 추가될때마다 this.id 값이 +1이 되도록 설정하기

📌 **Form 기능 구현하기**

- input에 입력되는 text가 바뀌면 state를 업데이트 한다. &nbsp; <span style="background: #e9afcc;"> &nbsp;onChange( ) &nbsp;</span>
- button 클릭 시 새로운 todo 생성 및 todos 업데이트&nbsp; <span style="background: #e9afcc;"> &nbsp;onClick( ) &nbsp;</span>
- input에서 enter 시 새로운 todo 생성 및 todos 업데이트&nbsp; <span style="background: #e9afcc;"> &nbsp;onKeyPress( ) &nbsp;</span>

### 👴 최상위 컴포넌트 : App

```js
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false },
    ],
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //입력창을 비우는 작업이 반드시 필요

      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { input } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;
    return (
      <div>
        <TodoListTemplate
          form={
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          }
        >
          <TodoItemList />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
```

✅ **state를 constructor에서 꺼내기**
다른 방식으로 state의 초깃값을 지정해줄 수도 있는데, 여기서는 constructor를 이용한 방식이 아닌 바로 이 방식을 사용한다.

```js
import React, { Component } from 'react';

class Counter extends Component {
  	state = {
      number = 1
    };
render(){
  const { number } = this.state
  return(...);
 }
```

✅ **this.setState 대신 함수 인자 전달하기**

```js
this.setState((prevState, props) => {
  return {
    //업데이트할 내용
  };
});
```

- prevState : 기존 상태
- props : 현재 지니고 있는 props (생략 가능)

✅ **state에서 배열을 다룰 때 push를 사용하면 안되는 이유**
array.push() 메서드는 원본배열을 수정하지 않는다.
즉, 리랜더링시 배열을 비교해서 수정사항을 업데이트 해줘야 하는데, push의 경우 원본배열이 변하지 않으므로 변경된 사항이 제대로 반영이 되지 않는다.
따라서 state에서는 <span style="color: red;">절.대❗❗❗ push를 사용하지 말자!</span>

✅**함수 비구조화 할당**

```js
const { handleChange, handleCreate, handleKeyPress } = this;
```

함수 호출시 `this`를 계속 붙여야 하는 작업을 생략하는 방법이므로 유용하게 사용하자

<img src="https://images.velog.io/images/bori9412/post/1023c9be-94b5-4f21-a590-c05abad062ed/image.png" style="margin: 0 auto; width: 400px;">
<img src="https://images.velog.io/images/bori9412/post/82e70587-9813-4351-b3d1-38f3f7516647/image.png" style="margin: 0 auto; width: 400px;">

값이 정상적으로 입력이 되고, 추가버튼을 클릭하거나 enter를 누르면 input 안에 내용은 '' , 즉 `빈칸`이 되고, todos 배열에 객체형태로 추가되는 모습을 리액트 개발자 도구에서 확인할 수 있다.

📌 **TodoItemList 에서 배열 -> TodoItem 배열로 변환 map 사용**

```js
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
```

배열 랜더링 시 key값은 항상 존재해야 한다. key값이 있어야 컴포넌트가 재랜더링 될 때 효율적으로 작동한다.

#### 📌체크 on/off 함수 App에 추가하기

```js
handleToggle = (id) => {
  const { todos } = this.state;

  const index = todos.findIndex((todo) => todo.id === id);
  const selected = todos[index];

  const nextTodos = [...todos];
  nextTodos[index] = {
    ...selected, //객체형태여서 스프레드 문법써서 풀어준것
    checked: !selected.checked, //true면 false로, false면 true로
  };

  this.setState({
    todos: nextTodos,
  });
};
```

✅ **배열 복사**
스프레드 문법(...)을 사용해서 배열을 풀어헤치고, 그걸 다시 새로운 변수를 지정해서 그 변수안에 배열의 형태로 담는다.(배열 복사)
스프레드 문법은 배열을 복사할 때 얕은 복사에서 효과적으로 동작한다. 다차원 배열을 복사하는 경우는 적합하지 않을 수 있다.

#### 📌onRemove 함수 App에 추가하기

```js
handleRemove = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: todos.filter((todo) => todo.id !== id),
  });
};
```

filter를 사용해서 내가 선택한 바로 그 목록의 id가 없는 배열을 새로 반환한다. 따라서 이를 todos로 재할당하면 내가 선택한 바로 그 목록은 삭제가 된다.

<br>

<a href="https://velopert.com/3480">예제 링크👉</a>
<a href="http://www.yes24.com/Product/Goods/78233628">참고 문헌👉</a>
