// JSX 안에서 자바스크립트 문법을 사용하려면?
// => 중괄호 {} 안에 작성할 수 있다.

function Example() {
    const name = "Dante"
    const age = 39
    const sex = "Male"
    const styles = ["RoyalGuard", "Gunslinger", "Trickster"]
    const user = {nickname: "DevilHunter", level: 100}

    function welcome(who) {
        return sex == "Male"? 
               <b>Welcome, Mr.{who}!</b> : 
               <b>Welcome, {who}!</b>
    }

    function hello(who) {
        return `Hello, ${who}!`
    }

    return (
        <>
            <h2>lessons/02-expression</h2>
            {/* 변수 사용 */}
            <h4>name: {name}</h4>
            <p>age: {age}-year-old</p>
            {/* 계산식 사용 */}
            <p>age of next year: {age + 1}-year-old</p>
            {/* 함수 호출 */}
            <p>{welcome(name)}</p>
            <p><b>{hello(name)}</b></p>

            {/* 객체, 배열 값 표현 */}
            <p>
                num of styles: {styles.length} <br />
                first style: {styles[0]} <br />
                nickname: {user.nickname}
                level: {user['level']}
            </p>

            <p>
                [{true}] [{false}] [{null}] [{undefined}]
                true, false, null, undefined는 화면에 아무것도 표시되지 않는다.
            </p>
        </>
    )
}

export default Example