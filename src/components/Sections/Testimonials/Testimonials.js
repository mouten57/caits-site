import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
import { testimonials_text } from './testimonials_text.js';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// import Star from '@material-ui/icons/Star'
// core components

import GridContainer from '../../Grid/GridContainer.jsx';
import GridItem from '../../Grid/GridItem.jsx';
import Card from '../../Card/Card.jsx';
import CardBody from '../../Card/CardBody.jsx';
import CardAvatar from '../../Card/CardAvatar.jsx';
import Muted from '../../Typography/Muted.jsx';
import FiveStars from '../../FiveStars';
// import Warning from '../../components/Typography/Warning.jsx'

import testimonialsStyle from '../../../assets/jss/views/sectionsSections/testimonialsStyle.jsx';

function SectionTestimonials({ ...props }) {
	const { classes, ...rest } = props;
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		cssEase: 'linear'
	};
	return (
		<div className="cd-section" {...rest} style={{ margin: '40px auto' }}>
			<GridContainer />
			<div
				className={`${classes.testimonials} ${classes.sectionDark} ${classes.testimonial2}`}
				style={{ borderRadius: '20px' }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
						>
							<h2 className={classes.cardTitle}>What Clients Say</h2>
							<h5 className={classes.cardDescription}>
								Need more information? Check what other people are saying about Caitlin May Consulting.
							</h5>
							<hr style={{ border: '1px solid #FFF' }} />
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<Carousel {...settings}>
								{testimonials_text.map((item, idx) => (
									<div key={idx}>
										<Card testimonial plain className={classes.card2}>
											<CardAvatar testimonial plain>
												<a href="/" onClick={(e) => e.preventDefault()}>
													<img
														src={require(`../../../assets/img/linkedIn/${item.image}`)}
														alt={item.name}
													/>
												</a>
											</CardAvatar>
											<CardBody plain>
												<h5 className={classes.cardDescription}>{item.body()}</h5>
												<h4 className={classes.cardTitle}>{item.name}</h4>
												<Muted>
													<h6>{item.title}</h6>
												</Muted>
											</CardBody>
											<div>
												<FiveStars />
											</div>
										</Card>
									</div>
								))}
							</Carousel>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
