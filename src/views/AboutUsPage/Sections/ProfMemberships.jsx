import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import Card from '../../../components/Card/Card.jsx';
import CardBody from '../../../components/Card/CardBody.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import prof1 from '../../../assets/img/memberships/career-directors.png';
import prof2 from '../../../assets/img/memberships/NRWA.png';
import prof3 from '../../../assets/img/memberships/career-thought-leaders.png';
import storyStyle from '../../../assets/jss/views/aboutUsSections/storyStyle.jsx';

const style = {
	...storyStyle,
	link: {
		color: 'inherit',
		fontWeight: '500',
		'&:visited': {
			color: 'grey'
		},
		'&:hover': {
			color: 'blue'
		}
	}
};

function SectionStory(props) {
	const { classes } = props;
	return (
		<div className={classes.team}>
			<GridContainer>
				<GridItem xs={12} className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)}>
					<h3 className={classes.title}>Memberships & Professional Associations </h3>
				</GridItem>
				<GridContainer style={{ alignItems: 'center' }}>
					<GridItem xs={4} sm={4} style={{ height: '80%' }}>
						<Card style={{ height: '100%' }}>
							<img
								src={prof1}
								alt="career pofile pic"
								style={{
									maxHeight: '100%',
									maxWidth: '100%',
									width: 'auto',
									height: 'auto',
									margin: 'auto'
								}}
							/>
						</Card>
					</GridItem>
					<GridItem xs={4} sm={4} style={{ height: '80%' }}>
						<Card style={{ height: '100%' }}>
							<img
								src={prof2}
								alt="career pofile pic"
								style={{
									maxHeight: '100%',
									maxWidth: '100%',
									width: 'auto',
									height: 'auto',
									margin: 'auto'
								}}
							/>
						</Card>
					</GridItem>
					<GridItem xs={4} sm={4} style={{ height: '80%' }}>
						<Card style={{ height: '100%' }}>
							<img
								src={prof3}
								alt="career pofile pic"
								style={{
									maxHeight: '100%',
									maxWidth: '100%',
									width: 'auto',
									height: 'auto',
									margin: 'auto'
								}}
							/>
						</Card>
					</GridItem>
				</GridContainer>
			</GridContainer>
		</div>
	);
}

export default withStyles(style)(SectionStory);
