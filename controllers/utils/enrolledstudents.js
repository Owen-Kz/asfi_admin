const db = require("../../routes/db.config");

const EnrolledStudents = async(req,res) =>{
    const CourseId = req.params.CourseId
    if(CourseId){
        db.query("SELECT COUNT(*) as enrolled_Students_count FROM applied_Courses WHERE course_id =?", [CourseId], async(err, data)=>{
            if(err) throw err
            const StudentsCount = data[0]["enrolled_Students_count"]
            res.json({status:"success", enrolledCount:StudentsCount})
        })
    }
}

module.exports = EnrolledStudents