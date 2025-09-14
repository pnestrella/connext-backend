const {
    mongoose
} = require('../../config/db')

const jobseekersSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: function () {
            return this.seekerUID
        }
    },
    seekerUID: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        firstName: String,
        middleInitial: String,
        lastName: String,
        suffix: String
    },
    industries: {
        type: [String],
        default: null
    },
    resume: {
        type: String,
        default: null
    },
    profileSummary: {
        type: String,
        default: "",
        maxlength: 750
    },
    skills: {
        type: [String],
        default: null
    },
    location: {
        type: {
            country: {
                type: String
            },
            province: {
                type: String
            },
            city: {
                type: String
            },
            postalCode: {
                type: String
            }
        },
        default: null
    },
    education: {
        type: {
            degree: {
                type: String,
                default: null
            }, 
            school: {
                type: String,
                default: null
            },
            status: {
                type: String,
                default: null
            }, 
            yearLevel: {
                type: Number,
                default: null
            }, 
            graduationYear: {
                type: Number,
                default: null
            }
        },
        default: null
    },

    highestLevelAttained: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    }, // active/inactive
    role: {
        type: String,
        default: "jobseeker"
    },
    skippedJobs: {
        type: [String],
        default: []
    },
    shortlistedJobs: [{
        _id: String,
        jobUID: String,
        score: Number,
        boostWeight: Number,
        jobTitle: String,
        jobPoster: String,
        location: {
            city: String,
            state: String,
        },
        salaryRange: {
            min: Number,
            max: Number,
            currency: String,
            frequency: String,
        },
        employment: [String],
        workTypes: [String],
        isExternal: Boolean,
        profilePic: String,
        feedback: {
            match_summary: String,
            skill_note: String,
            extra_note: String,
        },
    }],
    experience: {
        type: [String],
        default: []
    },
    certifications: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});


exports.jobseekersModel = mongoose.model('job_seekers', jobseekersSchema)