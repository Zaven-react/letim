import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop:"100px",
    fontFamily:"cursive",  
     position: props => props.position,
    
  },
  boot:{
    backgroundColor:"red",
  }
});



function App(props) {
 
  const classes = useStyles();
 let names = ["gyagoo","ruzik","abaz"];
 let n = names.map((el)=>{
  return <ListItem>{el}</ListItem>
 })

  return <div className={classes.root} >
    <Button color="primary">Hello World</Button>
    <List className={classes.boot}>
      {n}     
    </List>
 
    
    </div>;
}

export default App;
