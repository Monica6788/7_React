# todo-app
보통 README 첫 줄에는 프로젝트명을 작성한다.
> 간단한 할 일 관리 앱
---

## 추가 라이브러리
package.json 보면 알 수는 있지만 정리해두는 게 좋다.

```bash
npm insatll 라이브러리명
```

- react-router-dom
- zustand
- styled-componenets

## 라우팅 구조
- `/` : 대시보드
- `/todos` : todo 목록 페이지
- `/todos/:id` : todo 상세 페이지
- `/category/:category` : 카테고리별 todo 페이지