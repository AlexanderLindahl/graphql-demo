import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useNavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      color: 'white',
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  })
)

export const useAddEmployeeStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      color: 'white',
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      background: '#dddddd',
      padding: '20px;',
      borderRadius: '10px;',
    },
    input: {
      display: 'block',
      margin: '40px',
      width: '80%',
    },
    submitButton: {
      display: 'block',
      width: '75%',
      margin: '40px',
    },
  })
)

export const useEmployeePageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      textAlign: 'left',
      marginTop: '30px',
      margin: '0 auto',
      width: '80%',
      backgroundColor: theme.palette.background.paper,
    },
    details: {
      marginLeft: '50px',
      display: 'flex',
      flexDirection: 'column',
      float: 'left',
      width: '50%',
    },
    content: {
      flex: '1 0 auto',
    },
    text: {
      color: 'black',
    },
  })
)

export const useEmployeeCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { margin: '0 auto', width: '50%' },
    card: {
      display: 'flex',
      width: '100%',

      marginTop: '30px',
      '&:hover': {
        background: '#dcdcdc',
        cursor: 'pointer',
      },
    },

    details: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
)
