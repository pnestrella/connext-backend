const express = require('express');
const router = express.Router();

//controller
const controller = require('../../controllers/schedules/schedules.controller');

//creating schedules
router.post('/createSchedule', controller.createSchedule)
//editing/updating schedule
router.patch('/updateSchedule',controller.updateSchedule)
//getting schedules in a specific user
router.get('/getSchedulesByConversation/:conversationUID', controller.getSchedulesByConversation)

module.exports = router
