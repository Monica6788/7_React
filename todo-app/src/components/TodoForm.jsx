import styled from "styled-components"
import { Button, Card } from "../styles/common"
import { CATEGORIES } from '../constants'
import { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Row = styled.div`
  display: flex;
  gap: 10px;
`

const Input = styled.input`
  flex: 1;
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

function TodoForm( {defaultCategory = 'study'} ) {
    const [title, setTitle] = useState('')
    const [memo, setMemo] = useState('')
    const [category, setCategory] = useState(defaultCategory)

    const addTodo = useTodoStore( (state) => state.addTodo )

    const handleSubmit = (e) => {
        e.preventDefault()  // 기본 이벤트 핸들러 동작 막기

        if (!title.trim()) return   // 빈 스트링이면 함수 종료

        addTodo( {title: title.trim(), memo: memo.trim(), category} )
        
        // 추가 후 입력창 비우기
        setTitle('')
        setMemo('')

    }

    return (
        <Card sytle={{marginBottom: 20}}>
            <Form>
                <Row>
                    <Input placeholder="Enter your todo"
                           value={title}
                           onChange={ (e) => setTitle(e.target.value) } />
                    <Select value={category} 
                            onChange={ (e) => setCategory(e.target.value) }>
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
                </Row>
                <Input placeholder="Wanna write Memo?"
                       value={memo}
                       onChange={ (e) => setMemo(e.target.value)} />
                <Button type="submit"
                        onClick={handleSubmit}>Add</Button>
            </Form>
        </Card>
    )
}

export default TodoForm