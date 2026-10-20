// 자바스크립트 영역

// 컴포넌트: 화면 조각을 반환하는 함수
//          이름은 "반드시 대문자로 시작"해야 한다.
//          example로 작성하면 리액트가 컴포넌트라고 인식하지 못한다.
function Example() {
    // return 뒤 괄호 () 안에 작성한 HTML 부분이 JSX 영역이다.
    // * 괄호를 사용하면 여러 줄을 작성할 수 있다.
    return (
        // JSX 영역
        <>
            {/* 바깥을 감싸는 부모는 하나여야 한다. */}
            <h2>lessons/01-jsx-basic</h2>
            <h3>Hello, React</h3>
            <p>JSX는 HTML과 거의 유사하지만,
               JavaScript 내에서 사용하는 문법이다.</p>
            
            <ul>
                <li>반드시 하나의 요소로 감싸야 한다.</li>
                <li>닫는 태그가 없는 태그(br, hr 등)도 명시적으로 꼭 닫아야 한다.</li>
            </ul>
        </>
    )
}

export default Example