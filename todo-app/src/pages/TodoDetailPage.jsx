import styled from "styled-components"

import { Link, useNavigate, useParams } from "react-router-dom"
import { useTodoStore } from "../store/useTodoStore"
import { Badge, Button, Card, EmptyText, PageTitle } from "../styles/common"
import { CATEGORIES } from "../constants"
import { useState } from "react"

const Field = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  font-size: 13px;
  color: #8b93a1;
  margin-bottom: 4px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #d5dae3;
  border-radius: 8px;
`

const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid #d5dae3;
  border-radius: 8px;
  background: #fff;
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`

function TodoDetailPage() {
  // URL의 :id 부분을 추출
  const { id } = useParams()
  // id가 일치하는 todo 항목을 가져와서 저장  TODO Review
  const todo = useTodoStore( (state) => state.todos.find( (todo) => todo.id === id) )

  const navigate = useNavigate()
  const toggleTodo = useTodoStore( (state) => state.toggleTodo )
  const deleteTodo = useTodoStore( (state) => state.deleteTodo )
  const updateTodo = useTodoStore( (state) => state.updateTodo )

  const [isEditting, setIsEditting] = useState(false)
  const [form, setForm] = useState( {title: '', memo: '', category: 'study'} )
  

  // 존재하지 않는 id인 경우 표시
  if (!todo) {
    return (
      <>
        <PageTitle>Todo Item Not Found</PageTitle>
        <Card>
          <EmptyText>It is a deleted or wrong path</EmptyText>
          <Link to="/todos">← Back to List</Link>
        </Card>
      </>
    )
  }
  
  const startEdit = () => {
    setIsEditting(true)
    setForm( {title: todo.title, memo: todo.memo, category: todo.category} )
  }

  const saveEdit = () => {
    // title이 빈 값이면 함수 종료
    if (!form.title.trim()) return
    // 수정 함수 호출
    updateTodo(todo.id, form)
    // 수정 다 했으니까 수정상태인지 여부를 false로
    setIsEditting(false)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
    navigate('/todos')
  }

  return (
    <>
      <PageTitle>Todo Detail</PageTitle>
      {
        isEditting ? (
          <Card>
            <Field>
              <Label>Title</Label>
              <Input value={form.title}
                     onChange={ (e) => setForm( {...form, title: e.target.value} )} />
            </Field>

            <Field>
              <Label>Memo</Label>
              <Input value={form.memo}
                     onChange={ (e) => setForm( {...form, memo: e.target.value} )} />
            </Field>

            <Field>
              <Label>Category</Label>
              <Select value={form.category}
                      onChange={ (e) => setForm( {...form, category: e.target.value} ) }>
                  {
                    Object.entries(CATEGORIES)
                          .map( ([key, {label}]) => {
                            return (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            )
                          } )
                  }
              </Select>
            </Field>

            <Buttons>
              <Button onClick={saveEdit}>Save</Button>
              <Button $variant="ghost"
                      onClick={ () => setIsEditting(false)}>Cancel</Button>
            </Buttons>
          </Card>
        ) : (
          <Card>
            <Field>
              <Label>Title</Label>
              <div style={{ fontSize: 20, fontWeight: 600 }}>{todo.title}</div>
            </Field>

            <Field>
              <Label>Memo</Label>
              <div>{todo.memo}</div>
            </Field>

            <Field>
              <Label>Category</Label>
              {/* 카테고리 페이지로 이동 */}
              <Link to={`/category/${todo.category}`}>
                <Badge>{CATEGORIES[todo.category]?.label ?? todo.category}</Badge>
                {/* <Badge>{todo.category}</Badge> */}
              </Link>
            </Field>

            <Field>
              <Label>Status</Label>
              {/* 할일의 done 값에 따라 true이면 "완료", false이면 "진행중"표시 */}
              <div>{todo.done ? 'DONE' : 'ONGOING'}</div>
            </Field>

            <Field>
              <Label>Created Date</Label>
              <div>{todo.createdAt}</div>
            </Field>

            <Buttons>
                {/* 할일의 done 값에 따라 true이면 "진행중으로 변경", false이면 "완료 처리"표시 */}
                {/* 첫 번째 버튼 클릭 시, todoStore의 toggleTodo 액션 실행 */}
              <Button onClick={ () => toggleTodo(todo.id) }>
                {todo.done? 'Turn to [ONGOING]' : 'Turn to [DONE]'}
              </Button>
              <Button $variant="ghost"
                      onClick={ () => startEdit() }>Edit</Button>
              <Button $variant="danger" 
                      onClick={handleDelete}>Delete</Button>
              <Button $variant="ghost"
                      onClick={ () => navigate(-1)} >⬅️ Back</Button>
              {/* 화살표 함수 꼴이 아닌 onClick={navigate(-1)로 작성하면?
                  JS는 컴포넌트가 로드되는 순간 navigate(-1)을 실행한다.
                  즉, 사용자가 버튼을 클릭하지 않는데도 뒤로 가버리거나,
                  렌더링과 동시에 뒤로가기를 계속 실행하는 부작용이 생길 수 있다.
              */}
            </Buttons>
          </Card>
        )
      }

    </>
  )
}

export default TodoDetailPage