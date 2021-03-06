---
emoji:
title: IP
date: '2022-04-13 23:33:29'
author: Rachel
tags: Study CS
categories: CS
---

# IP 주소

[정의]

- 인터넷 통신을 하기 위한 최소한의 규칙
- 인터넷 연결을 하기 위한 프로토콜 중의 하나

[특징]

- 지정한 주소(IP주소)에 메세지를 전달할 수 있게 한다.
- “패킷”이라는 통신단위로 데이터를 전달한다.
- 여러 개의 교환망들의 상호 연결을 돕는 수단이다.

![](https://postfiles.pstatic.net/MjAyMjA0MTRfMTky/MDAxNjQ5ODYzMjEzODQ3.i5dkgXesp_wmC9RXu-j9a_AJL_22hXRSG3eN5O6zbC0g.ZhoNj9q49tkP9YEKQIpTrtsklVopYO33c3nvcqQPc08g.PNG.bori9791/Screen_Shot_2022-04-14_at_12.20.08_AM.png?type=w966)

패킷 : 패키지 + 버킷 = 패캐징 된 것을 담는 바구니

클라이언트가 이 패킷을 담아서 인터넷 망에 보내면,
서버에 도달하기 위해 여러 노드들을 거치면서 이 패킷을 서로 주고 받게 된다.

"이거 전달해줘" → "전달" → "전달" 이렇게 해서
최종 목적지에 도달하게 되는 것이다.

최종 목적지(서버)에서는 마찬가지로 성공적으로 요청을 받으면, 요청 수락 메세지(ok)를 보낸다.

[한계점]

1. 비연결성

- 최종 목적지 서버가 연결이 되었는지 안되었는지 확인하지도 않고 계속 보내버린다.
  예를 들어, 서버가 다운되었거나 불능상태인데 이를 확인할 방도 없이 계속 요청을 보내게 된다.
  → 대상 서버가 패킷을 받을 수 있는 준비가 됐는지 알지 못한다.

2. 비신뢰성
