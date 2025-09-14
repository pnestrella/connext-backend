const {
    mongoose
} = require('../../config/db')
const {
    nanoid
} = require('nanoid');


const joblistingsSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
    jobUID: {
        type: String,
        required: true,
        unique:true
    },
    employerUID: {
        type: String,
        required:true
    },
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    jobTitleVector: {
        type: Array,
    },
    jobNormalized: {
        type: String,
        default: ""
    },
    jobIndustry: {
        type: String
    },
    jobDescription: {
        type: String
    },

    jobSkills: {
        type: [String],
        default: []
    },
    location: {
        city: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        }, // was state
        country: {
            type: String,
            required: true
        }, // new field
        postalCode: {
            type: String,
            required: true
        },
    },
    employment: {
        type: [String],
        default: []
    }, // e.g., Full-time, Part-time
    workTypes: {
        type: [String],
        default: []
    }, // e.g., Remote, Onsite

    salaryRange: {
        min: Number,
        max: Number,
        currency: {
            type: String,
            default: 'PHP'
        },
        frequency: {
            type: String,
            default: 'month'
        },
    },

    jobNormalized: {
        type: String
    },

    profilePic: {
        type: String,
        default: 'https://ik.imagekit.io/mnv8wgsbk/Public%20Images/placeholder.png?updatedAt=1756757645263',
    },

    isExternal: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
})

exports.joblistingsModel = mongoose.model('job_listings', joblistingsSchema)