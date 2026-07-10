const ApiResponse = {
    constructor(
        statuscode,
        data,
        message = "success"
    ){
    this.statuscode = statuscode
    this.data = data
    this.message = message
    this.success = statscode < 400
    }
    
}

export{ApiResponse}






description: Edit access for App Versions
etag: BwZVcyhREEE=
includedPermissions:
- appengine.versions.create
- appengine.versions.delete
name: projects/qwiklabs-gcp-04-6372e5ed7056/roles/editor
stage: ALPHA
title: Role Editor