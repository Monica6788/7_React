/*
 *  useMemo: 함수 결과(계산 결과)를 메모이제이션 하는 훅 
 * 
 *  const 결과 = useMemo( () => {계산식}, 의존성배열 )
 *  
 *  특징
 * - 계산 "결과"를 기억하고, 의존성이 바뀔 때만 다시 계산한다.
 * - 무거운 계산을 관계 없는 state 변경으로부터 보호한다.
 * - 객체, 배열의 참조를 유지하면서 memo 자식의 리렌더링을 막아준다.
 */

import { useState, useMemo } from "react"

// 0.5초 동안 CPU 멈추게 하기
// (무겁고 오래 걸리는 연산을 흉내내기 위함!)
function slowDouble(n) {
    const end = Date.now() + 500
    
    // 목표 시간이 될 때까지 시간 보내기 (0.5초)
    while (Date.now() < end) {}

    // 연산이 끝나면 입력값의 2배 반환
    return n * 2
}

function Step1() {
    const [number, setNumber] = useState(1)
    const [text, setText] = useState('')

    // 진짜 느려지는지 확인용 0
    const result1 = 0
    // useMemo를 쓰지 않은 일반 연산 변수
    // const result1 = slowDouble(number)

    // useMemo를 사용하여 number 값이 바뀔 때만 slowDouble 실행
    // (평소에는 기억(캐싱)해둔 값을 재사용.)
    const result2 = useMemo( () => slowDouble(number), [number])

    return (
        <div className="card">
            <h3>STEP 1. 느린 계산 비교</h3>
            <p>{number} x 2 = {result1} (useMemo 사용 X)</p>
            <p>{number} x 2 = {result2} (useMemo 사용 O)</p>

            <button onClick={ () => {setNumber(number + 1)} 
            }>number + 1</button>

            <p>
                {/* onChange: 텍스트 입력 시마다 컴포넌트 리렌더링 시키기 */}
                <input type="text" value={text} 
                       onChange={ (e) => setText(e.target.value) } />
            </p>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>UseMemo</h1>
            <Step1 />
        </>
    )
}

export default Example