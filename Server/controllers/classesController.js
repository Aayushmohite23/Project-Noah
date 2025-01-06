const Course = require("../models/Classes")

// Function to create a new course
exports.createClasses = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id

    // Get all required fields from request body
    let {
      coursesName,
      day,
      time,
      batchName
    } = req.body


    // Check if any of the required fields are missing
    if (
      !coursesName ||
      !day ||
      !time ||
      !batchName
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      })
    }
   
    const newClasses = await Classes.create({
        coursesName,
        day,
        time,
        batchName
    })

 
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}
