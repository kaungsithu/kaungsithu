module.exports = [
    {
      type: 'note',
      id: 'about'
    },
    {
      type: 'category',
      label: 'Career Journey',
      link: {type: 'note', id: 'career-journey'},
      items: [
        {
          type: 'note',
          id: 'experience'
        },
        {
          type: 'note',
          id: 'skills'
        },
        {
          type: 'note',
          id: 'certifications'
        },
        {
          type: 'note',
          id: 'education'
        },
        {
          type: 'note',
          id: 'additional-experience'
        }
      ]
    },
    {
      type: 'category',
      label: 'Showcase',
      link: {type: 'note', id: 'showcase'}
      // items: [
      //   {
      //     type: 'note',
      //     id: 'experience'
      //   },
      //   {
      //     type: 'note',
      //     id: 'skills'
      //   },
      //   {
      //     type: 'note',
      //     id: 'certifications'
      //   },
      //   {
      //     type: 'note',
      //     id: 'education'
      //   },
      //   {
      //     type: 'note',
      //     id: 'additional-experience'
      //   }
      // ]
    }
  ]