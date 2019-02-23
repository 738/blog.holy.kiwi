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

![flat-deps](https://maxogden.com/media/flat-deps.png)

이 예제에는 세 개의 종속성이 있다. 검정색 선들은 '의존' 관계를 의미한다. 즉, 우리 앱은 `a`, `b`, 그리고 `c`를 의존하고 있고, `c`는 `a`를 의존하고 있다. 우리 앱과 `c`는 모두 `a`를 의존하고 있다.

종속성이 flat하기 때문에 (우리 앱 전체에 오직 하나의 복사본만 가지고 있다는 것을 의미함) 우리 앱과 `c` 모두 `a`의 *호환되는 버전*에 의존하도록 해야한다는 것을 의미한다. 만약 우리가 `c`를 새로운 버전으로 업그레이드하고 싶다면, 그러나 새 버전이 우리 앱과 의존하고 있는 `a`와 호환되지 않는 버전의 `a`로 업그레이드한다면, 종속성 충돌이 발생한다. 이 현상은 "DLL 지옥" (Windows) 또는 더 일반적으로 "종속성 지옥" 이라고 한다.

이번에는 중첩된 종속성 시스템의 같은 예제를 살펴보자.

![nested-deps](https://maxogden.com/media/nested-deps.png)

Here we don't just have one level of dependencies, we have multiple. Assume a and b have no dependencies. Our app and c both still depend on a.

With nested dependencies we now have two copies of a. If our app needs a at version 1 and c needs a at version 2 then there is we just install both versions of a. The dependencies of c are only available to c, nothing else can access them. Additionally, if it turns out that our app and c both depend on a compatible version of a, we never need to create the c's deps folder -- so the behavior in that case would mimic flat deps (this is how npm dedupe works).

Pros and Cons
Flat
The simpler of the two designs. It's up to you to decide how much complexity you want to deal with.
Dependency conflicts (AKA dependency hell)
Sometimes the only option for languages where you cannot load dependencies in isolation
Nested
No dependency conflicts
Encourages use of small, isolated modules
More complicated
Good for languages like JavaScript with first class scoping support for isolating dependencies from each other
Installs multiple copies of dependencies (when necessary), so takes up more disk space (though in practice this is rarely an issue because code is small).
Confuses users who use dependencies that aren't designed to be modular (e.g. 'Why do I have five versions of jQuery in my browserify app?')
