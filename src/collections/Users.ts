import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  // auth: true,
  auth: {
    cookies: {
      secure: process.env.PAYLOAD_ENV !== 'development',
      sameSite: process.env.PAYLOAD_ENV === 'testing' ? 'none' : 'lax'
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
}

export default Users
