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
