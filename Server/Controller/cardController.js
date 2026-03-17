const Card = require('../Model/Card')

async function PostCard(req, res) {
  try {
    const card = await Card.create(req.body)
    return res.status(201).json({ message: "Card created", id: card._id })
  } catch(err) {
    return res.status(500).json({ message: "Server error" })
  }
}

async function getCardById(req, res) {
  const id = req.params.id
  try {
    const card = await Card.findById(id)
    return res.status(200).json({ card : card })
  } catch(err) {
    console.log('Error', err)
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = { PostCard, getCardById }