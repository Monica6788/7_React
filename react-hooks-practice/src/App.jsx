import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const LESSONS = [
  {id: 'use-state', label: 'useState', example: <p>LESSON1</p>},
  {id: 'use-effect', label: 'useEffect', example: null},
  {id: 'use-ref', label: 'useRef', example: null},
  {id: 'use-memo', label: 'useMemo', example: null},
  {id: 'use-callback', label: 'useCallback', example: null},
]

function App() {
  const [lessonId, setLessonId] = useState(LESSONS[0].id)
  const lesson = LESSONS.find((item) => item.id === lessonId)
  const Lesson = lesson.example

    return (
      <div className='app'>
        <nav className='menu'>
          {
            LESSONS.map((item) => {
              return (
                <button key={item.id}
                        className={`menu-item${lessonId === item.id ? 'active' : ''}`}
                        onClick={() => {setLessonId(item.id)}}>
                  {item.label}
                </button>
              )
            })
          }
        </nav>
        <main className='page'>
          {/* <Lesson /> */}
        </main>
      </div>
  )
}

export default App
