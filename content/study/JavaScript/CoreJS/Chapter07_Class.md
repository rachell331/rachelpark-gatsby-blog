---
emoji:
title: 코어자바스크립트 7장 - 클래스
date: '2022-05-21 17:16:37'
author: Rachel
tags: Study CoreJS
categories: JS
---

# 클래스

[예제]

```javascript
/*생성자*/
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};
/*프토타입 메서드*/
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

/*스테틱 메서드*/
Rectangle.isRectangle = function (instance) {
  return instance instanceof Rectangle && instance.width > 0 && instance.height > 0;
};

var rect1 = new Rectangle(3, 4); //인스턴스 생성
console.log(rect1.getArea()); //12
console.log(rect1.isRectangle(rect1)); //error
console.log(Rectangle.isRectangle(rect1)); //true
```

## 클래스 상속

```javascript
var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length; //문제(1)length 프로퍼티 : 삭제가능하다(configurable)
};

Grade.prototype = []; //문제(2) 빈 배열을 참조시킴
var g = new Grade(100, 90);
console.log(g);
/*
[object Object] {
  0: 100,
  1: 90,
  length: 2
}
*/

g.push(90);
console.log(g);
/*
[object Object] {
  0: 100,
  1: 90,
  2: 90,
  length: 3
}
*/

delete g.length;
g.push(70);

console.log(g);
/*
[object Object] {
  0: 70,
  1: 90,
  2: 90,
  length: 1
*/
```

[요소가 있는 배열을 프로토타입에 매칭한 경우]

```javascript
var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length; //문제(1)length 프로퍼티 : 삭제가능하다(configurable)
};

Grade.prototype = ['a', 'b', 'c', 'd']; //문제(2) 빈 배열을 참조시킴
var g = new Grade(100, 90);

console.log(g);
/*
[object Object] {
  0: 100,
  1: 90,
  2: "c",
  3: "d",
  length: 2
}
*/

g.push(90);
console.log(g);
/*
[object Object] {
  0: 100,
  1: 90,
  2: 90,
  3: "d",
  length: 3
}
*/

delete g.length;
g.push(70);
console.log(g);
/*
[object Object] {
  0: 100,
  1: 90,
  2: 90,
  3: "d",
  4: 70,
  length: 5
}
*/
```
