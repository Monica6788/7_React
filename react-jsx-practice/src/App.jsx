import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 같은 위치에 있는 파일 경로는 './폴더명/컴포넌트명'과 같은 형식으로 작성
// 폴더 안에 폴더 또 있으니까 './부모폴더/자식폴더/컴포넌트명'
// import 뒤에 태그명으로 쓸 별칭을 작성
// 예를 들어 import Ex로 작성했다면 JSX 영역 안의 태그도 <Ex />로 작성
import Example1 from './lessons/01-jsx-basic/Example'
// import 한 다음에는 <Example1></Example1> 또는 <Example1 />
import Example2 from './lessons/02-expression/Example'
import Example3 from './lessons/03-attribute/Example'

function App() {
  return (
    <>
      <h1>JSX 실습</h1>
      <hr />
      {/* <Example></Example> 로 작성해도 OK, <Example> 단일은 X */}
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  )
}

export default App
