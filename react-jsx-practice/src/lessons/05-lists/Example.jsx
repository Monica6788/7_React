// 리스트(배열)의 각 항목을 화면 조각(컴포넌트)으로 바꿀 때
// "map"을 사용한다.

const snacks = ["포카칩", "미쯔", "단백칩"]
const todolists = [
    {id: 1, title: "죽기", done: false},
    {id: 2, title: "기능명세서 작성하기", done: false},
    {id: 3, title: "내 여자들 귀찮게 하기", done: true},
    {id: 4, title: "다 죽자", done: true}
]

function Example() {
    return (
        <>
            <h2>lessons/05-lists</h2>
            <h3>문자열 목록</h3>
            <ul>
                {/* map을 사용하여 동일한 컴포넌트를 표시할 때는
                    최상위 요소에 `key` 속성을 지정해주어야 한다.
                    (안 하면 개발자도구 console에 에러 발생) */}
                {
                    snacks.map((snack) => {
                        return <li key={snack}>{snack}</li>
                    })
                }
            </ul>
            <h4>화살표 함수 활용</h4>
            <ol>
                {
                    snacks.map((snack) => <li key={snack}>{snack}</li>)
                }
            </ol>

            <h3>객체 목록</h3>
            <h4>오늘 할 일</h4>
            <ul>
                {
                    todolists.map((todo) => {
                        return (
                            <li key={todo.id}>[{todo.done? '✅' : '⁉️'}] {todo.title}</li>
                        )
                    })
                }
            </ul>

            <h4>남은 할 일</h4>
            <p>filter로 먼저 거르고 map으로 표시</p>
            <ul>
                {
                    // todo.done = false인 것만 필터링하도록 !todo.done
                    todolists.filter((todo) => !todo.done)
                             .map((todo) => <li key={todo.id} > {todo.title}</li>)
                }
            </ul>
        </>
    )
}

export default Example