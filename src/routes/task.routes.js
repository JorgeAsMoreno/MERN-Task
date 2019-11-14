const express = require('express')
const router = express.Router()

router.get('/', (req,res,next) => {
  res.json({
    status: 'API Works!'
  })
})

module.exports = router