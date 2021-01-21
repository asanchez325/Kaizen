import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    marginTop: theme.spacing(10),
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  lgMargin: {
    margin: theme.spacing(5),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));