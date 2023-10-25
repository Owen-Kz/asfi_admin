const db = require("../../routes/db.config");


let totalPages, totalReviewsCount;

const CourseReviews = async (req,res) =>{
    const CourseID = req.params.courseId
    const  ITEMS_PER_PAGE_Reviews = 6
        const SearchParameter = req.query.searchReview
  
// Get the current book page from the query parameter
let pageReviews = req.query.page || 1; 
const offsetReviews = (pageReviews - 1) * ITEMS_PER_PAGE_Reviews; 

    db.query("SELECT * FROM course_reviews WHERE course_id =? LIMIT ? OFFSET ?",
    [ CourseID, ITEMS_PER_PAGE_Reviews, offsetReviews], (err, data)=>{
        if(err) throw err
        var ReviewsCount = data.length
        
        totalReviewsCount = ReviewsCount;
        totalPages = Math.ceil(ReviewsCount / ITEMS_PER_PAGE_Reviews);

        res.json({status:"success",
        course_reviews:JSON.stringify(data),
        currentPageReviews:pageReviews,
        totalPagesReviews: totalPages,
        totalReviews: totalReviewsCount})
    })
}

module.exports = CourseReviews