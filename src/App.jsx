import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './components/etudiant/Dashboard.jsx'
import ProDashboard from './components/professeur/ProDashboard.jsx';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/etudiant' Component={Dashboard}/>
          <Route path='/professeur' Component={ProDashboard}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
