module.exports = {
  attributes: {
    email: {
      type: 'string',
      unique: true,
      lowercase: true
    },
    displayName: 'string',
    twitter: 'string',
    twitterToken: 'string',
    twitterSecret: 'string'
  }
};