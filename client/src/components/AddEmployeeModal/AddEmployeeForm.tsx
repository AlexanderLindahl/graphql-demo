import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import { useAddEmployeeStyles } from '../../Style'

interface EmployeeInput {
  firstName: string
  lastName: string
  title: string
  email: string
  phoneNumber: string
  address: string
}
interface AddEmployeeFormProps {
  submitEmployee: (input: EmployeeInput) => void
}
const AddEmployeeForm = (props: AddEmployeeFormProps) => {
  const { submitEmployee } = props
  const classes = useAddEmployeeStyles()

  const [employeeInput, setEmployeeInput] = useState<EmployeeInput>({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const setFirstName = (input: string) => {
    setEmployeeInput({ ...employeeInput, firstName: input })
  }
  const setLastName = (input: string) => {
    setEmployeeInput({ ...employeeInput, lastName: input })
  }

  const setPhoneNumber = (input: string) => {
    setEmployeeInput({ ...employeeInput, phoneNumber: input })
  }
  const setEmail = (input: string) => {
    setEmployeeInput({ ...employeeInput, email: input })
  }
  const setAddress = (input: string) => {
    setEmployeeInput({ ...employeeInput, address: input })
  }
  const setTitle = (input: string) => {
    setEmployeeInput({ ...employeeInput, title: input })
  }
  return (
    <div>
      {' '}
      <form className={classes.form} noValidate autoComplete="off">
        <Typography variant="h6" className={classes.title}>
          Add New Employee
        </Typography>
        <TextField
          className={classes.input}
          label="First Name"
          variant="outlined"
          value={employeeInput.firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <TextField
          className={classes.input}
          label="Last Name"
          variant="outlined"
          value={employeeInput.lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <TextField
          className={classes.input}
          label="Phone Number"
          variant="outlined"
          value={employeeInput.phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
        />
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          value={employeeInput.email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          className={classes.input}
          label="Address"
          variant="outlined"
          value={employeeInput.address}
          onChange={(e) => {
            setAddress(e.target.value)
          }}
        />
        <TextField
          className={classes.input}
          label="Title"
          variant="outlined"
          value={employeeInput.title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={() => submitEmployee(employeeInput)}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddEmployeeForm
