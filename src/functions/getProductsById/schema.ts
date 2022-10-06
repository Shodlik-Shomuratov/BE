export default {
  type: 'object',
  properties: {
    productId: {
      type: 'string',
         pattern: '^([a-zA-Z]*-[a-zA-Z]*)*$',
    },
  },
  required: ['productId'],
} as const;