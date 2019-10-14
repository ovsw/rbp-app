import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdPerson, MdFolder} from 'react-icons/md/'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentListItem()
                .id('futureFamilies')
                .title('Future Families')
                .schemaType('page'),
              S.listItem()
                .title('Future Families Section Pages')
                .child(
                  S.list()
                    .title('Future Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('programs')
                        .title('Programs')
                        .schemaType('page'),
                      S.listItem()
                        .title('Program Pages')
                        .id('programsPages')
                        .child(
                          S.list()
                            .title('Programs Pages')
                            .items([
                              S.documentListItem()
                                .id('pineConeCampProgram')
                                .title('Pine Cone Camp')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('dayCampProgram')
                                .title('Day Camp')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('teenCampProgram')
                                .title('Teen Camp Program')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('leaderInTrainingProgram')
                                .title('Leader In Training')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('activities')
                        .title('Activities')
                        .schemaType('page'),
                      S.listItem()
                        .title('Activities Pages')
                        .id('activitiesPages')
                        .child(
                          S.list()
                            .title('Activities Pages')
                            .items([
                              S.documentListItem()
                                .id('clubsElectives')
                                .title('Clubs & Electives')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('learnToSwim')
                                .title('Learn to Swim')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('calendar')
                                .title('Calendar')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('specialEvents')
                                .title('Special Events')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('transportation')
                        .title('Transportation')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('beforeAfterCare')
                        .title('Before & After Care')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('datesRates')
                        .title('Dates & Rates')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('reviews')
                        .title('Reviews')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('tuitionAssistance')
                        .title('Tuition Assistance')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('faqs')
                        .title('FAQs')
                        .schemaType('page')
                    ])
                )
                .icon(MdFolder),
              S.documentListItem()
                .id('about')
                .title('About')
                .schemaType('page'),
              S.listItem()
                .title('About Section Pages')
                .id('aboutSection')
                .child(S.documentList()
                  .id('aboutSectionPages')
                  .title('About Section Pages')
                  .menuItems(S.documentTypeList('page').getMenuItems())
                  .filter('_type == $type && references($parentId)')
                  .params({type: 'page', parentId: 'about'})
                  .defaultOrdering([{field: '_createdAt', direction: 'asc'}])
                )
                .icon(MdFolder),
              S.documentListItem()
                .id('currentFamilies')
                .title('Current Families')
                .schemaType('page'),
              S.listItem()
                .title('Current Families Section Pages')
                .child(
                  S.list()
                    .title('Current Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('camperPhotoApp')
                        .title('Camper Photo App')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('lunchMenu')
                        .title('Lunch Menu')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('referAFamily')
                        .title('Refer a Family')
                        .schemaType('page')
                    ])
                ),
              S.documentListItem()
                .id('requestInfo')
                .title('requestInfo')
                .schemaType('page')
            ])),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
