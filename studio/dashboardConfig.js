export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61639628b2b7602e3a3aad3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-27jv7h7a',
                  apiId: '7f948039-6ae9-4fe0-86be-793c3df3170f'
                },
                {
                  buildHookId: '61639628dd648fce20c4f0b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9rhfvoda',
                  apiId: 'f182acfb-a2b6-4434-b3a3-96914cdb4cf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/janparkio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9rhfvoda.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
