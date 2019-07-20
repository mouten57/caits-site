import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import Star from '@material-ui/icons/Star'
// core components

import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Card from '../../components/Card/Card.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import CardAvatar from '../../components/Card/CardAvatar.jsx'
import Muted from '../../components/Typography/Muted.jsx'
// import Warning from '../../components/Typography/Warning.jsx'

import testimonialsStyle from '../../assets/jss/views/sectionsSections/testimonialsStyle.jsx'
//////////Testimonal Images///////////
import placeholder from '../../assets/img/faces/placeholder.jpg'
import athanasios from '../../assets/img/faces/athanasiosBoutas.jpeg'
import wendy from '../../assets/img/faces/wendyPorterLynn.jpeg'
import ryan from '../../assets/img/faces/ryanKey.jpeg'
import stefanie from '../../assets/img/faces/stefaniePolak.jpeg'
import alfredo from '../../assets/img/faces/alfredoCastro.jpeg'
import wes from '../../assets/img/faces/wesJones.jpeg'
import jaymes from '../../assets/img/faces/jaymesMckenzie.jpeg'

import FiveStars from '../../components/FiveStars'

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  }
  return (
    <div className="cd-section" {...rest} style={{ margin: '40px auto' }}>
      <GridContainer />
      <div
        className={`${classes.testimonials} ${classes.sectionDark} ${
          classes.testimonial2
        }`}
        style={{ borderRadius: '20px' }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.cardTitle}>What Clients Say</h2>
              <h5 className={classes.cardDescription}>
                Need more information? Check out what other people are saying
                about Caitlin May Consulting.
              </h5>
              <hr style={{ border: '1px solid #FFF' }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  {/* TESTIMONAL ONE */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={athanasios} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        I highly recommend Caitlin and the help she can offer in
                        terms of making a resume stand out. She’s attentive,
                        focused, and knowledgeable. I contacted Caitlin because
                        I knew that my resume wasn't up to par in terms of what
                        potential employers and recruiters were looking for. Her
                        feedback was informative and constructive, and helped me
                        bring out the best in my resume. Caitlin help me
                        pinpoint the areas of my resume that needed tweaking, as
                        well as highlighting my skills and expertise so that
                        they can further stand out. Furthermore, she was able to
                        cater to my particular needs as a student coming out of
                        school in search of employment and the points I should
                        focus on in my resume that would help me get a job.
                        <br />
                      </h5>
                      <h4 className={classes.cardTitle}>Athanasion Boutas</h4>
                      <Muted>
                        <h6>
                          Master’s Candicate - Research Assistant at Universite
                          de Montreal
                        </h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL TWO */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={wendy} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        I wholeheartedly recommend Caitlin's resume services if
                        you are looking to transform your resume into a tool
                        that will land you interviews at companies you've
                        targeted and for the positions you are most interested
                        in. <br />
                        <br />I initially contacted Caitlin because I felt my
                        resume was an accurate representation of my experience
                        and abilities, but it didn't really "sell me" and it
                        needed a boost of energy. Since she is a recruiter
                        herself, I figured she'd have a good handle on what
                        grabs recruiter's attention.
                        <br />
                        <br /> She is an excellent listener and quickly
                        understood what I had to offer and what I was looking
                        for. She overhauled my resume to give higher priority to
                        things I hadn't thought of; injected appropriate
                        keywords to help me get over the hurdle of applicant
                        tracking systems; and transformed my resume for my flat,
                        dull document to one that really works. I've gotten a
                        lot more interviews since she helped me!
                      </h5>
                      <h4 className={classes.cardTitle}>Wendy Porter Lynn</h4>
                      <Muted>
                        <h6>Senior Executive Assistant</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL THREE: need to come back and fix image after he accepts friend request, or get it from cait */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={ryan} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        I found Caitlin a month or so ago by sending her my
                        resume. She fixed my mess of a resume out of sheer
                        kindness. I've spoken course bonded with her by email
                        several times. She's always helpful and, get this, SHE
                        RESPONDS BACK! she has gone out of her way to assist me
                        and for just being a great person and recruiter I
                        recommend Caitlin to ANYONE that may be searching for
                        work!!!!!! Thank you Caitlin for being so helpful and
                        kind, your going places in this world young lady and I
                        hope that the folks you work for notice and show
                        appreciation!
                      </h5>
                      <h4 className={classes.cardTitle}>Ryan Key</h4>
                      <Muted>
                        <h6>
                          Site Superintendent as Coval Group Builders and
                          Erectors
                        </h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL FOUR */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={stefanie} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        Caitlin helped give me some great tips and some very
                        helpful changes needed for my resume. She was very
                        thorough and extremely friendly! I would definitely
                        recommend Caitlin to anyone who is looking to enhance
                        their resume and get it noticed!
                      </h5>
                      <h4 className={classes.cardTitle}>Stefanie Polak</h4>
                      <Muted>
                        <h6>
                          Certified Document Controller / Document Management
                          Specialist at Sempra LNG & Midstream
                        </h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL FIVE..***FIX IMAGE***same issue as #3 */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={alfredo} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        Caitlin is one of the brightest recruiters that I have
                        had the pleasure of working with. I engaged her recently
                        and to assist me with revising my CV and I was very
                        pleased with the outcome. She made wonderful suggestions
                        and was very attentive to what I was trying to
                        accomplish. She truly enjoys what she does and she is
                        always willing to help others. She is just an absolutely
                        wonderful person…
                      </h5>
                      <h4 className={classes.cardTitle}>
                        Alfredo Castro, PHR SHRM-CP
                      </h4>
                      <Muted>
                        <h6>
                          Human Resources Business Partner at Precision Drilling
                        </h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL SIX */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={jaymes} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        I contacted Caitlin about reviewing my resume since I
                        knew it needed an overhaul. Caitlin promptly responded
                        and gave me stellar advice on revamping my resume.
                        Caitlin has a deep understanding about what employers /
                        recruiters are looking for and how to tailor a resume to
                        get the attention it deserves. Caitlin is highly
                        recommended.
                      </h5>
                      <h4 className={classes.cardTitle}>Jaymes McKenzie</h4>
                      <Muted>
                        <h6>Realtor at Champions in Sugar Land TX</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL SEVEN */}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={wes} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        I had sent my resume to hundreds of companies with
                        little to no response. Around that time I noticed a post
                        of Caitlin's on LinkedIn volunteering her time to
                        critique people's resumes. I emailed her mine and she
                        responded immediately catching several items that needed
                        to be added or adjusted. I took her advice and from that
                        point forward, I started getting responses from almost
                        100% of the companies that I reached out to. She did
                        this out of the kindness of her heart and I appreciate
                        that. I would highly recommend Caitlin to anyone. She is
                        top notch!
                      </h5>
                      <h4 className={classes.cardTitle}>Wes Jones</h4>
                      <Muted>
                        <h6>CWI at TechnipFMC</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
                <div>
                  {/* TESTIMONAL EIGHT*/}
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={placeholder} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        Working with Caitlin was a pleasure. I had never worked
                        with a professional resume person before. She knows her
                        business and I was most satisfied with the resume
                        product that was developed.
                      </h5>
                      <h4 className={classes.cardTitle}>Tom M.</h4>
                      <Muted>
                        <h6>Jan 10, 2018</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <FiveStars />
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </div>
  )
}

export default withStyles(testimonialsStyle)(SectionTestimonials)
