import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const styles = {
  navBar: {
    backgroundColor: '#121c28',
    color: '#f8df1d',
    height: '96px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkHome: {
    '&:hover': {
      textDecoration: 'none'
    },
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  rightWrapper: {
    color: '#ABC2DC',
    height: '100%'
  },
  navButton: {
    height: '100%',
    boxSizing: 'border-box',
    borderTop: '6px solid #121c28',
    borderRadius: '0px',
    '&:hover': {
      borderTopColor: '#f8df1d'
    }
  }
};
const moveScrollById = (id) => {
  const tagetElem = document.getElementById(id);
  window.scrollTo({ top: tagetElem.offsetTop, behavior: 'smooth' });
}

const MainNav = ({classes, refs}) =>  {
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.navBar}>
        <Link color="inherit" variant="h5" className={classes.linkHome}> 
          Sat10am
        </Link>
        <div className={classes.rightWrapper}> 
          <Button onClick={() => moveScrollById('about')} size="large" className={classes.navButton} color="inherit">About US</Button>
          <Button onClick={() => moveScrollById('member')} size="large" className={classes.navButton} color="inherit">Member</Button>
          <Button onClick={() => moveScrollById('archive')} size="large" className={classes.navButton} color="inherit">Archive</Button>
        </div> 
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MainNav);
