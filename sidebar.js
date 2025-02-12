module.exports = [
  {
    type: 'note',
    id: 'about',
    label: 'About'
  },
  {
    type: 'category',
    label: 'Career Journey',
    link: { type: 'note', id: 'career-journey' },
    items: [
      {
        type: 'note',
        id: 'career-journey.experience',
        label: 'Experience'
      },
      {
        type: 'note',
        id: 'career-journey.skills',
        label: 'Skills'
      },
      {
        type: 'note',
        id: 'career-journey.certifications',
        label: 'Certifications'
      },
      {
        type: 'note',
        id: 'career-journey.education',
        label: 'Education'
      },
      {
        type: 'note',
        id: 'career-journey.additional-experience',
        label: 'Additional Experience'
      }
    ]
  },
  {
    type: 'category',
    label: 'Showcase',
    link: { type: 'note', id: 'showcase' },
    items: [
      {
        type: 'note',
        id: 'showcase.a-data-engineer-journey',
        label: "A Data Engineer's Journey"
      }
    ]
  }
]