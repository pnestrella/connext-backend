// const {
//     employersModel
// } = require('../models/employers/employers.model')

const schedulesModel = require("../../models/schedules/schedules.model");


// Reusable function for creating schedules
async function createScheduleFunction(scheduleFields) {
    try {
        const newSchedule = new schedulesModel(scheduleFields);
        const savedSchedule = await newSchedule.save();
        console.log("Successfully saved the schedule: ", savedSchedule);
        return savedSchedule;
    } catch (error) {
        throw new Error(error);
    }
}

exports.createScheduleService = createScheduleFunction;



// Endpoint for creating schedules
exports.createSchedule = async (req, res) => {
    try {
        console.log("schedule created", req.body);
        const savedSchedule = await createScheduleFunction(req.body);
        res.status(200).json({
            success: true,
            message: 'Schedule created',
            data: savedSchedule
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.getSchedulesByConversation = async (req, res) => {
    try {
        console.log("Meow");
        console.log(req.params.conversationUID,'wawa');
        conversationUID = req.params.conversationUID
        const find = await schedulesModel.find({"conversationUID":conversationUID})

        console.log(find,'outpoo');
        res.status(200).json({success:true, message:find})


    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message || err
        });

    }
}


