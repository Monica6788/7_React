import styled from 'styled-components'
import { Link } from "react-router-dom"

import { Card, PageTitle } from "../styles/common"
import { useTodoStore } from '../store/useTodoStore'

import TodoList from '../components/TodoList'

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4f6ef7;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

const CategoryCard = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
  }
`

function DashboardPage() {
    const todos = useTodoStore( (state) => state.todos )
    const doneTodos = todos.filter( (todo) => todo.done === true )
    const ongoingTodos = todos.filter( (todo) => todo.done === false )
    const studyTodos = todos.filter( (todo) => todo.category === 'study')
    const workTodos = todos.filter( (todo) => todo.category === 'work')
    const lifeTodos = todos.filter( (todo) => todo.category === 'life')
    // 현재 날짜는 문자열로 저장되어 있으니 날짜로 바꿔서 계산
    const recentTodos = [...todos].sort( (a, b) => (new Date(b.createdAt) 
                                                  - new Date(a.createdAt)))
                                  .slice(0, 3)

    return (
        <>
            <PageTitle>DashBoard</PageTitle>

            <Stats>
                <Card>
                    <div>ALL</div>
                    <StatNumber>{todos.length}</StatNumber>
                </Card>
                <Card>
                    <div>DONE</div>
                    <StatNumber>{doneTodos.length}</StatNumber>
                </Card>
                <Card>
                    <div>ONGOING</div>
                    <StatNumber>{ongoingTodos.length}</StatNumber>
                </Card>
            </Stats>

            <SectionTitle>카테고리별</SectionTitle>
            <Stats>
              <Card>
                <div>STUDY</div>
                <StatNumber>{studyTodos.length}</StatNumber>
              </Card>

              <Card>
                <div>WORK</div>
                <StatNumber>{workTodos.length}</StatNumber>
              </Card>

              <Card>
                <div>LIFE</div>
                <StatNumber>{lifeTodos.length}</StatNumber>
              </Card>
            </Stats>

            <SectionTitle>최근 할 일</SectionTitle>
            {/* TODO: 할일 목록 표시 */}
            <TodoList todos={recentTodos} />

            
        </>
    )
}

export default DashboardPage