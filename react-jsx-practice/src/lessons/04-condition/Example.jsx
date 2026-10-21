// 조건에 따라 표시

// - JSX 안의 중괄호에는 if문을 사용할 수 없다.
//   따라서 if문 대신 "삼항 연산자"와 "&&" 연산자를 사용한다.

function Example() {
    const isLoggined = true
    const count = 1024
    const stock = 243

    return (
        <>
            <h2>lessons/04-condition</h2>
            {/* 삼항연산자 (조건식? 참일때값 : 거짓일때값) */}
            {/* 
                isLoggined 값이 true이면 "로그인 상태" 표시
                                false이면 "로그인 필요" 표시
            */}
            <p>
                {isLoggined? "로그인 상태" : "로그인 필요"}
            </p>

            {/* 조건식 && 표시할_내용 => 조건이 참일 때만 표시 */}
            {count > 0 && <p style={{color: 'firebrick'}}><b>다 죽자: {count}</b></p>}

            {/* 삼항 연산자를 사용하여,
                조건 만족 시 변수에 저장된 값을 표시하고,
                만족하지 않을 시 텍스트를 표시 */}
            <p>재고: {stock > 0? `${stock}개` : '품절'}</p>
            <p>재고 상태: {stock && '재고 있음'}</p>
            <p>{stock > 0 && "재고 있음"}</p>

            <UserRole role='admin' />
            <UserRole role='member' />
            <UserRole role="" />
        </>
    )
}

function UserRole({role}) {
    {/* 위의 Example과 구분된 별도의 컴포넌트라고 생각하면 됨. */}
    if (role === '') {
        return null  // null 리턴 시 화면에 아무것도 표시하지 않는다.
    }
    if (role === 'admin') {
        return <p>관리자</p>
    }
    return <p>일반 회원</p>
}

export default Example