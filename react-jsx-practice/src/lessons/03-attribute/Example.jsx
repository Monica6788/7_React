// HTML 속성 (class, style, href, 기타등등...)을 거의 그대로 사용하지만,
// 일부 항목은 이름이 달라진다.
//  - class -> className
//  - for   -> htmlFor
//  - css 스타일 속성명: kebab-case -> camelCase

function Example() {
    const boxStyle = {
        backgroundColor: 'darkblue',
        color: "white",
        padding: 12,        // 크기 기본 단위는 px
        borderRadius: 8,
    }

    return (
        <>
            <h2>lessons/03-attribute</h2>
            <p className="highlight">클래스를 지정할 때는 className을 사용한다.</p>
            {/* 
                바깥쪽 중괄호: JavaScript 작성을 위해 표현,
                안쪽 중괄호: 스타일 정보를 담은 객체 표현
            */}
            <p style={{color: 'indianred', fontSize: '20'}}>
                style은 객체 형태로 입력하고, 스타일 속성명은 camelCase를 사용한다.
            </p>
            <p style={boxStyle}>
                스타일 객체를 변수로 따로 저장하여 사용할 수 있다.
            </p>
            
            {/* for 속성 대신 htmlFor를 사용해야 한다. */}
            <label htmlFor="nickname">NICKNAME  </label>
            <input type="text" id="nickname" placeholder="Enter your nickname" />
            <br />

            {/* true/false 값을 가지는 속성은 이름만 작성해도 true로 동작한다. */}
            <button disabled>비활성화 버튼</button>
        </>
    )
}

export default Example