import {AsyncHandler} from "../utils/AsyncHandler.js";
import {User} from "../models/user.model.js";
import {uploadCloudinary} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = AsyncHandler( async (req,res) => {

 // get user details from frontend 
 // validation - not empty
 // check if user already exists: username , email
 // check for imgaes, check for avatar
 // upload them to cloudnary
 // create user object - create entry in db
 // remove password and refresh token feed from response
 // check for user creation
 // return res

 const{fullname, email, password} = req.body
 console.log("fullname: ", fullname);

    //this is to check validation its an advance concept in js

if(
    [fullname,email,password].some( (field)=>
    field?.trim === "")
    
){
    throw new ApiError(400, "all feilds are required")
}

// this is a fn to check if user already exists
//it uses advance js concept 

const existedUser = User.findOne({
    $or: [{username}, {email}]
})
if(existedUser){
throw new ApiError(409, "User already exists");
}

//checking for avatar and images

const avatarLocalPath = req.files?.avatar[0]?.path;
const CoverImageLocalPath = req.files?.CoverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400, "avatar not found");
}

if(!CoverImageLocalPath){
    throw new ApiError(400, "avatar not found");
}

//now uploading those avatar and images on cloudinary

const avatar = await uploadCloudinary(avatarLocalPath);
const CoverImage = await uploadCloudinary(avatarLocalPath);

const User = User.create({
    username: username.toLowerCase(),
    avatar: avatar.url,
    CoverImage: CoverImage?.url,
    fullname,
    email,
    password
});

const createdUser = user.findbyId(user._id).select(
    "-password -refreshtoken"
)

if(!createdUser){
    throw new ApiError(500, "something went wrong while registering the suer");

}

return res.status(201).json(
    new ApiResponse(200, createdUser, "user registered successfuly")
)


})

export {
    registerUser,
}

