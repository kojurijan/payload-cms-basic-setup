import { CollectionConfig } from 'payload/types'
import  isAdminOrCreatedBy  from '../mocks/IsAdminOrCreatedBy'; 

const Orders: CollectionConfig = {
    slug: 'orders',
    fields: [
      {
        name: 'items',
        type: 'array',
        fields: [
          {
            name: 'item',
            type: 'text',
          }
        ]
      },
      {
        name: 'createdBy',
        type: 'relationship',
        relationTo: 'users',
        access: {
          update: () => false,
        },
        admin: {
          readOnly: true,
          position: 'sidebar',
          condition: data => Boolean(data?.createdBy)
        },
      },
    ],
    access: {
        read: isAdminOrCreatedBy,
        update: isAdminOrCreatedBy,
        delete: isAdminOrCreatedBy,
      },
    hooks: {
        beforeChange: [
          ({ req, operation, data }) => {
            if (operation === 'create') {
              if (req.user) {
                data.createdBy = req.user.id;
                return data;
              }
            }
          },
        ],
      },
  }
  
  export default Orders;