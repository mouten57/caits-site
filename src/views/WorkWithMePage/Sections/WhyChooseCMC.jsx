import React, { Component } from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';

import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx';

class SectionIntro extends Component {
	render() {
		const experience = [
			'Administrative',
			'Supply Chain (High Volume Recruiting)',
			'Operations',
			'Industrial',
			'Healthcare',
			'Information Technology',
			'Oil & Gas',
			'Aerospace & Defense'
		];
		const { classes } = this.props;
		return (
			<div className={` ${classes.pricing}`}>
				<div className={classes.container}>
					<GridContainer {...this.props}>
						<GridItem
							xs={12}
							className={`${classes.mlAuto} ${classes.mrAuto} `}
							style={{ textAlign: 'center' }}
						>
							<h2 className={classes.title} style={{ alignText: 'center' }}>
								Why Caitlin May Consulting?
							</h2>
						</GridItem>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} `}>
							<h5
								className={classes.description}
								style={{
									textAlign: 'center',
									color: classes.redditColor
								}}
							>
								Think of Caitlin May Consulting as your on personal hype women and you are the “main
								performer”. My job is to{' '}
								<b>
									<i>inspire you</i>
								</b>
								,
								<b>
									<i> motivate you</i>
								</b>{' '}
								and{' '}
								<b>
									<i>empower you</i>
								</b>{' '}
								in your job search. Your wins are my wins.
							</h5>
						</GridItem>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} `}>
							<h5 className={classes.description}>
								As a current recruiter turned resume writer & job coach, I now have the “inside scoop”
								on how recruiters/employers go about hiring their employees and exactly WHAT they are
								looking for.
							</h5>
						</GridItem>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} `}>
							<h5 className={classes.description}>
								I have helped hundreds of job seekers transform their resumes to documents that shout
								“pick me!” and land interview after interview.
							</h5>
						</GridItem>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} `}>
							<h5 className={classes.description}>
								My recruitment experience expands throughout several industries including:
							</h5>
							<ul className={classes.description} style={{ listStylePosition: 'inside' }}>
								{experience.map((job, index) => <li key={index}>{job}</li>)}
							</ul>
						</GridItem>
						<GridItem>
							<h5 className={classes.description}>
								I use proven techniques that I have put to the test with current candidates throughout
								my recruiting career and they work! This is a win-win-win. The job seeker is happy, the
								hiring manager is happy and I am thrilled!
							</h5>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(pricingStyle)(SectionIntro);
