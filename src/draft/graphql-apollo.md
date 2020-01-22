---
title: 🌞 GraphQL + Apollo 개념
date: '2020-01-21'
spoiler: GraphQL과 Apollo의 개념에 대해서 간단하게 설명해드립니다.
---

## 🏸 GraphQL 정의

> [GraphQL](https://github.com/graphql/graphql-spec) is a **query language** and **execution engine** tied to any backend service.

GraphQL의 공식 명세는 이렇게 설명하고 있습니다.

한글로 풀어서 설명하면 다음과 같이 설명할 수 있습니다.

> GraphQL은 **API를 위한 Query Language**이자 **타입 시스템을 사용하여 요청을 처리하는 Execution Engine**이다.

여기서 두 관점으로 설명하려고 합니다.

- 클라이언트 관점
  - **API를 위한 Query Language**
- 서버 관점
  - **타입 시스템을 사용하여 요청을 처리하는 Execution Engine**

## 🏘 클라이언트 관점에서의 GraphQL

### GraphQL과 SQL 비교

GraphQL과 SQL은 탄생 배경이 다르기 때문에 비교하는 것에는 큰 의미가 없지만 감 잡기에는 좋은 비교인 것 같습니다.

| GraphQL                | SQL                            |
|------------------------|--------------------------------|
| API 요청을 위한 쿼리 언어  | Database와 상호작용하기 위한 쿼리 언어 |
| 데이터를 서버로부터 가져옴 | 데이터를 Database로부터 가져옴         |
| 주로 프론트엔드에서 사용   | 주로 백엔드에서 사용                  |

- GraphQL 예시
```javascript
{
        board(id: "1") {
            title
            author 
            contents
        }
}
```

- SQL 예시
```sql
SELECT title, author, contents
FROM api_board
WHERE id = 1;
```

### GraphQL의 핵심

> 그래프큐엘은 달라는대로만 준다.

* 요청

```javascript
{
  allPersons {
    name
    films {
      director
    }
  }	
}
```

* 응답
```json
{
  "data": {
    "allPersons": [
      {
        "name": "Luke Skywalker",
        "films": [
          {
            "director": "George Lucas"
          },
          {
            "director": "George Lucas"
          },
          {
            "director": "George Lucas"
          }
        ]
      },
……생략
```
