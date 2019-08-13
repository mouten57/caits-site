import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components used to create a google map
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'
import PinDrop from '@material-ui/icons/PinDrop';
import Phone from '@material-ui/icons/Phone';
import SubdirectoryArrowRight from '@material-ui/icons/SubdirectoryArrowRight';
// import BusinessCenter from '@material-ui/icons/BusinessCenter'
// core components
// import Header from '../../components/Header/Header.jsx'
// import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import InfoArea from '../../components/InfoArea/InfoArea.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
// import Footer from '../../components/Footer/Footer.jsx'

import contactUsStyle from '../../assets/jss/views/contactUsStyle.jsx';

const CustomSkinMap = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 35.4676, lng: -97.5164 }}
			defaultOptions={{
				scrollwheel: false,
				zoomControl: true,
				styles: [
					{
						featureType: 'water',
						stylers: [ { saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.fill',
						stylers: [ { hue: '#ff0000' }, { saturation: -100 }, { lightness: 99 } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [ { color: '#808080' }, { lightness: 54 } ]
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ece2d9' } ]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ccdca1' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [ { color: '#767676' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.stroke',
						stylers: [ { color: '#ffffff' } ]
					},
					{ featureType: 'poi', stylers: [ { visibility: 'off' } ] },
					{
						featureType: 'landscape.natural',
						elementType: 'geometry.fill',
						stylers: [ { visibility: 'on' }, { color: '#b8cb93' } ]
					},
					{ featureType: 'poi.park', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.sports_complex',
						stylers: [ { visibility: 'on' } ]
					},
					{ featureType: 'poi.medical', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.business',
						stylers: [ { visibility: 'simplified' } ]
					}
				]
			}}
		>
			<Marker position={{ lat: 35.4676, lng: -97.5164 }} />
		</GoogleMap>
	))
);
class ContactUsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formFields: {
				name: '',
				email: '',
				message: '',
				phone: ''
			}
		};
	}
	handleChange = (e) => {
		let formFields = { ...this.state.formFields };
		formFields[e.target.name] = e.target.value;
		this.setState({
			formFields
		});
	};
	componentDidMount() {
		typeof window !== 'undefined' && window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}
	render() {
		const { name, email, phone, message } = this.state;
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.bigMap}>
					<CustomSkinMap
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGr7jLJzimm5z2e--AsRskteS3AylCBLg"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={
							<div
								style={{
									height: `100%`,
									borderRadius: '6px',
									overflow: 'hidden'
								}}
							/>
						}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</div>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.contactContent}>
						<div className={classes.container}>
							<h2 className={classes.title}>Send me a message!</h2>
							<GridContainer>
								<GridItem md={6} sm={6}>
									<p>
										You can contact me with anything related to my Products. I'll get in touch with
										you as soon as possible.
										<br />
										<br />
									</p>
									<form action="https://formspree.io/Caitlin@CaitlinMayConsulting.com" method="POST">
										<CustomInput
											labelText="Your Name"
											inputProps={{
												name: 'name',
												value: name,
												onChange: this.handleChange
											}}
											id="float"
											formControlProps={{
												fullWidth: true
											}}
										/>
										<CustomInput
											labelText="Email address"
											inputProps={{
												name: 'email',
												value: email,
												type: 'email',
												onChange: this.handleChange
											}}
											id="float"
											formControlProps={{
												fullWidth: true
											}}
										/>
										<CustomInput
											labelText="Phone"
											inputProps={{
												name: 'phone',
												value: phone,
												type: 'tel',
												onChange: this.handleChange
											}}
											id="float"
											formControlProps={{
												fullWidth: true
											}}
										/>
										<CustomInput
											labelText="Your message"
											id="float"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												name: 'message',
												value: message,
												onChange: this.handleChange,
												multiline: true,
												rows: 4
											}}
										/>
										<div className={classes.textCenter}>
											<Button color="primary" round type="submit">
												Contact me
											</Button>
										</div>
									</form>
								</GridItem>
								<GridItem md={4} sm={4} className={classes.mlAuto}>
									<InfoArea
										className={classes.info}
										title="Find me at the office"
										description={
											<p>
												Oklahoma City, OK, 73008
												<br />
											</p>
										}
										icon={PinDrop}
										iconColor="primary"
									/>
									<InfoArea
										className={classes.info}
										title="Give me a ring"
										description={
											<p>
												Caitlin Outen <br /> (832) 773-0470 <br /> Mon - Fri, 8:00am-5:00pm
											</p>
										}
										icon={Phone}
										iconColor="primary"
									/>
									<InfoArea
										className={classes.info}
										title="Schedule a FREE Consultation"
										description={
											<a
												href="https://caitlinmayconsulting.as.me/FREECONSULT"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="primary" round style={{ width: '100%' }}>
													Get started now!
												</Button>
											</a>
										}
										icon={SubdirectoryArrowRight}
										iconColor="primary"
									/>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(contactUsStyle)(ContactUsPage);
