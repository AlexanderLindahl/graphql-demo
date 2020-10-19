import React from 'react'
import { Modal } from '@material-ui/core'
import { Mutation, MutationFunction } from 'react-apollo'
import { useAddEmployeeStyles } from '../../Style'
import gql from 'graphql-tag'
import AddEmployeeForm from './AddEmployeeForm'

interface AddEmployeeModalProps {
  setShowModal: (input: boolean) => void
  showModal: boolean
}
interface EmployeeInput {
  firstName: string
  lastName: string
  title: string
  email: string
  phoneNumber: string
  address: string
}

const ADD_EMPLOYEE = gql`
  mutation employee(
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

  return (
    <Modal
      className={classes.modal}
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Mutation mutation={ADD_EMPLOYEE}>
        {(addEmployee: MutationFunction<string, EmployeeInput>) => {
          const submitEmployee = (input: EmployeeInput) => {
            addEmployee({
              variables: {
                firstName: input.firstName,
                lastName: input.lastName,
                title: input.title,
                email: input.email,
                phoneNumber: input.phoneNumber,
                address: input.address,
              },
            }).then((res: any) => {
              window.location.href = `/employee/${res.data.addEmployee.id}`
            })
          }

          return <AddEmployeeForm submitEmployee={submitEmployee} />
        }}
      </Mutation>
    </Modal>
  )
}

export default AddEmployeeModal
