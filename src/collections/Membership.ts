import { CollectionConfig } from 'payload'

const Membership: CollectionConfig = {
  slug: 'membership',
  admin: {
    group: 'SUPPORT',

  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'workoutTime',
      type: 'text',
      required: false,
      label: 'Preferred Workout Time',
    },
    {
      name: 'membershipPlan',
      type: 'select',
      required: true,
      options: [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Quarterly', value: 'quarterly' },
        { label: 'Yearly', value: 'yearly' },
      ],
    },
    {
      name: 'category',
      type: 'select',
      required: false,
      options: [
        { label: 'Standard', value: 'standard' },
        { label: 'Premium', value: 'premium' },
        { label: 'VIP', value: 'vip' },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: false,
      label: 'Membership Start Date',
    },
    {
      name: 'notes',
      type: 'textarea',
      required: false,
      label: 'Additional Notes',
    },
  ],
}

export default Membership
