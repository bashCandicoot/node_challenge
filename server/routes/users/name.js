module.exports = (req, res) => {
  const name = { id: 1, first_name: 'Steve' };
  res.status(200).json({ name });
};
