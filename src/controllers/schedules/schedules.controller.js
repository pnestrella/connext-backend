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


//editing schedule
//reusable editing schedule
async function updateScheduleFunction(meetingUID, updates) {
  try {
    console.log("🔧 Updating schedule by meetingUID:", meetingUID, updates);

    // Find the schedule by meetingUID and update it
    const updatedSchedule = await schedulesModel.findOneAndUpdate({
      meetingUID: meetingUID
    }, {
      $set: updates
    }, {
      new: true
    });

    if (!updatedSchedule) {
      throw new Error('Schedule not found');
    }

    return {
      success: true,
      message: 'Schedule updated successfully',
      data: updatedSchedule,
    };
  } catch (err) {
    console.error('❌ Error updating schedule:', err);
    return {
      success: false,
      message: err.message || 'Unknown error while updating schedule',
    };
  }
}


exports.updateScheduleFunction = updateScheduleFunction;

exports.updateSchedule = async (req, res) => {
  try {
    const {
      meetingUID
    } = req.params; // e.g. "90e3b071-3c48-41c9-ba22-3a32fd49d208"
    const updates = req.body;

    console.log("Updating schedule:", meetingUID, updates);

    // ✅ Correct usage: wrap meetingUID in an object
    const updatedSchedule = await schedulesModel.findOneAndUpdate({
        meetingUID: meetingUID
      }, // filter object
      {
        $set: updates
      }, {
        new: true
      }
    );

    if (!updatedSchedule) {
      return res.status(404).json({
        success: false,
        message: "Schedule not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Schedule updated successfully",
      data: updatedSchedule,
    });
  } catch (err) {
    console.error("Error updating schedule:", err);
    res.status(400).json({
      success: false,
      error: err.message || err,
    });
  }
};




//getting schedules by conversations
exports.getSchedulesByConversation = async (req, res) => {
  try {
    console.log("Meow");
    console.log(req.params.conversationUID, 'wawa');
    conversationUID = req.params.conversationUID
    const find = await schedulesModel.find({
      "conversationUID": conversationUID
    })
    res.status(200).json({
      success: true,
      message: find
    })


  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message || err
    });

  }
}