
const courseID = document.getElementById("course_details")
const course_title_container = document.getElementById("course_title")
const course_description_container = document.getElementById("course_description")
const course_owner_fullname_container = document.getElementById("course_owner_fullname")
const course_owner_title_container = document.getElementById("course_owner_title")
const course_duration_container = document.getElementById("course_duration")
const total_students_container = document.getElementById("total_students")
const course_level_container = document.getElementById("course_level")
const total_lectures_container = document.getElementById("total_lectures")
const course_reviews_container = document.getElementById("course_reviews_container")
const owner_profile_picture = document.getElementById("owner_profile_picture")


fetch(`/getcoursedetails/${courseID.value}`, ()=>{
    method: "GET"
}).then(res => res.json())
.then(data => {
    const Course = JSON.parse(data.courseDetail)
    if(Course.length > 0){
        const course_title = Course[0].course_name
        const Course_Owner = Course[0].course_instructor
        const course_thumbnail = Course[0].course_thumbnail
        const course_category = Course[0].category
        const course_duration = Course[0].course_duration
        const course_description = Course[0].course_description
        const course_level = Course[0].course_level

        // Get the instructors info 
        fetch(`/users/${Course_Owner}`, ()=>{
            method: "GET"            
        }).then(res => res.json())
        .then(data => {
            const owner = JSON.parse(data.UserInfo)
            if(owner){
            const owner_first_name = owner[0].first_name
            const last_name = owner[0].last_name
            const Title = owner[0].title
            const prefix = owner[0].prefix
            const profilePic = owner[0].profile_picture
            
            course_title_container.innerHTML = `<span>${course_title}</span>`
            course_description_container.innerHTML = `<span>${course_description}</span>`
            course_level_container.innerHTML = `<span>${course_level}</span>`
            course_duration_container.innerHTML = `<span>${course_duration} </span>`
            course_owner_fullname_container.innerHTML = `<span>${prefix}. ${owner_first_name} ${last_name}`
            course_owner_title_container.innerHTML = `<span>${Title}</span>`
            owner_profile_picture.src = `https://asfi-demo-app-2cbea9ef1c2f.herokuapp.com/userUploads/profileImages/${profilePic}`
            }
       
        })
    }
})



// Get the Total Nnumber of Enrolled Students 
fetch(`/enrolledstudents/${courseID.value}`, ()=>{
    mehod:"GET"
}).then(res => res.json())
.then(data =>{
    const enrolledSTudentsCount = data.enrolledCount
})


// Get the Reviews for the course 
function CourseReviewPage(page) {
    fetch(`/courseReviews/${courseID.value}?page=${page}`, ()=>{
        method: "GET"
    }).then(res => res.json())
    .then(data =>{
        const Reviews = JSON.parse(data.course_reviews)
        if(Reviews.length > 0){
            Reviews.forEach(review => {
                const ReviewerUsername = review.reviewer_username
                const ReviewerFullname = review.reviewer_name
                
                const ReviewRating = review.review_rating

                // GEt Profile info For all Reviewers
                fetch(`/users/${ReviewerUsername}`, ()=>{
                    method: "GET"
                }).then(res => res.json())
                .then(data =>{
                    const ReviewerData = JSON.parse(data.UserInfo)
                    const ReviewerProfilePicture = ReviewerData[0].profile_picture

                })
            
            });
        }
    })
}

// CourseReviewPage(1)



// Get ReviewContent to show in the Modal when the View button is clicked
const ViewReviewForms = document.querySelectorAll(".reviewForm")

ViewReviewForms.forEach(form=>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault
        const ReviewID = form.querySelector("#review_id")

        fetch(`/openReview/${ReviewID.value}`,async ()=>{
            method:"GET"
        }).then(res => res.json)
        .then(data =>{
            const ReviewItem = JSON.parse(data.course_reviews_item)
            if(ReviewItem.length > 0){
                ReviewItem.forEach(review => {
                    const ReviewerUsername = review.reviewer_username
                    const ReviewerFullname = review.reviewer_name
                    const ReviewContent = review.reciew_content
                    const ReviewRetrievedId = review.review_id
                    // const ReviewerProfilePicture = review.reviewer_profile_picture
                    
                    const ReviewRating = review.review_rating
                    fetch(`/users/${ReviewerUsername}`, ()=>{
                        const ReviewerData = JSON.parse(data.UserInfo)
                        const ReviewerProfilePicture = ReviewerData[0].profile_picture    
                    })
                course_reviews_container.innerHTML += `<tr>
                <!-- Table data -->
                <td>
                    <div class="d-flex align-items-center position-relative">
                        <!-- Image -->
                        <div class="avatar avatar-xs mb-2 mb-md-0">
                            <img src="/assets/images/avatar/09.jpg" class="rounded-circle" alt="">
                        </div>
                        <div class="mb-0 ms-2">
                            <!-- Title -->
                            <h6 class="mb-0"><a href="#" class="stretched-link">${ReviewerFullname}</a></h6>
                        </div>
                    </div>
                </td>

                <!-- Table data -->
                <td>
                    <ul class="list-inline mb-0" data-count=${ReviewRating}>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                    </ul>
                </td>

                <!-- Table data -->
                <td>
                <form class='reviewForm'>
                <input type='hidden' value=${ReviewRetrievedId} readonly id=review_id/>
                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a></button>
                    </form>
                    <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0" data-bs-toggle="modal" data-bs-target="#deleteReview">Delete</button>
                </td>
            </tr>
`
                });
            }
        })
    })
})