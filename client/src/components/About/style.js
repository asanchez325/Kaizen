import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    marginTop: theme.spacing(4),
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  image: {
    height: 100,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  curvyLine: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },

  root1: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper1: {
    zIndex: 2,
  },
  card1: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
  },
  cardContent1: {
    maxWidth: 400,
  },
  textField1: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },

  imagesWrapper1: {
    position: 'relative',
  },
  imageDots1: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  image1: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  root3: {
    display: 'flex',
    overflow: 'hidden',
  },
  container3: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title3: {
    marginBottom: theme.spacing(2),
  },
  image3: {
    height: 100,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: '50%',
  },

}));