/*
 *  useCallback: 함수 자체를 메모이제이션 하는 훅 
 *  
 *  const 함수 = useCallback( () => {...}, 의존성 배열)
 * 
 *  특징
 * - "함수 자체"를 기억하고, 의존성이 바뀔 때마다 함수를 새로 만든다.
 * - React.memo 자식에게 함수를 props로 넘길 때 함께 사용한다.
 * - 의존성을 생략하면 이전 값을 사용한다.
 * 
 */

import { memo, useCallback, useState } from "react"

// 부모가 리렌더링 되어도 전달 받은 props(label, onClick)가 바뀌지 않으면
// 자식 컴포넌트가 그려지지 않도록 memo로 감싸기
const LogButton = memo(function LogButton({label, onClick}) {
    // 버튼이 화면에 그려질 때마다(렌더링 될 때마다) 로그 찍어 확인하기
    console.log(`${label} 버튼 렌더링`)
    return <button onClick={onClick}>{label}</button>
})

function Step1() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    // 일반 함수 버튼은 memo로 감싸주지 않았기 때문에 계속 렌더링된다.
    // 콘솔에 계속 '일반 함수 버튼 렌더링'이 출력된다.
    // 1. 일반 함수: 텍스트를 입력할 때마다, 즉 부모가 리렌더링 될 때마다
    //              새로운 주소값을 가진 함수가 매번 새로 만들어진다.
    // => 자식 컴포넌트(LogButton)은 props가 바뀐 줄로 착각하여
    //    쓸 데 없이 계속 리렌더링 된다.
    const plainIncrease = () => { setCount( (prev) => prev + 1 ) }

    // 2. useCallback 함수: 의존성 배열이 빈 배열이므로 컴포넌트가 처음 만들어질 때
    //                      만들었던 그 함수 주소를 계속 재사용(기억)한다.
    // => 부모가 리렌더링되어도 전달되는 함수의 주소가 같다.
    //    따라서 자식 컴포넌트는 리렌더링 없이 가만히 있는다. 
    const memoIncrease = useCallback( () => {setCount( (prev) => prev + 1 )}, [] )

    return (
        <div className="card">
            <h3>STEP 1. 일반 함수 vs useCallback</h3>
            <input type="text" value={text}
                   onChange={ (e) => setText(e.target.value) } />
            <p>count: {count}</p>

            <div className="btn-row">
                <LogButton label="일반 함수" onClick={plainIncrease}/>
                <LogButton label="useCallback" onClick={memoIncrease} />
            </div>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>UseCallback</h1>
            <Step1 />
        </>
    )
}

export default Example