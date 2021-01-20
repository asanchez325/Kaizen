import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: '-18px',
    paddingTop: '18px',
    paddingBottom: '48px',
    height: '12px',
    position: 'relative',
  },
  background: {
    background: 'url(../../images/home.jpg)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundSize: 'cover',
    letterSpacing: '2.5px',
  },

  title: {
    marginBottom: theme.spacing(3),
    position: 'relative',
    align: 'center',
  },

}))

