const AsyncHandler = (asynchandler) => {
  return  (req , res , next) => {
        Promise.resolve(aynchandler(req, res, next)).catch((error) => next(error))
    }

}
















/*const asyncHandler = (func) => async(req, res, next)
{

    try {
       await func (req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            succes: false,
            message: error.message
        })

    }
}
*/






export{AsyncHandler};