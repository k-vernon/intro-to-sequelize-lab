const router = require('express').Router()
const birdsCtrl = require('../controllers/birds.js')
const bird = require('../models/bird.js')

router.post('/', birdsCtrl.create)
router.get('/', birdsCtrl.index)
router.get('/:id', birdsCtrl.show)
router.post('/:id/tricks', birdsCtrl.addTrick)
router.put('/:id', birdsCtrl.update)
router.delete('/:id', birdsCtrl.delete)


module.exports = router
