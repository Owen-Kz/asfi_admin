const express = require("express");


const router = express.Router();
router.use(express.json())

router.get("/", (req,res)=>{
    res.render("admin-dashboard")
})

router.get("/admin/courses", (req,res) =>{
    res.render("admin-course-list")
})

router.get("/admin/courses/categories", (req,res) =>{
    res.render("admin-course-category")
})


router.get("/admin/course/details", (req,res) =>{
    res.render("admin-course-detail")
})

router.get("/admin/courses/create",(req,res)=>{
    res.render("admin-create-course")
})

router.get("/admin/courses/edit", (req,res)=>{
    res.render("admin-edit-course")
})

router.get("/admin/instructors/details", (req,res)=>{
    res.render("admin-instructor-details")
})

router.get("/admin/instructors", (Req,res)=>{
    res.render("admin-instructor-list")
})

router.get("/admin/instructors/requests", (req,res)=>{
    res.render("admin-instructor-requests")
})

router.get("/admin/review", (req,res)=>{
    res.render("admin-review")
})

router.get("/admin/scholars/details", (req,res)=>{
    res.render("admin-scholar-details")
})

router.get("/admin/scholars/requests", (req,res)=>{
    res.render("admin-scholar-request")
})

router.get("/admin/settings", (req,res)=>{
    res.render("admin-setting")
})

router.get("/admin/students", (req,res) =>{
    res.render("admin-students")
})

router.get("/admin/instructors/uploadRequests", (req,res)=>{
    res.render("InstructorUploadRequests")
})

router.get("/admin/scholars/uploadRequests", (req,res)=>{
    res.render("scholarUploadRequests")
})
router.get("/logout")

// SEND AN ERROR PAGE IF THE PAGE WASN'T FOUND
router.get('*', (req,res) => {
    res.status(404).render('error.ejs', {status: "Page doesn't exist"})
})


module.exports = router;