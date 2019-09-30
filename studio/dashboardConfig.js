export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d91cbd3a244677761923699',
                  title: 'Sanity Studio',
                  name: 'rbp-app-studio',
                  apiId: '24e77f6b-22e7-449e-ad9a-e71c4b9f597b'
                },
                {
                  buildHookId: '5d91cbd385c04f001f9a849c',
                  title: 'Blog Website',
                  name: 'rbp-app',
                  apiId: '19c006c0-94b0-461d-8bb0-f6d1ec4333ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/rbp-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rbp-app.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
