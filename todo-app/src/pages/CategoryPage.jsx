import { useTodoStore } from "../store/useTodoStore"
import { Card, EmptyText, PageTitle } from "../styles/common"
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import { CATEGORIES } from "../constants"
import { useParams } from "react-router-dom"

function CategoryPage() {
    // store에서 todos 상태를 선택하여 가져오기
    const todos = useTodoStore( (state) => state.todos)
    // useParams()로 "/category/:category"의 :category 부분 뜯어오기
    const { category } = useParams()

    // 정의되지 않은 카테고리 주소로 들어간 경우
    if (!CATEGORIES[category]) {
        return (
            <>
                <PageTitle>Category Not Found</PageTitle>
                <Card>
                    <EmptyText>{category} DOES NOT EXIST.</EmptyText>
                </Card>
            </>
        )
    }

    const { label } = CATEGORIES[category]
    const filtered = todos.filter( (todo) => todo.category === category )

    return (
        <>
            <PageTitle>{label} ({filtered.length})</PageTitle>
            {/* key={category}: 현재 선택된 카테고리를 구분해서 쓰도록 지정 */}
            <TodoForm key={category} defaultCategory={category} />
            <TodoList todos={filtered} />
        </>
    )
}

export default CategoryPage