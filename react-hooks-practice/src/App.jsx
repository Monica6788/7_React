import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseStateExample from './lessons/01-use-state/Example'
import UseEffectExample from './lessons/02-use-effect/Example'
import UseRefExample from './lessons/03-use-ref/Example'
import UseMemoExample from './lessons/04-use-memo/Example'
import UseCallbackExample from './lessons/05-use-callback/Example'

const LESSONS = [
  {id: 'use-state', label: 'useState', example: UseStateExample},
  {id: 'use-effect', label: 'useEffect', example: UseEffectExample},
  {id: 'use-ref', label: 'useRef', example: UseRefExample},
  {id: 'use-memo', label: 'useMemo', example: UseMemoExample},
  {id: 'use-callback', label: 'useCallback', example: UseCallbackExample},
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
          <Lesson />
        </main>
      </div>
  )
}

export default App
