import React from 'react'
import AddEmployeeForm from './AddEmployeeForm'
import { Modal } from '@mui/material'

interface AddEmployeeModalProps {
  setShowModal: (input: boolean) => void
  showModal: boolean
}

const AddEmployeeModal = (props: AddEmployeeModalProps) => {
  const { showModal, setShowModal } = props

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <AddEmployeeForm />
    </Modal>
  )
}

export default AddEmployeeModal
