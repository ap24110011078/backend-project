import mongoose, {schema} from "MONGOOSE";
import jwt from "jasonwebtoken";
import bcrypt from "bcrypt";
const UserSchema = new Schema(
    {
       username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
       },
       email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
       },
        fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
       },
        avatar: {
        type: String,        //cloudnary url
        required: true,
       },
        CoverImage : {
        type: String,       
       },
        watcHistory : [ {
            type : Schema.Types.ObjectId,
            ref: "Video"
        } 
    ],
    password: {
        type:String,
        required: [true,"password is required"]
    },
    refreshtoken: {
        type: String
    },
},
{
    timestamps: true
}
)

UserSchema.pre("save", async function (next) {
    if(!this.ismodified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken = function(){
return jwt.sign(
        {
            id:this.id,
            username: this.username,
            fullname: this.fullname,
            email: this.fullname 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken = function(){
return jwt.sign(
        {
            id:this.id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",UserSchema)