---
title: 📘 [번역] Nested Dependencies 중첩된 종속성
date: '2019-02-23'
spoiler: Nested Dependencies 번역 글입니다. NPM이 가진 Nested Dependencies라는 특성에 대해 알아봅시다.
---

[원문: Nested Dependencies](https://maxogden.com/nested-dependencies.html)입니다.

오늘날 많은 패키지 매니저들이 있지만, 기본적으로 중첩된 종속성(nested dependencies)으로 작동하도록 설계된 패키지 매니저는 npm 밖에 없다. (내가 알기에는)

![nested-vs-flat-deps](https://maxogden.com/media/nested-vs-flat-deps.png)

위 다이어그램에서 `deps` 컨테이너들은 종속성의 *고립된* 집합을 대표한다. 대부분의 패키지 매니저들은 모든 종속성에 대해서 하나의 '네임스페이스'를 갖는다. 나는 이 상태를 'flat' 이라고 부른다. 왜냐하면 종속성을 풀 때 오직 한 단계의 검색 용이성을 가진다는 것을 의미하기 때문이다. 그것은 앱 전체에서 'foo' 라는 이름을 가진 종속성이 하나만 있다는 것을 의미한다.

flat 종속성 시스템에서 종속성 분해 작업이 어떻게 일어나는지에 대해 알아보기 위해 예제를 살펴보도록 하자.
