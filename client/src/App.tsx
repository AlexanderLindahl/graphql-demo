import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Employees from './components/Employees'
import EmployeePage from './components/EmployeePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/employees" component={Employees} />
          <Route path="/employee/:id" component={EmployeePage} />
          <Redirect from="*" to="/employees" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
