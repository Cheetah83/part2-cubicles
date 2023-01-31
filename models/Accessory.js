const { Schema, model } = require('mongoose');

const schema = ({
  name: {type: String, required: true },
  description: {type: String, required: true, maxLength: 5000 },
  imageUrl: {type: String, required: true, match: /^https?:\/\// },
});

module.exports = model('Accessory', schema);