import styled from 'styled-components'

import { PageTitle } from '../styles/common'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import { useTodoStore } from '../store/useTodoStore'

const Filters = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`

const FilterButton = styled.button`
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #d5dae3;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#4f6ef7' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#444')};
`

const FILTERS = [
  { key: 'all', label: 'ALL' },
  { key: 'active', label: 'ONGOING' },
  { key: 'done', label: 'DONE' },
]

function TodoListPage() {
    const [filter, setFilter] = useState('all')

    const todos = useTodoStore( (state) => state.todos )

    const filteredTodos = todos.filter( (todo) => {

        if (filter === 'active') return !todo.done
        if (filter === 'done') return todo.done

        return true     // filter === 'all'
    } )

    return (
        <>
            <PageTitle>TodoList</PageTitle>
            <TodoForm />

            <Filters>
                {
                    FILTERS.map( ({key, label}) => {
                        return (
                            <FilterButton
                                key={key}
                                onClick={ () => {setFilter(key)} }
                                $active={filter === key}>
                                {label}
                            </FilterButton>
                        )
                })}
            </Filters>

            <TodoList todos={filteredTodos} />
        </>
    )
}

export default TodoListPage