import styled from "styled-components"

import { Card, EmptyText } from "../styles/common"
import TodoItem from "./TodoItem"

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
// todos 배열을 props로 전달 받아 표시
function TodoList( {todos} ) {
    if (todos.length === 0) {
        return (
            <Card>
                <EmptyText>There is nothing to do</EmptyText>
            </Card>
        )
    }

    return (
        <>
            <Card>
                <List>
                    {
                        // todo => {id:xx, title:xx, ...}
                        todos.map( (todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))
                    }
                </List>
            </Card>
        </>
    )
}

export default TodoList