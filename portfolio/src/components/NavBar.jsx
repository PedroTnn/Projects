import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
    flexgrow: 1,
  }
  ,
  menuButton: {
    marginRight: theme.sparcint(2),
  }
  ,
  title: {
    flexgrow: 1,
  },
}));


export function NavBar(){
return(
<div className={useStyles.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={useStyles.title} component="div" sx={{ flexGrow: 1 }}>
          Portfolio 
        </Typography>
        <Button color="inherit">Acerca de mi</Button>
        <Button color="inherit">Estudios</Button>
        <Button color="inherit">Contactame</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
  
}
