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
import Testimonials from '../../components/Sections/Testimonials';
import SectionIntro from './Sections/SectionIntro.jsx';
import SectionWork from './Sections/SectionWork.jsx';
import SectionAbout from './Sections/SectionAbout.jsx';

import logo from '../../assets/img/website-icon-white.png';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visited: false
		};
	}

	componentDidMount() {
		typeof window !== 'undefined' && window.scrollTo(0, 0);
		document.body.scrollTop = 0;

		//sessionStorage.clear()
		let visited = sessionStorage['alreadyVisited'];
		if (visited) {
			sessionStorage.setItem('alreadyVisited', true);
			this.setState({ visited: true });
			//do not view Popup
		} else {
			//this is the first time
			sessionStorage.setItem('alreadyVisited', true);
			this.setState({ visited: false });
		}
	}
	render() {
		const { classes } = this.props;
		console.log(this.state);

		return (
			<div>
				<Parallax image={require('../../../src/assets/img/Youve_got_this.jpg')} filter="dark">
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={4}>
								<div
									style={{
										display: 'flex',
										alignContent: 'center',
										justifyContent: 'center',
										alignItems: 'center',
										justifyItems: 'center',
										height: '100%'
									}}
								>
									<h2
										className={classes.title}
										style={{
											justifySelf: 'center',
											textAlign: 'center',
											width: '100%'
										}}
									>
										The Career Corner.
									</h2>
								</div>
							</GridItem>
							<GridItem xs={12} sm={12} md={8}>
								<img src={logo} style={{ width: '100%' }} alt="logo" />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<SectionIntro />

						{!this.state.visited ? <SignUpModal /> : <div />}
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
