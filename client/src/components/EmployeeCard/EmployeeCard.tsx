import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface EmployeeCardProps {
  employee: Employee
}
interface Employee {
  id: number
  firstName: string
  lastName: string
  title: string
}

const EmployeeCard = (props: EmployeeCardProps) => {
  const { employee } = props

  return (
    <div>
      <Link to={`/employee/${employee.id}`}>
        <Card>
          <div>
            <CardContent>
              <Typography component="h5" variant="h5">
                {`${employee.firstName} ${employee.lastName}`}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {employee.title}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default EmployeeCard
