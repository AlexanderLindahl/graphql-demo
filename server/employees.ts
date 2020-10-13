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
    firstName: 'Alexander',
    lastName: 'Lindahl',
    title: 'Utvecklare',
    email: 'alexander.lindahl@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '10/9-2019',
  },
  {
    id: 2,
    firstName: 'Harry',
    lastName: 'Potter',
    title: 'UX Designer',
    email: 'harry.potter@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '1/6-2016',
  },
  {
    id: 3,
    firstName: 'Minerva',
    lastName: 'McGonagall',
    title: 'Divisionschef',
    email: 'minerva.mcgonagall@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '27/6-2004',
  },
  {
    id: 4,
    firstName: 'Hermione',
    lastName: 'Granger',
    title: 'BU-chef',
    email: 'hermione.granger@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '14/2-2020',
  },
]
