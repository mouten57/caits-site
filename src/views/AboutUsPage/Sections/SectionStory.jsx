import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import Card from '../../../components/Card/Card.jsx';
import CardBody from '../../../components/Card/CardBody.jsx';
import withStyles from '@material-ui/core/styles/withStyles';

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
				<GridItem md={8} sm={8} className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)}>
					<h3 className={classes.title}>What job seekers think recruiters do:</h3>
					<h5 className={classes.description}>Help people find jobs.</h5>
					<h3 className={classes.title}>What recruiters actually do:</h3>
					<h5 className={classes.description}>Fill open positions for the company/client.</h5>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem md={12} sm={12}>
					<Card plain>
						<CardBody plain style={{ paddingTop: '0' }}>
							<h4 className={classes.cardTitle} style={{ marginTop: '0', textAlign: 'center' }}>
								My Story
							</h4>

							<p className={classes.cardDescription}>My name is Caitlin. </p>
							<p className={classes.cardDescription}>
								I am a recruiter by day and a resume writer/career coach by night and I LOVE what I do.{' '}
							</p>
							<p className={classes.cardDescription}>
								I am here to tell you that you do not have to sacrifice your happiness or salary for
								your dream job. I’ve helped clients land jobs with companies all over the nation within
								multiple industries and I can do the same for you. As a recruiter, I get an inside view
								into the hiring world; to leveraging the strategies and tactics acquired throughout my
								career. I’ve also coached hundreds of professionals out of their dull, unrewarding jobs
								and into the careers they love.{' '}
							</p>
							<h5 className={classes.description} style={{ fontWeight: 'bold', marginBottom: '5px' }}>
								My History:
							</h5>
							<p className={classes.cardDescription}>
								2013 I graduated with a Bachelor’s Degree in Human Resources and I knew I wanted to find
								a career where I could help others. I landed my first job as a recruiting assistant and
								I was hooked from there.{' '}
							</p>
							<p className={classes.cardDescription}>
								Throughout the years I gained experience within multiple industries including staffing
								agencies and recruiting for large corporations. I learned exactly what hiring managers
								were looking for and how candidates needed to present themselves on paper and in-person
								to land the job.{' '}
							</p>
							<p className={classes.cardDescription}>
								In 2017 after being in the recruiting world for some time, I realized that my true
								passion lied within resume writing and coaching clients on these skills I have obtained
								– and they could take these skills with them anywhere! That’s when Caitlin May
								Consulting was created. I am in the business of making a difference in people’s lives
								and building personal relationships, giving REAL advice and strategies that get results
								for job seekers of any level.
							</p>
							<hr />
							<p className={classes.cardDescription}>
								Want to learn more?{' '}
								<a
									href="https://caitlinmayconsulting.as.me/FREECONSULT"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.link}
								>
									Sign up for your free 15 minute phone consultation
								</a>{' '}
								TODAY!
							</p>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default withStyles(style)(SectionStory);
