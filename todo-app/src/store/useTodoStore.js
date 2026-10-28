import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/*
 *  zustand에서 "전역 스토어" 생성 => create
 * 
 * - 상태: todos
 * - 액션(상태변경함수)
 *    - addTodo, toggleTodo, ...
 * - 미들웨어
 *    - persist: 새로고침해도 localStorage에 저장되어 데이터가 유지된다. 
 */

const initialTodos = [
  {
    id: '1',
    title: 'React Router 공부하기',
    memo: 'Routes, Route, Link, useParams 개념 정리',
    category: 'study',
    done: true,
    createdAt: '2026-10-27T09:00:00.000Z',
  },
  {
    id: '2',
    title: 'zustand 스토어 만들어보기',
    memo: 'create로 스토어 만들고 컴포넌트에서 사용하기',
    category: 'study',
    done: true,
    createdAt: '2026-10-28T09:00:00.000Z',
  },
  {
    id: '3',
    title: '장보기',
    memo: '우유, 계란, 과일',
    category: 'life',
    done: false,
    createdAt: '2026-10-28T19:00:00.000Z',
  },  
  {
    id: '4',
    title: '주간 보고서 작성',
    memo: '금요일 오전까지 제출',
    category: 'work',
    done: false,
    createdAt: '2026-10-30T09:00:00.000Z',
  },
]

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: initialTodos,
      addTodo: ( {title, memo, category} ) => {
        // 할 일 추가
        set(
          // 기존 상태 state 전달받기
          (state) => ({   // 리턴할 거니까 ()로 한 번 더 감싸기
            todos: [
              ...state.todos,   // 전개 연산자로 기존 todo 아이템들 받고,
              {   // 추가되는 데이터는 객체 형태로 받기
                id: Date.now().toString(),
                title, memo, category, done:false,
                // ISO 8601 형식의 표준 문자열(String)로 변환해 주는 메서드
                // 형식 예시: "2026-10-28T11:16:00.000Z"
                createdAt: new Date().toISOString()
              }
            ]
          })
        )
      },

      toggleTodo: (id) => {
        // 완료 처리를 위한 변경 함수
        set( (state) => ({
          todos: state.todos.map( (todo) =>
            // id가 전달받은 값과 같으면 done 값을 반전
            // id가 다르면 원래 값(todo)을 그대로 사용
            todo.id === id ? {...todo, done: !todo.done} : todo )
        }))
      },

      updateTodo: (id, changes) => {
        // 수정
        set( (state) => ({
          todos: state.todos.map( (todo) =>
            // id가 일치하면 기존 내용에 changes 내용을 덮어씌우기
            todo.id === id ? {...todo, ...changes} : todo )
        }) )
      },

      deleteTodo: (id) => {
        // 삭제
        set( (state) => ({
          todos: state.todos.filter( (todo) => todo.id !== id )
        }) )
      }

    }),

    {name: 'todo-storage'}    // localStorage 키 이름
  )
)