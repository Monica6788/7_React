/*
 *  useEffect: 생명주기 관리 / 부수 작업 관리 훅
 * 
 *  useEffect( () => {실행할 코드; return() => {정리할 내용}}, [의존성]) 
 * 
 *  특징
 * - 화면이 그려진 다음에 실행된다. (API 호출, 타이머, 이벤트 등록 등)
 * - 의존성 배열이 실행 시점을 결정한다. (생략, [], [sate/props])
 * - return문은 정리 함수(cleanup)를 등록한다. (타이머 제거, 연결 종료 등)
 */

import { useState, useEffect } from 'react'

function Step1() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    useEffect(() => {
        // 의존성 배열을 완전히 생략한 형태
        console.log("[useEffect 1]")
        console.log("렌더링 될 때마다 출력됨.")
    })

    useEffect(() => {
        // 의존성 배열을 빈 배열로 전달한 형태
        console.log("[useEffect 2]")
        console.log("처음(최초 렌더링) 한 번만 출력됨.")
    }, [])

    useEffect(() => {
        // 의존성 배열에 a를 담은 상태
        console.log("[useEffect 3]")
        console.log("처음 + a 변경 시에만 출력됨.")
    }, [a])

    return (
        <div className="card">
            <h3>STEP 1. 의존성 배열</h3>
            <p>a: {a} / b : {b}</p>
            <div className="btn-row">
                <button onClick={() => {setA(a + 1)}}>a + 1</button>
                <button onClick={() => {setB(b + 1)}}>b + 1</button>
            </div>
        </div>
    )
}

function Step2() {
    const [sec, setSec] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        // isRunning = false일 때는 동작할 내용이 없으므로 바로 return
        if (!isRunning) return

        const id = setInterval(() => {
            setSec((prev) => prev + 1)
        }, 1_000)

        return () => {
            clearInterval(id)
            // clearInterval이 없으면 정지 버튼을 눌러도 정지 안 함
            // 심지어 정지버튼 누를 때마다 시간 빨리 감... 스톱워치 고장
        }
    }, [isRunning])

    return (
        <div className="card">
            <h3>STEP 2. 스톱워치</h3>
            <p>{sec}초</p>
            <div className="btn-row">
                <button onClick={() => {setIsRunning(!isRunning)}}>
                    {isRunning ? '정지' : '시작'}
                </button>
                <button onClick={() => {setSec(0)}}>리셋</button>
            </div>
        </div>
    )
}

// API 호출
function Step3() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // 비동기 작업 수행을 위해 내부에서 async 함수 정의
        async function load() {
            try {
                // fetch 함수를 활용
                // => 지정된 API 주소로 데이터 요청(GET)하고 응답 받기
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                
                // 위 주소를 존재하지 않는 주소(user123 등)로 바꾸면 서버 오류: 404
                // jsonplaceholder.typicode.com 부분을 바꾸면? failed to fetch
                if (!res.ok) throw new Error(`서버 오류: (${res.status})`)
                
                // console.log(await res.json())
                
                // 응답 받은 Response 객체를 
                // JSON 형태의 자바스크립트 객체/배열로 변환하고,
                // users 상태에 저장한다.
                setUsers(await res.json())

            } catch (err) {
                setError(err.message)
            }

            // 데이터 로딩 성공이든 실패든 로딩중=false로 바꿔서
            // '로딩 중...'을 끄기
            setLoading(false)

        }

        // useEffect 콜백 함수에 async 사용 불가
        // => 함수를 별도로 정의하여 호출
        load()

        {/* 콜백 함수가 뭐더라?
            : 다른 함수의 인자(재료)로 전달되어,
              특정 조건이나 시점이 됐을 때 시스템이나 다른 함수에 의해 
              "나중에 호출(Call)되는" 함수
            
            그래서 useEffect의 콜백함수에는 왜 async 못 씀?
            : useEffect가 반환해야 하는 값과 async 함수가 반환해야 하는 값이 충돌하기 때문.
              aysnc를 허용할 경우, 원래 useEffect가 리턴하는 함수를
              리액트는 "정리 함수"로 인식하여 나중에 실행해야 하는데,
              Promise 객체가 튀어나와 리액트에 혼란을 주게 됨.
        */}

        // 처음 렌더링 시 딱 한 번만 동작하도록
        // 두 번째 인자(의존성 배열)로 빈 배열 전달
    }, [])  

    return (
        <div className="card">
            <h3>STEP 3. 데이터 가져오기</h3>
            {loading && <p>로딩 중...</p>}
            {error && <p>{error}</p>}

            <ul>
                {users.map((u) => <li key={u.id}>{u.name}</li>)}
            </ul>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>UseEffect</h1>
            {/* <Step1 /> */} {/* 콘솔 계속 찍히니까 주석 처리... */}
            <Step2 />
            <Step3 />
        </>
    )
}

export default Example