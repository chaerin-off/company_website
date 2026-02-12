const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            trim: true, //trim은 좌우 공백 삭제시켜주는 속성
            minLength: 2,
            maxLength: 30,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        isLoggedIn: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        failedLoginAttempts: {
            type: Number,
            default: 0,
        },
        lastLoginAttempt: {
            type: Date
        },
        ipAddress: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
//외부로 추출
module.exports = User;