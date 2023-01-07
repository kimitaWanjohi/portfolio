export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'visit',
            title: 'Visit',
            type: 'url'
        },
        {
            name: 'source',
            title: 'Source',
            type: 'url'
        },
        { 
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
    ]
}