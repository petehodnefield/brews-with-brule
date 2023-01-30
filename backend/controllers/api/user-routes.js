const router = require('express').Router();
const { User, Posts } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: {
            model: Posts,
            attributes: ['id', 'title', 'description']
          }
    })
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.get('/:id', (req, res) => {
    User.findOne({
        where: {id: req.params.id},
        attributes: { exclude: ['password'] },
        include: {
            model: Posts,
            attributes: ['id', 'title', 'description']
          }} )
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})
router.put('/:id', (req, res) => {
    User.update({username: req.body.username}, {where: {id: req.params.id}})
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router