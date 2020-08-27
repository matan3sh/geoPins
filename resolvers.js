const { AuthenticationError } = require('apollo-server');

const user = {
  _id: '1',
  name: 'Matan Shaviro',
  email: 'matan3sh@gmail.com',
  picture: 'https://cloudinary.com/asdf',
};

const authenticated = (next) => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError('You mest be logged in');
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser),
  },
};
