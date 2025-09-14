const {
    mongoose
} = require('../../config/db')

const employersSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: function () {
            return this.employerUID
        }
    },
    employerUID: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    industries: {
        type: [String],
        default: null
    },
    profileSummary: {
        type: String
    },
    profilePic: {
        type: String,
        default: "https://ik.imagekit.io/mnv8wgsbk/Public%20Images/placeholder.png?updatedAt=1756757645263"
    },
    status: {
        type: Boolean,
        default: true
    }, // active/inactive
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
    hiredJS: {
        type: [String],
        default: []
    },
    accountIncomplete: {
        type: Boolean,
        default: true
    },
    verificationDocs: {
        type: [String]
    }, //an array of pathfiles
    verificationStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    role: {
        type: String,
        default: "employer"
    }
}, {
    timestamps: true
});


exports.employersModel = mongoose.model('employers', employersSchema)