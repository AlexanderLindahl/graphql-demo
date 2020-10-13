import React from 'react'
import { useEmployeeCardStyles } from '../../Style'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography } from '@material-ui/core'

interface EmployeeCardProps {
  id: number
  firstName: string
  lastName: string
  title: string
}

export default function EmployeeCard(props: EmployeeCardProps) {
  const { id, firstName, lastName, title } = props

  const classes = useEmployeeCardStyles()

  return (
    <div className={classes.root}>
      <Link to={`/employee/${id}`}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </div>
  )
}
