import { Route, Routes } from 'react-router'
import './assets/style/App.css'

import MainLayout from './components/Layout/MainLayout'

import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
