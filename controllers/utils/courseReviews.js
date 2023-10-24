const db = require("../../routes/db.config");

const CourseReviews = async (req,res) =>{
    const CourseID = req.params.courseId
    const page = req.query.page

    db.query("SELECT * FROM course_reviews WHERE course_id", [CourseID], (err, data)=>{
        if(err) throw err
        res.json({status:"success", course_reviews:JSON.stringify(data)})
    })
}

module.exports = CourseReviews