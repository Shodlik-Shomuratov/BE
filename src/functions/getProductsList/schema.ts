export default {
  type: "object",
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    price: { type: 'string' },
    count: { type: 'string' },
  },
  required: ['id', 'name']
} as const;
