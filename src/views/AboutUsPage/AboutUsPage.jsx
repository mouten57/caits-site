import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'
// core components

// import Header from '../../components/Header/Header.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx';
//import GridItem from '../../components/Grid/GridItem.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
// import Footer from '../../components/Footer/Footer.jsx'
// sections for this page
// import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import SectionDescription from './Sections/SectionDescription.jsx';
import SectionStory from './Sections/SectionStory.jsx';
import SectionContact from './Sections/SectionContact';
import ProfMemberships from './Sections/ProfMemberships';

import aboutUsStyle from '../../assets/jss/views/aboutUsStyle.jsx';

class AboutUsPage extends React.Component {
	componentDidMount() {
		typeof window !== 'undefined' && window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Parallax image={require('../../assets/img/CMC_BG_2.jpg')} filter="white" small>
					<div className={classes.container}>
						<GridContainer justify="center" />
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<SectionDescription />
						<SectionStory />
						<ProfMemberships />
						<SectionContact />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(aboutUsStyle)(AboutUsPage);
