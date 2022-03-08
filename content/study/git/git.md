---
emoji:
title: git 관리법
date: '2022-03-08 23:47:37'
author: Rachel
tags: Git Study
categories: Git
---

## 1. Git clone

- 작업할 폴더 생성( ex. D:\dev )
- 작업 폴더 내에서 git clone 진행

```
git clone "repositoryURL"
```

- remote와 연결되었는지 확인하는 방법

```
git remote
```

또는 IDE 내에서 remote branch가 생성되었는지 확인 : [Git] - [Manage Remotes]

## 2. Git branch 생성

```
git checkout -b 브랜치명 //새로운 브랜치 생성과 동시에 checkout하는 명령어
```

또는 IDE(PHPStorm 기준 우측 하단의 master 클릭시 다음과 같은 팝업창 노출)
Checkout branch에 체크시 자동으로 생성된 신규 브랜치로 체크아웃
생성된 브랜치 내에서 commit&push를 하면 자동으로 remote branch가 생성된다. (ex. origin/브랜치명)

\*참고 : Git branch 삭제

```
git branch -d 삭제할 브랜치명
```

## 3. IDE(IntelliJ 기준) 내에서 협업에 필요한 git (명령어 없이)

예시 : 릴리즈 내용을 최신으로 업데이트하고 그 내용을 내 브랜치에 반영하고 싶다.

(1) 릴리즈 내용 최신으로 업데이트
(단, 업데이트를 반영시키고 싶은 브랜치에서 작업해야 한다 : 여기서 현재 branch : 브랜치명)
(2) 현재 작업중인 branch 에 최신화 작업

## 4. Pull Request(PR)

- 릴리즈에 반영되어야 할 내용일 경우
  new pull request 클릭
  pull request : 간단한 작업 내용 입력 후 생성하기 버튼 클릭

↓

- 생성된 pull request 에 conflict가 없는지 확인
- file changed 클릭해서 내가 수정한 파일들이 정상적으로 잘 올라갔는지 확인

## 5. Git reset --hard & Git reflog

- 이전 커밋으로 되돌리고 싶을 때 사용
- 주의! --hard 는 파일 내용을 완전히 삭제시키기 때문에 반드시 확인하고 진행

```
[Git reflog] : 모든 commit의 log를 확인하고 싶을 때 사용
```

git reflog \*참고 : Git commit 확인

```
git log
```

[1] 한 단계 이전으로 돌아가기

```
git reset --hard HEAD~1
```

[2] 돌아가려는 이력 이후의 모든 내용 삭제

```
git reset --hard 커밋번호
```

[3] 돌아가려는 이력으로 돌아갔지만, 내용은 삭제하지 않음 (바로 다시 커밋할 수 있는 상태로 남아있음 = index, stage 남아있음)

```
git reset --soft 커밋번호
```

[4] 돌아가려는 이력으로 돌아가고, 내용도 남아있지만 인덱스는 초기화된 경우(다시 변경된 내용을 추가해야만 커밋할 수 있음)

```
git reset --mixed 커밋번호
```

6. Git revert

- 이력을 남기고 커밋 되돌리기

```
git revert 되돌릴 커밋번호
```

\*참고 : reset 과 revert 의 차이점

- reset : 이후의 이력을 모두 제거하고 싶을 때 (이력이 남지 않음)
- revert : 특정 커밋 만을 취소하고 싶을 때, 특정 커밋의 내용만 되돌리고 싶을 때 사용

✔ 특히, 이미 remote repository에 push를 한 상태일 경우
reset을 사용하면 reset하기 이전으로 되돌리기 전까지는 push를 할 수 없다.
따라서, 이미 push를 했을 경우, revert를 해야한다.

## 7. Git cherry-pick 🍒

- 이전까지 작성한 코드를 모두 날리지 않고, 선택적으로 커밋을 가져올 수 있는 방법

```
git cherry-pcik 가져오고 싶은 커밋번호
```

- IDE에서 사용하는 방법
  (1) master에서 옮겨올 새 브랜치 생성 및 checkout
  (2) 가져오고 싶은 커밋번호 마우스 우클릭 하면 cherry-pick을 선택할 수 있다.

cherry-pick commit은 다른 branch를 내가 작업한 branch로 합치는 commit이다.

## 8. Git config

[1] config 정보들을 list로 확인하고 싶을 때

```
git config --list
```

[2] git config 전역 설정 방법

```
git config --global user.name '이름'
git config --global user.email '이메일주소'
```

[3] git config 삭제하기(user 정보 재설정할 때 사용)

```
git config --unset user.name
git config --unset user.email
```

global로 설정된 유저일 경우 , --unset 뒤에 --global 추가해서 입력
