export const input = {
  $schema: 'http://json-schema.org/draft/2019-09/schema#',
  title: 'Example Schema',
  type: 'object',
  deprecated: true,
  description: 'comment',
  properties: {
    firstName: {
      type: 'string',
      deprecated: true,
      description: 'nested comment',
    },
    middleName: {
      type: 'string',
      deprecated: true,
      description: "Hi, my name's Doechii, this will be in a  comment",
    },
    lastName: {
      type: 'string',
      deprecated: false,
      description: 'nested comment',
    },
  },
  additionalProperties: false,
  required: ['firstName'],
}
