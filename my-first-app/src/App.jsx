import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First App</h1>
      <p>
      위에 App.css를 그대로 적용해두었기 때문에 알아서 가운데 정렬 되어 있다. <br />
      이건 React가 해준 게 아니다!!!  <br />
      </p> 

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}
              style={{width: '150px', 
                      color: "steelblue", 
                      backgroundColor: 'skyblue'}}
        >+</button>
    </>
  )
}

export default App
