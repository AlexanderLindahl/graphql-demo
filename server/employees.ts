export interface Employee {
  id: number
  firstName: string
  lastName: string
  title: string
  email: string
  phoneNumber: string
  address: string
  employmentDate: string
}
export const employees: Employee[] = [
  {
    id: 1,
    firstName: 'Anders',
    lastName: 'Karlsson',
    title: 'Utvecklare',
    email: 'Anders.Karlsson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '10/9-2019',
  },
  {
    id: 2,
    firstName: 'Emma',
    lastName: 'Andersson',
    title: 'Utvecklare',
    email: 'Emma.Andersson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '1/6-2016',
  },
  {
    id: 3,
    firstName: 'Anna',
    lastName: 'Eriksson',
    title: 'Divisionschef',
    email: 'Anna.Eriksson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '27/6-2004',
  },
]
