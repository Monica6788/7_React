import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import './App.css'
import DashboardPage from './pages/DashboardPage'
import TodoDetailPage from './pages/TodoDetailPage'
import TodoListPage from './pages/TodoListPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<DashboardPage />} />
          <Route path="/todos" element={<TodoListPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
