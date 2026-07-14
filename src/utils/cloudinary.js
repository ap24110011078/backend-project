import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINAARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadCloudinary = async (localfilepath) => {
        try {
            if (!localfilepath) return null
            //upload the file on cloudinary
          const response = await  cloudinary.uploader.upload(localfilepath, {
                resource_type: "auto"
            })
            //file has been uploaded successfuly
            console.log("file uploaded on cloudinary", response.url)
            return response ;
        } catch (error) {
            fs.unlinkSync(localfilepath) // remove the locally save temporary file as the upload operation got failed
            return null;
        }
    }


   export {uploadCloudinary}