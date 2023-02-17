const { Bird, Trick } = require('../models')

const create = async (req, res) => {
  try {
    const bird = await Bird.create(req.body)
    res.status(200).json(bird)
  } catch (error) {
    console.log(err)
  }
}

const index = async (req, res) => {
  try {
    const birds = await Bird.findAll({
      include: [{ model: Trick, as: "tricks" }]
    })
    res.status(200).json(birds)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try{
    const bird = await Bird.findByPk(req.params.id)
    res.status(200).json(bird)
  } catch (error){
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const bird = await Bird.findByPk(req.params.id)
    bird.set(req.body)
    await bird.save()
    res.status(200).json(bird)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteBird = async (req, res) => {
  try {
    const bird = await Bird.findByPk(req.params.id)
    await bird.destroy()
    res.status(200).json(bird)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addTrick = async (req, res) => {
  try {
    req.body.birdId = req.params.id
    const trick = await Trick.create(req.body)
    res.status(200).json(trick)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteBird,
  addTrick
}