import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
import landingPageStyle from '../../assets/jss/views/landingPageStyle.jsx';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
//import profilePageStyle from '../../assets/jss/views/profilePageStyle.jsx'
// Sections for this page
// import SectionProduct from './Sections/SectionProduct.jsx'
import Testimonials from '../../components/Sections/Testimonials/Testimonials';
import SectionIntro from './Sections/SectionIntro.jsx';
import SectionWork from './Sections/SectionWork.jsx';
import SectionAbout from './Sections/SectionAbout.jsx';

//import logo from '../../assets/img/website-icon-white.png';

const daysBetween = (date1, date2) => {
	//Get 1 day in milliseconds

	var one_day = 1000 * 60 * 60 * 24;
	// Convert both dates to milliseconds
	var date1_ms = Number(date1);
	var date2_ms = date2.getTime();
	// Calculate the difference in milliseconds
	var difference_ms = date2_ms - date1_ms;
	// Convert back to days and return
	return Math.round(difference_ms / one_day) - 1;
};

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false
		};
	}

	componentDidMount() {
		// localStorage.clear();
		typeof window !== 'undefined' && window.scrollTo(0, 0);
		document.body.scrollTop = 0;

		let signUpAccepted = localStorage.getItem('signUpAccepted');
		let lastVisit = JSON.parse(localStorage.getItem('lastVisit'));
		console.log(signUpAccepted, lastVisit);

		let today = new Date();

		if (signUpAccepted != true) {
			let dayDiff = daysBetween(lastVisit, today);

			if (lastVisit != null && dayDiff > 2) {
				this.setState({ showPopup: true });
				localStorage.setItem('lastVisit', today.getTime());
			} else if (lastVisit != null && dayDiff <= 2) {
				this.setState({ showPopup: false });
			} else {
				this.setState({ showPopup: true });
				localStorage.setItem('lastVisit', today.getTime());
			}
		}
	}
	render() {
		const { classes } = this.props;
		console.log(this.state);

		return (
			<div className={`${classes.team} ${classes.section}`}>
				<Parallax image={require('../../../src/assets/img/Youve_got_this.jpg')} filter="dark" small>
					<div className={classes.container} style={{ height: '70%', padding: '0', margin: '0 auto' }}>
						{/* <GridItem xs={6}>
								<img src={logo} style={{ width: '100%', margin: '0 auto' }} alt="logo" />
							</GridItem> */}
						<GridContainer style={{ padding: '0', margin: '0' }}>
							<GridItem
								xs={12}
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0.55)',
									textAlign: 'center',
									borderRadius: '10px',
									margin: '0',
									padding: '0 auto'
								}}
							>
								<h2 className={classes.title}>The Career Corner.</h2>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<SectionIntro />

						{this.state.showPopup ? <SignUpModal /> : <div />}
						<Testimonials />
						<SectionAbout />
						<SectionWork />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);
