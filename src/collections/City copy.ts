import { CollectionConfig } from 'payload/types'


const City: CollectionConfig = {
    slug: 'city',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
        },
        {
            name: 'pictures', // required
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'gallery',
            type: 'array',
            fields: [
              {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
              },
            ],
          },
        {
            name: 'country',
            type: 'relationship',
            relationTo: 'country',
        },
    ],
}
export default City
