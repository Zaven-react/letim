import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop:"100px",
    position: props => props.position,
  },
});

function App(props) {
  debugger
  const classes = useStyles();
 
  return <div className={classes.root} >
    <Button color="primary">Hello World</Button>
    
    </div>;
}

export default App;
