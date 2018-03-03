// const data = require('../../data.json');

module.exports = (req, res) => {
  const allUsers = { hello: 'ayy' };
  res.status(200).json({ allUsers });
};
