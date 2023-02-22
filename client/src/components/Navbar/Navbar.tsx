import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import AddEmployeeModal from '../AddEmployeeModal'

const NavBar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <AppBar position="static">
      <AddEmployeeModal showModal={showModal} setShowModal={setShowModal} />
      <Toolbar>
        <Link to="/employees">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Link>
        <Typography variant="h6">Employee List</Typography>
        <Button onClick={() => setShowModal(true)} color="inherit">
          Add New Employee
        </Button>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
