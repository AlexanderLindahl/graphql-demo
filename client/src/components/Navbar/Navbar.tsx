import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import AddEmployeeModal from '../AddEmployeeModal'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      color: 'white',
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  })
)

const Navbar = () => {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(false)

  return (
    <AppBar position="static">
      <AddEmployeeModal showModal={showModal} setShowModal={setShowModal} />
      <Toolbar>
        <Link to="/employees">
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" className={classes.title}>
          Employee List
        </Typography>
        <Button onClick={() => setShowModal(true)} color="inherit">
          Add New Employee
        </Button>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
