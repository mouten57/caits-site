/* eslint-disable */
import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';

import projectsStyle from '../../../assets/jss/views/sectionsSections/projectsStyle.jsx';

const links = [
	'https://drive.google.com/file/d/1kyUhHG_kMrSp5_bEBuGrs7MKnCaha6wF/preview',
	'https://drive.google.com/file/d/1x1FCfrDLqYGvsSUVo4LtbZXiv09rRHVi/preview',
	'https://drive.google.com/file/d/1RYJmGidOe-eu7MyIyS3FpPEnwJhUdpsz/preview'
];

function SectionProjects({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest} style={{ width: '100%' }}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
						<h2 className={classes.title} style={{ textAlign: 'center' }}>
							Recent Work
						</h2>
					</GridItem>
					{links.map((link, i) => (
						<GridItem key={i} xs={12} sm={6} lg={4} style={{ marginTop: '15px' }}>
							<iframe src={`${link}`} width="100%" height="480" />
						</GridItem>
					))}
					{/* bottom one couldnt be mapped bc it stretches 12 if large */}
					<GridItem xs={12} sm={6} lg={12} style={{ marginTop: '15px' }}>
						<iframe
							src="https://drive.google.com/file/d/1P1_iWLcapnYaphJUZOpyuiF0drbyizL5/preview"
							width="100%"
							height="480"
						/>
					</GridItem>
				</GridContainer>
			</div>

			<div className={classes.projects}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
							<h5 className={classes.description}>
								To learn more, please email{' '}
								<a
									href={`mailto:caitlin@caitlinmayconsulting.com?subject=I'm interested in your career consulting!&body=Hi, I'd like to learn more about your career consulting services.%0D%0A%0D%0AMy Name:%0D%0APhone Number:%0D%0AI'm interested in and excited about:%0D%0AMessage:%0D%0A%0D%0AThanks!%0D%0A(name)`}
								>
									caitlin@caitlinmayconsulting.com
								</a>
							</h5>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}

export default withStyles(projectsStyle)(SectionProjects);
