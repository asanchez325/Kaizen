import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing('80%'),

    },
  },
  paper: {
    padding: theme.spacing(15),
  },
  form: {
    display: 'inline',
    flexWrap: 'wrap',
    justifyContent: 'right',
  },
  fileInput: {
    width: '100%',
    margin: '20px 0',
  },
  buttonSubmit: {
    marginBottom: 20,
  },
}));