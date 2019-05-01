import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  mainWrapper: {
    width: '100%',
    padding: '96px 0',
    color: '#121c28',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    height: '40px',
    boxSizing: 'border-box',
    marginBottom: '8px',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px',
    width: '140px',
    textAlign: 'center'
  },
  underline: {
    background: '#121c28',
    paddingTop: '4px',
    width: '96px',
  },
  txtIntro: {
    paddingTop: '48px',
    fontWeight: 'bold',
    fontSize: '32px'
  }
};


const AboutPage = ({classes}) => {
    return (
      <div className={classes.mainWrapper} id="about">
        <div className={classes.titleBox}>
          <Typography className={classes.title} color="inherit">About US</Typography>
          <Typography className={classes.underline} />
        </div>
        <Typography component={'p'} className={classes.txtIntro}>
            We are awesome
        </Typography>
      </div>
    );
}

export default withStyles(styles)(AboutPage);