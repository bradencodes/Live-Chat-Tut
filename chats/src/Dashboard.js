import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex'
  },
  topicsWindow: {
    
  },
  chatWindow: {

  },
  chatBox: {

  },
  button: {

  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h4' component='h4'>
          Chat App
        </Typography>
        <Typography variant='h5' component='h5'>
          Topic placeholder
        </Typography>
        <div className={classes.flex}>

        </div>
        <div className={classes.flex}>

        </div>
      </Paper>
    </div>
  );
}
