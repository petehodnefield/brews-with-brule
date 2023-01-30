const router = require('express').Router();
const { Friend } = require('../../models');

// Create friend
router.post('/', (req, res) => {
    Friend.create({
        user_id: req.body.user_id,
        username: req.body.username
    })
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Get all posts
router.get('/', (req, res) => {
    Friend.findAll({})
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Get post by ID
router.get('/:id', (req, res) => {
    Friend.findOne({where: {id: req.params.id}})
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Update post
router.put('/:id', (req, res) => {
    Friend.update({title: req.body.title, description: req.body.description}, {where: {id: req.params.id}})
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Delete post
router.delete('/:id', (req, res) => {
    Friend.destroy({where: {id: req.params.id}})
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router