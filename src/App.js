import { Button, TextField } from '@material-ui/core';
import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop:"80px",
    fontFamily:"cursive",  
     position: props => props.position,
    
  },

});



function App(props) {
 
const classes = useStyles();

 const [val,setVal] = useState("");
 const [h3iArjeq,setH3iArjeq] = useState("");


 const handleOnChange = (e) => {
setVal(e.target.value)
 }

 const onClick = ()=>{  
  setH3iArjeq(val) 
  setVal("")
}


  return <div className={classes.root} >
    
    <List>
        
    </List> 
    <TextField onChange={handleOnChange} value={val}></TextField>
    <Button color="primary" onClick={onClick}>Send</Button>
    <List className={classes.boot} >
       {h3iArjeq} 
    </List>
 
    
    </div>;
}

export default App;
