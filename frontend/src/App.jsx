import { Route, Routes } from 'react-router'

import MainLayout from './components/Layout/MainLayout'

import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
