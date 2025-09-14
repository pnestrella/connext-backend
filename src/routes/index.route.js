const express = require('express')
const router = express.Router()

//routes imports
const OTPRoute = require('./employers/OTP.route')
    //jobseekers
const jobseekersRoute = require('./jobseekers/jobseekers.route')

const applicationsRoute = require('./jobseekers/applications.route')

    //employers
const employersRoute = require('./employers/employers.route')
const imagekitRoute = require('./employers/imagekit.route')
    //job listings
const joblistingsRoute = require('./employers/joblistings.route')

//OTP Routes
router.use('/api/otp', OTPRoute)
//Jobseeekers Routes
router.use('/api/jobseekers',jobseekersRoute)
//Employers Routes
router.use('/api/employers',employersRoute)
//imageKit Routes
router.use('/api/employers/imagekit', imagekitRoute)
//Joblistings Routes
router.use('/api/joblistings',joblistingsRoute)
//Applications Routes
router.use('/api/applications', applicationsRoute)


module.exports = {router}