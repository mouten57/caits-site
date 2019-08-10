import React from 'react'
const roadmap = [
  `Network directly with recruiters and hiring managers.`,
  `Establish yourself as a thought leader in your field.`,
  `Target specific organizations and industries.`,
  `Promote yourself to potential employers.`,
]

export const add_on_pricing = [
  {
    name:
      'Standard Applicant Tracking System (ATS) optimized resume in word and pdf format + 2 rounds of revisions',
    price: '$400 - $800',
    other: `**Prices vary based off experience level**`,
  },
  {
    name: 'Tailored cover-letter, email and thank you letter template',
    price: `$75`,
  },
  { name: 'Complete LinkedIn Profile Revamp', price: '$350' },
  {
    name: 'Personalized job search strategy roadmap session (50 minutes)',
    price: '$200',
    other: `On this 50 minute call we will develop a strategic plan on how to:`,
    html: function() {
      return (
        <ul style={{ marginBottom: '0' }}>
          {roadmap.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )
    },
  },
  {
    name: `Live Resume review via google hangout`,
    price: `$200`,

    html: function() {
      return (
        <i>
          During this 20 minute call I will go over your current resume while
          sharing my screen. I will provide you with in depth advice and
          suggestions on how you can revamp your current resume, add in specific
          key words and get past the “black hole” applicant tracking system
          (ATS).
        </i>
      )
    },
  },
  {
    name: `Pdf tip sheets and instructional how-to videos on how based on your specific needs`,
    price: `$25`,
  },
  {
    name: `Job Coaching 1 on 1 sessions:`,
    other: `In these sessions I personally work one on one with you to help you
    clearly identify your skills and using those skills to help you
    discover your perfect job and how to land that job.`,
  },
]

export const coaching_process = [
  {
    Learn: `Get to know you: Your past career history, likes, dislikes, “need to have’s” and “could live without’s".`,
  },
  {
    Identify: `Find out what fuels you and ignites your passion and use that to discover your dream job.`,
  },
  {
    Strategize: `Establish a personalized roadmap to get you from where you are currently to receiving the offer for your dream job.`,
  },
  {
    Engage: `Teach you how to engage with other professionals that are currently in your dream job and how to utilize those connections to land your dream job. These calls are guaranteed to give you clarity, motivation and most importantly, confidence in your job search.`,
  },
]
