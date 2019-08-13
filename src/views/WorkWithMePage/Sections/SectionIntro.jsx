import React, { Component } from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import pricingStyle from '../../../assets/jss/views/sectionsSections/pricingStyle.jsx';

class SectionIntro extends Component {
	render() {
		const { classes } = this.props;
		const questions = [
			`Does your resume currently lack the “impressive” factor
    when you see it?`,
			` Are you excited to send over your resume to future employers
    or slightly ashamed?`,
			` Are you overwhelmed on where to start, what to say and how
    to say it?`
		];
		return (
			<div className={` ${classes.pricing}`} style={{ marginTop: '150px' }}>
				<div className={classes.container}>
					<GridContainer {...this.props}>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
							<h2 className={classes.title}>Work With Me!</h2>
							<div className>
								<ul className={classes.description} style={{ listStyle: 'none' }}>
									{questions.map((q, i) => (
										<li key={i}>
											<h5 className={classes.subTitle}>{q}</h5>
										</li>
									))}
								</ul>
								<h4 className={classes.description}>Fear no more! I am here to help. </h4>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(pricingStyle)(SectionIntro);
