/*
 *  useState: 상태 관리 훅
 *  
 *  const [상태변수, 상태변경함수] = useState(초기값)
 * 
 *  특징
 * - 값이 바뀌면 컴포넌트가 다시 실행(리렌더링)되어 화면이 갱신된다.
 * - 이전 값 기준으로 바꿀 땐 함수형 업데이트
 *      setXxx(prev => ...)
 * - 객체, 배열은 직접 수정하지 않고 "새로 만들어서" 넘겨줘야 한다.
 */
import { useState } from 'react'

function Step1() {
    let plain = 0
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="card">
                <h3>STEP 1. 일반 변수 vs state</h3>
                <p>일반 변수: {plain} state: {count}</p>
                <div className="btn-row">
                    <button onClick={() => {plain = plain + 1; console.log('plain=', plain)}}>
                        일반변수 + 1
                    </button>
                    <button onClick={() => {setCount(count + 1)}}>
                        state + 1
                    </button>
                </div>
            </div>
        </>
    )
}

function Step2() {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <h3>STEP 2. 함수형 업데이트</h3>
            <p>count: {count}</p>

            <div className="btn-row">
                <button onClick={() => {setCount(count + 1);
                                        setCount(count + 1);
                                        setCount(count + 1);
                }}>count + 1 (3회)</button>
                {/* 1씩 증가 */}

                <button onClick={() => {setCount((p) => p + 1);
                                        setCount((p) => p + 1);
                                        setCount((p) => p + 1);
                }}>count + 1 (3회)</button>
                {/* 3씩 증가 */}

            </div>
        </div>
    )
}

function Step3() {
    const [user, setUser] = useState({name: "Dante", age: 39})
    const [todolist, setTodolist] = useState(['Awaken'])
    return (
        <div className="card">
            <h3>STEP 3. 객체, 배열 state</h3>
            <p>{user.name} ({user.age}세)</p>
            <p>TODO: {todolist.join(', ')}</p>
            <div className="btn-row">
                <button onClick={() => {setUser({...user, age: user.age + 1})
                }}>나이 + 1</button>
                <button onClick={() => {setTodolist([...todolist, 
                                                    `TODO ${todolist.length + 1}`])
                }}>할 일 추가</button>
            </div>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>UseState</h1>
            <Step1 />
            <Step2 />
            <Step3 />
        </>
    )
}

export default Example