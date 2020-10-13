import React, { useState } from 'react'
import { Modal, TextField, Button, Typography } from '@material-ui/core'
import { Mutation } from 'react-apollo'
import { useAddEmployeeStyles } from '../../Style'
import gql from 'graphql-tag'

interface AddEmployeeModalProps {
  setShowModal: (input: boolean) => void
  showModal: boolean
}

const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String
    $lastName: String
    $title: String
    $email: String
    $phoneNumber: String
    $address: String
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      title: $title
      email: $email
      phoneNumber: $phoneNumber
      address: $address
    ) {
      id
    }
  }
`
const AddEmployeeModal = (props: AddEmployeeModalProps) => {
  const { showModal, setShowModal } = props
  const classes = useAddEmployeeStyles()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [title, setTitle] = useState('')

  return (
    <Modal
      className={classes.modal}
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Mutation mutation={ADD_EMPLOYEE}>
        {(addEmployee: any, { data }: any) => {
          const submitEmployee = () => {
            addEmployee({
              variables: {
                firstName: firstName,
                lastName: lastName,
                title: title,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
              },
            }).then((res: any) => {
              window.location.href = `/employee/${res.data.addEmployee.id}`
            })
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
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <TextField
                  className={classes.input}
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
                <TextField
                  className={classes.input}
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)
                  }}
                />
                <TextField
                  className={classes.input}
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <TextField
                  className={classes.input}
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                />
                <TextField
                  className={classes.input}
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />

                <Button
                  className={classes.submitButton}
                  variant="contained"
                  color="primary"
                  onClick={submitEmployee}
                >
                  Submit
                </Button>
              </form>
            </div>
          )
        }}
      </Mutation>
    </Modal>
  )
}

export default AddEmployeeModal
