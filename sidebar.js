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
        id: 'experience',
        label: 'Experience'
      },
      {
        type: 'note',
        id: 'skills',
        label: 'Skills'
      },
      {
        type: 'note',
        id: 'certifications',
        label: 'Certifications'
      },
      {
        type: 'note',
        id: 'education',
        label: 'Education'
      },
      {
        type: 'note',
        id: 'additional-experience',
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
        id: 'a-data-engineer-journey',
        label: "A Data Engineer's Journey"
      }
    ]
  }
]