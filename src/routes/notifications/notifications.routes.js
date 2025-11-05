const express = require('express');
const router = express.Router();

const controller = require('../../controllers/notifications.controller')

//creating notifications
router.post('/createNotification', controller.createNotifications)
//getting notifications
router.get('/getNotifications/:receiverUID',controller.getNotifications)
//updating notifications id
router.patch('/updateNotification/:notificationUID', controller.updateNotification);


module.exports = router;