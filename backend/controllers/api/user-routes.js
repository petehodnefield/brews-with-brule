const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({})
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.get('/:id', (req, res) => {
    User.findOne({where: {id: req.params.id}})
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
        name: req.body.name
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
    User.update({name: req.body.name}, {where: {id: req.params.id}})
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