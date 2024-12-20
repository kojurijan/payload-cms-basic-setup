import { CollectionConfig } from 'payload/types'


const Country:CollectionConfig = {
    slug: 'country',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name:'name',
            type:'text',
            required: true,
        },
        {
            name:'description',
            type:'richText',
            required: true,
        },
        {
            name: 'flag', // required
            type: 'upload',
            relationTo: 'media',
            required: true,
            access: {
                create:  ({}) => {
                      return true;},
                read:  ({}) => {
                    return true;},
              },
        },
        
      ],
    }
export default Country
