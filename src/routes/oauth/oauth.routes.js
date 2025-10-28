const express = require('express')
const router = express.Router();

//controller
const controller = require('../../controllers/oauth/oauth.controller');


//temporary
router.get('/test', controller.googleTest)

//auth
router.get('/google', controller.googlePopup)
router.get('/google/callback', controller.googleCallback)

//creating meeting
router.post('/google/createMeeting', controller.createMeeting)
module.exports = router