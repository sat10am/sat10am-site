import React, { Component } from 'react';
import Footer from './Footer';
import MainNav from './MainNav';
import { About, Member, Archive } from '../pages';
import { withStyles } from '@material-ui/core/styles';
import intro from '../../static/images/intro_1.jpeg';

const styles = {
  mainWrapper: {
    width: '100%'
  },
  introImg: {
    width: '100%',
  }
};

class DefaultTemplate extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.memberRef = React.createRef();
    this.archiveRef = React.createRef();
  }
  render() {
    const { classes } = this.props;
    const refs = {
      aboutRef: this.aboutRef,
      memberRef: this.memberRef,
      archiveRef: this.archiveRef,
    };

    return (
      <div className={classes.mainWrapper}>
        <MainNav refs={refs}/>
        <img className={classes.introImg} src={intro} alt="intro" />
        <About />
        <Member />
        <Archive />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(DefaultTemplate);
