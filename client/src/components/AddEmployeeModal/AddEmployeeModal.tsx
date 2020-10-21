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
      <AddEmployeeForm
        submitEmployee={/*submitEmployee*/ () => console.log('Implement me!')}
      />
    </Modal>
  )
}

export default AddEmployeeModal
