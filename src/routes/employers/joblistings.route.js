const express = require('express');
const router = express.Router()

//controller
const controller = require('../../controllers/joblistings.controller')

//post jobs
router.post('/postJobs', controller.postJobs)

router.get('/getJobs', controller.getJobs)

// Update a job (using _id from params)
router.patch('/updateJobs/:jobUID', controller.updateJobs);

module.exports = router