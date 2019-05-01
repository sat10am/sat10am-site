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
    flexDirection: 'column'
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
  }
};

const ArchivePage = ({classes}) => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.titleBox}>
        <Typography className={classes.title} id="archive" color="inherit">Archive</Typography>
        <Typography className={classes.underline} />
      </div>
    </div>
  );
}

export default withStyles(styles)(ArchivePage);