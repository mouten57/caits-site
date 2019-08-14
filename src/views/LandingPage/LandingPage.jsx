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
			<div className={`${classes.team} ${classes.section}`}>
				<Parallax
					image={require('../../../src/assets/img/Youve_got_this.jpg')}
					filter="dark"
					style={{ maxHeight: '400px' }}
				>
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
