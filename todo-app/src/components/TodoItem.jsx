import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Badge, Button } from '../styles/common'
import { CATEGORIES } from '../constants'
import { useTodoStore } from '../store/useTodoStore'

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #eef0f4;

  &:last-child {
    border-bottom: none;
  }
`

const Title = styled(Link)`
  flex: 1;
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
  color: ${({ $done }) => ($done ? '#a0a7b4' : 'inherit')};

  &:hover {
    color: #4f6ef7;
  }
`

function TodoItem( {todo} ) {
    const toggleTodo = useTodoStore( (state) => state.toggleTodo)
    const deleteTodo = useTodoStore( (state) => state.deleteTodo )

    return (
        <>
            <Item>
                <input type="checkbox"
                       checked={todo.done}
                       onChange={ () => toggleTodo(todo.id) } />
                <Title to={`/todos/${todo.id}`} $done={todo.done}
                >{todo.title}</Title>
                {/* ?. : null일 때 오류 없이 null 처리
                    ?? : 자바스크립트의 Nullish 병합 연산자 
                         입력받은 카테고리가 목록에 없어서 라벨을 못 찾으면
                         카테고리 이름 원본을 대신 보여주는 역할.
                */}
                <Badge>{CATEGORIES[todo.category]?.label ?? todo.category}</Badge>
                <Button $variant="danger"
                        onClick={ () => deleteTodo(todo.id) }>Delete</Button>
            </Item>
        </>
    )
}

export default TodoItem