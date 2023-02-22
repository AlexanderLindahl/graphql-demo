import './App.css'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import Employees from '../../client/src/components/Employees'
import EmployeePage from '../../client/src/components/EmployeePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/employee/:id" element={<EmployeePage />} />
          <Route path="/" element={<Navigate to="/employees" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
