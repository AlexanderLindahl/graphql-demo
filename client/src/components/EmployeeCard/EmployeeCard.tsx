import React from 'react'
import { useEmployeeCardStyles } from '../../Style'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography } from '@material-ui/core'

interface EmployeeCardProps {
  employee: Employee
}
interface Employee {
  id: string
  firstName: string
  lastName: string
  title: string
}

const EmployeeCard = (props: EmployeeCardProps) => {
  const { employee } = props

  const classes = useEmployeeCardStyles()

  return (
    <div className={classes.root}>
      <Link to={`/employee/${employee.id}`}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
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
