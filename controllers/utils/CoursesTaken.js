const db = require("../../routes/db.config");

const TotalCoursesTaken = async (req,res) =>{
    const username = req.params.username

    db.query("SELECT COUNT(*) AS CoursesTaken_count FROM applied_courses WHERE participants_username =?", [username], async (err,data)=>{
        if(err) throw err
        res.json({TotalCoursesTaken:new Number(data[0]["CoursesTaken_count"])})
    })
}


module.exports = TotalCoursesTaken