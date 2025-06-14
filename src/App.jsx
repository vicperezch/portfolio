import { useState } from 'react'
import Nav from './components/navbar/Nav.jsx'
import HomePage from './components/home/HomePage.jsx'
import SkillsPage from './components/skills/SkillsPage.jsx'
import ProjectsPage from './components/projects/ProjectsPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'
import './App.css'

function App() {
  return (
    <>
    	<Nav />
		<HomePage />
		<SkillsPage />
		<ProjectsPage />
		<ContactPage />
    </>
  )
}

export default App
