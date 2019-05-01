import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  mainWrapper: {
    width: '100%',
    padding: '96px 0',
    color: '#121c28',
    background: '#efefef'
  },
  titleBox: {
    width: '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    height: '40px',
    boxSizing: 'border-box',
    marginBottom: '8px',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '24px',
    width: '140px',
    textAlign: 'center'
  },
  underline: {
    background: '#121c28',
    paddingTop: '4px',
    width: '96px',
  }
};

const MemberPage = ({classes}) => {
  return (
    <div className={classes.mainWrapper} id="member">
      <div className={classes.titleBox}>
        <Typography className={classes.title} color="inherit">Member</Typography>
        <Typography className={classes.underline} />
      </div>
    </div>
  );
}

export default withStyles(styles)(MemberPage);