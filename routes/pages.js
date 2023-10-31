const express = require("express");
const LoggedIn = require("../controllers/loggedin");
const courseDetail = require("../controllers/utils/CourseDetails");
const UserInfo = require("../controllers/utils/userInfo");
const EnrolledStudents = require("../controllers/utils/enrolledstudents");
const CourseReviews = require("../controllers/utils/courseReviews");
const OpenReviews = require("../controllers/utils/openReviews");
const TotalActivatedCourses = require("../controllers/utils/totalActivatedCourses");
const TotalPendingCourses = require("../controllers/utils/totalPendingCourses");
const TotalCourses = require("../controllers/utils/totalCourses");
const courseList = require("../controllers/utils/courseList");
const ApproveCourses = require("../controllers/utils/approveCourses");
const RejectCourses = require("../controllers/utils/rejectCourse");
const DeleteCourses = require("../controllers/utils/deleteCourse");
const ScholarsList = require("../controllers/utils/ScholarsList");
const TotalBooks = require("../controllers/utils/TotalBooksScholars");
const TotalPodcasts = require("../controllers/utils/TotalPodcasts");
const TotalLinks = require("../controllers/utils/TotalLinks");
const TotalCoursesTaken = require("../controllers/utils/CoursesTaken");
const ScholarDetails = require("../controllers/utils/scholarDetails");
const ScholarDegrees = require("../controllers/utils/scholarDegress");
const AllResources = require("../controllers/utils/scholarResources");
const TotalResourcesCount = require("../controllers/utils/countResources");
const TotalActiveResources = require("../controllers/utils/countActiveResources");
const TotalPendingResources = require("../controllers/utils/countPendingResources");
const AdminResourcesMain = require("../controllers/utils/adminResourcesMain");
const SearchResources = require("../controllers/utils/searchResources");
const FilterResources = require("../controllers/utils/filterResources");
const ApproveItem = require("../controllers/utils/approveItem");
const RejectItem = require("../controllers/utils/rejectItem");
const DeleteItem = require("../controllers/utils/deleteItem");
const InstructorRequests = require("../controllers/utils/instructor/instructorRequests");
const ApproveInstructorAccount = require("../controllers/utils/instructor/ApproveInstructorAccount");
const RejectInstructorAccount = require("../controllers/utils/instructor/RejectInstructorAccount");


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

// COURSE DETAILS 
router.get("/admin/course/details/:courseId", (req,res) =>{
    const courseID = req.params.courseId
    res.render("admin-course-detail", {CourseID:courseID})
})
// feed data to the course Details Page 
router.get("/getcoursedetails/:courseId", courseDetail)
// Get user info 
router.get("/users/:username", UserInfo)
// Get Enrolled Students 
router.get("/enrolledstudents/:courseId", EnrolledStudents)
// GEt the course REviews 
router.get("/courseReviews/:courseId", CourseReviews)
// Open a Review and Read it 
router.get("/openReview/:reviewId", OpenReviews)
// END COURSE DETAILS 


// >>>>>> Courses PAGE 
router.get("/admin/getTotalActivatedCourses", TotalActivatedCourses)
router.get("/admin/getTotalPendingCourses", TotalPendingCourses)
router.get("/admin/getTotalCourses", TotalCourses)
router.get("/admin/getAllCourses", courseList)
router.post("/approveCourse", ApproveCourses)
router.post("/rejectCourse", RejectCourses)
router.post("/deleteCourse", DeleteCourses)
// >>>> ENd Course PAge 

router.get("/admin/courses/create",(req,res)=>{
    res.render("admin-create-course")
})

router.get("/admin/courses/edit/:courseId", (req,res)=>{
    res.render("admin-edit-course-detail")
})

router.get("/admin/instructors/details", (req,res)=>{
    res.render("admin-instructor-detail")
})

router.get("/admin/instructors", (Req,res)=>{
    res.render("admin-instructor-list")
})

router.get("/admin/instructors/requests", (req,res)=>{
    res.render("admin-instructor-request")
})

router.get("/admin/review", (req,res)=>{
    res.render("admin-review")
})

// SCHOLAR DETAILS 
router.get("/admin/scholars/details/:username", ScholarDetails)
router.get("/scholars/degrees/:username", ScholarDegrees)
router.get("/allResources/:username", AllResources)
router.get("/resources/totalResources", TotalResourcesCount)
router.get("/resources/active", TotalActiveResources)
router.get("/resources/pending", TotalPendingResources)
router.get("/getAllResources", AdminResourcesMain)
router.get("/myAssets/search/q/:searchQuery",  SearchResources)
router.get("/myAssets/search/type/:filterQuery", FilterResources)
router.get("/approveResource/:ItemType",ApproveItem )
router.get("/rejectResource/:ItemType", RejectItem)
router.get("/deleteResource/:ItemType", DeleteItem)

// END SCHOLAR DETAILS 

router.get("/admin/scholars/requests", (req,res)=>{
    res.render("/admin-scholar-request")
})

router.get("/admin/settings", (req,res)=>{
    res.render("admin-setting")
})



// Get scholars 
router.get("/admin/students", (req,res) =>{
    res.render("admin-student-list")
})

router.get("/admin/allScholars", ScholarsList)
router.get("/totalCourseTaken/scholar/:username", TotalCoursesTaken)
router.get("/totalBooks/:username", TotalBooks)
router.get("/totalPodcasts/:username", TotalPodcasts)
router.get("/totalLinks/:username", TotalLinks)
// END SCHOLARS 

// ISNTRUCTOR REQUESTS 
router.get("/admin/instructors/uploadRequests", (req,res)=>{
    res.render("InstructorUploadRequests")
})
router.get("/admin/instructors/account/requests", InstructorRequests)
router.post("/instructors/applications/accept/:username", ApproveInstructorAccount)
router.post("/instructors/applications/reject/:username", RejectInstructorAccount)

// END INSTUCTOR REQUESTS 

router.get("/admin/scholars/uploadRequests", (req,res)=>{
    res.render("scholarUploadRequests")
})

router.get("/admin/signin", (req,res)=>{
    res.render("sign-in")
})

router.get("/admin/signup", (req,res)=>{
    res.render("sign-up")
})

router.get("/admin/forgotPassword", (req,res)=>{
    res.render("forgot-password")
})
router.get("/logout")

// SEND AN ERROR PAGE IF THE PAGE WASN'T FOUND
router.get('*', (req,res) => {
    res.status(404).render('error.ejs', {status: "Page doesn't exist"})
})


module.exports = router;