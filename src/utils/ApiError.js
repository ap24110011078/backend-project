class APIError extends Error {
    constructor(
        statusCode,
        errors = [],
        message = "something went wrong",
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.stack = stack
        this.message = message
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {APIError}