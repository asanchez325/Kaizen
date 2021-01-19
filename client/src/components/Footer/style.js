import { makeStyles } from '@material-ui/core/styles';
import {Image} from '../../images/home.jpg';

export default makeStyles((theme) => ({

  footer: {
    margin: theme.spacing('45%'),
    background: 'url(../../images/home.jpg)',
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    pointEvents: 'none',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    marginBottom: theme.spacing(14),
  },

}))