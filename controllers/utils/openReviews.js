const db = require("../../routes/db.config");

const OpenReviews = async (req,res) => {
    const ReviewId = req.params.reviewId
    db.query("SELECT * FROM course_reviews WHERE review_id =?", [ReviewId], async(err, data)=>{
        if(err) throw err
        res.json({status:"success", ourse_reviews_item:JSON.stringify(data)})
    })
}


module.exports =  OpenReviews