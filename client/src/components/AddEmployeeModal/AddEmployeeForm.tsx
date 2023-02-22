import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useAddEmployee } from '../../../../client/src/graphql/mutation/AddEmployee'

interface EmployeeInput {
  firstName: string
  lastName: string
  title: string
  email: string
  phoneNumber: string
  address: string
}
const AddEmployeeForm = () => {
  const [addEmployee, { loading, error, data }] = useAddEmployee()

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
      <form noValidate autoComplete="off">
        <Typography variant="h6">Add New Employee</Typography>
        <TextField
          label="First Name"
          variant="outlined"
          value={employeeInput.firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={employeeInput.lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={employeeInput.phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={employeeInput.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          label="Address"
          variant="outlined"
          value={employeeInput.address}
          onChange={(e) => {
            setAddress(e.target.value)
          }}
        />
        <TextField
          label="Title"
          variant="outlined"
          value={employeeInput.title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => addEmployee({ variables: { ...employeeInput } })}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddEmployeeForm
