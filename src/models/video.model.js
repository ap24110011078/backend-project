import mongoose, {schema} from "MONGOOSE";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new schema(
    {
        videofile: {
            type: String, // cloudnary url
            required: true,
        },
        thumbnail: {
            type: true,  //cloudnary url
            required:true
        },
           title: {
            type: true,
            required:true
        },
           description: {
            type: true,
            required:true
        },
           duration: {
            type: Number, //cloudnary url
            required:true
        },
        views:{
            type: Number,
            default:0
        },
        ispublished:{
            type:Boolean,
            default: true
        },
        owner: {
             type:Schema.Types.ObjectId,
             ref:"User"
            }

},{timestamp: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)