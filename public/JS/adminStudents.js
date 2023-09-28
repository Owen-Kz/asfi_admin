// FIRSTNAME
var EDIT = document.getElementById("firstname_edit")


function EDIT_FIRSTNAME() {
    var EDIT = document.getElementById("firstname_edit")
    var FIRSTNAME_INPUT = document.getElementById("firstname_InputField")
    var FIRSTNAME_EDIT_CONTAINER = document.getElementById("editFirstNameContainer")
    var FIRSTNAME_SUBMIT = document.createElement("span")
    var FIRSTNAME_CANCEL = document.createElement("span")
    var FIRSTNAME_SUBMIT_ICON = document.createElement("i")
    var FIRSTNAME_CANCEL_ICON = document.createElement("i")

    FIRSTNAME_CANCEL.setAttribute("class", "cancelButton")
    FIRSTNAME_CANCEL.setAttribute("id", "firstname_cancel_edit")
    FIRSTNAME_CANCEL.setAttribute("onclick", "cancelFirstnameEdit()")
    FIRSTNAME_CANCEL.appendChild(FIRSTNAME_CANCEL_ICON)
    FIRSTNAME_CANCEL_ICON.innerHTML = "&times;"

    FIRSTNAME_INPUT.removeAttribute("readonly")

    FIRSTNAME_SUBMIT.setAttribute("class", "submitButton")
    FIRSTNAME_SUBMIT.setAttribute("onclick", "submitFirstname()")

    FIRSTNAME_SUBMIT.setAttribute("id", "firstname_submit_edit")
    FIRSTNAME_SUBMIT.appendChild(FIRSTNAME_SUBMIT_ICON)
    FIRSTNAME_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    FIRSTNAME_EDIT_CONTAINER.appendChild(FIRSTNAME_CANCEL)
    FIRSTNAME_EDIT_CONTAINER.appendChild(FIRSTNAME_SUBMIT)
    FIRSTNAME_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelFirstnameEdit() {
    var FIRSTNAME_INPUT = document.getElementById("firstname_InputField")
    var FIRSTNAME_EDIT_CONTAINER = document.getElementById("editFirstNameContainer")
    var FIRSTNAME_SUBMIT = document.getElementById("firstname_submit_edit")
    var FIRSTNAME_CANCEL = document.getElementById("firstname_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "firstname_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_FIRSTNAME()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    FIRSTNAME_INPUT.setAttribute("readonly", "true")

    FIRSTNAME_EDIT_CONTAINER.removeChild(FIRSTNAME_CANCEL)
    FIRSTNAME_EDIT_CONTAINER.removeChild(FIRSTNAME_SUBMIT)
    FIRSTNAME_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT FRISTNAME BUTTON
function submitFirstname(){
    $("#firstnameSubmit").trigger("click")
}


// LASTNAME
var EDIT = document.getElementById("lastname_edit")


function EDIT_LASTNAME() {
    var EDIT = document.getElementById("lastname_edit")
    var LASTNAME_INPUT = document.getElementById("lastname_InputField")
    var LASTNAME_EDIT_CONTAINER = document.getElementById("editLastNameContainer")
    var LASTNAME_SUBMIT = document.createElement("span")
    var LASTNAME_CANCEL = document.createElement("span")
    var LASTNAME_SUBMIT_ICON = document.createElement("i")
    var LASTNAME_CANCEL_ICON = document.createElement("i")

    LASTNAME_CANCEL.setAttribute("class", "cancelButton")
    LASTNAME_CANCEL.setAttribute("id", "lastname_cancel_edit")
    LASTNAME_CANCEL.setAttribute("onclick", "cancelLastnameEdit()")
    LASTNAME_CANCEL.appendChild(LASTNAME_CANCEL_ICON)
    LASTNAME_CANCEL_ICON.innerHTML = "&times;"

    LASTNAME_INPUT.removeAttribute("readonly")

    LASTNAME_SUBMIT.setAttribute("class", "submitButton")
    LASTNAME_SUBMIT.setAttribute("onclick", "submitLastname()")

    LASTNAME_SUBMIT.setAttribute("id", "lastname_submit_edit")
    LASTNAME_SUBMIT.appendChild(LASTNAME_SUBMIT_ICON)
    LASTNAME_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    LASTNAME_EDIT_CONTAINER.appendChild(LASTNAME_CANCEL)
    LASTNAME_EDIT_CONTAINER.appendChild(LASTNAME_SUBMIT)
    LASTNAME_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelLastnameEdit() {
    var LASTNAME_INPUT = document.getElementById("lastname_InputField")
    var LASTNAME_EDIT_CONTAINER = document.getElementById("editLastNameContainer")
    var LASTNAME_SUBMIT = document.getElementById("lastname_submit_edit")
    var LASTNAME_CANCEL = document.getElementById("lastname_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "lastname_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_LASTNAME()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    LASTNAME_INPUT.setAttribute("readonly", "true")

    LASTNAME_EDIT_CONTAINER.removeChild(LASTNAME_CANCEL)
    LASTNAME_EDIT_CONTAINER.removeChild(LASTNAME_SUBMIT)
    LASTNAME_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT LASTNAME BUTTON
function submitLastname(){
    $("#lastnameSubmit").trigger("click")
}


// OTHERNAME
var EDIT = document.getElementById("othername_edit")


function EDIT_OTHERNAME() {
    var EDIT = document.getElementById("othername_edit")
    var OTHERNAME_INPUT = document.getElementById("othername_InputField")
    var OTHERNAME_EDIT_CONTAINER = document.getElementById("editOtherNameContainer")
    var OTHERNAME_SUBMIT = document.createElement("span")
    var OTHERNAME_CANCEL = document.createElement("span")
    var OTHERNAME_SUBMIT_ICON = document.createElement("i")
    var OTHERNAME_CANCEL_ICON = document.createElement("i")

    OTHERNAME_CANCEL.setAttribute("class", "cancelButton")
    OTHERNAME_CANCEL.setAttribute("id", "othername_cancel_edit")
    OTHERNAME_CANCEL.setAttribute("onclick", "cancelOthernameEdit()")
    OTHERNAME_CANCEL.appendChild(OTHERNAME_CANCEL_ICON)
    OTHERNAME_CANCEL_ICON.innerHTML = "&times;"

    OTHERNAME_INPUT.removeAttribute("readonly")

    OTHERNAME_SUBMIT.setAttribute("class", "submitButton")
    OTHERNAME_SUBMIT.setAttribute("onclick", "submitOthername()")

    OTHERNAME_SUBMIT.setAttribute("id", "othername_submit_edit")
    OTHERNAME_SUBMIT.appendChild(OTHERNAME_SUBMIT_ICON)
    OTHERNAME_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    OTHERNAME_EDIT_CONTAINER.appendChild(OTHERNAME_CANCEL)
    OTHERNAME_EDIT_CONTAINER.appendChild(OTHERNAME_SUBMIT)
    OTHERNAME_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelOthernameEdit() {
    var OTHERNAME_INPUT = document.getElementById("othername_InputField")
    var OTHERNAME_EDIT_CONTAINER = document.getElementById("editOtherNameContainer")
    var OTHERNAME_SUBMIT = document.getElementById("othername_submit_edit")
    var OTHERNAME_CANCEL = document.getElementById("othername_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "othername_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_OTHERNAME()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    OTHERNAME_INPUT.setAttribute("readonly", "true")

    OTHERNAME_EDIT_CONTAINER.removeChild(OTHERNAME_CANCEL)
    OTHERNAME_EDIT_CONTAINER.removeChild(OTHERNAME_SUBMIT)
    OTHERNAME_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT OTHERNAME BUTTON
function submitOthername(){
    $("#othernameSubmit").trigger("click")
}


// DATEOFBIRTH
var EDIT = document.getElementById("dateofbirth_edit")


function EDIT_DATEOFBIRTH() {
    var EDIT = document.getElementById("dateofbirth_edit")
    var DATEOFBIRTH_INPUT = document.getElementById("dateofbirth_InputField")
    var DATEOFBIRTH_EDIT_CONTAINER = document.getElementById("editDateofBirthContainer")
    var DATEOFBIRTH_SUBMIT = document.createElement("span")
    var DATEOFBIRTH_CANCEL = document.createElement("span")
    var DATEOFBIRTH_SUBMIT_ICON = document.createElement("i")
    var DATEOFBIRTH_CANCEL_ICON = document.createElement("i")

    DATEOFBIRTH_CANCEL.setAttribute("class", "cancelButton")
    DATEOFBIRTH_CANCEL.setAttribute("id", "dateofbirth_cancel_edit")
    DATEOFBIRTH_CANCEL.setAttribute("onclick", "cancelDateofbirthEdit()")
    DATEOFBIRTH_CANCEL.appendChild(DATEOFBIRTH_CANCEL_ICON)
    DATEOFBIRTH_CANCEL_ICON.innerHTML = "&times;"

    DATEOFBIRTH_INPUT.removeAttribute("readonly")

    DATEOFBIRTH_SUBMIT.setAttribute("class", "submitButton")
    DATEOFBIRTH_SUBMIT.setAttribute("onclick", "submitDateofbirth()")

    DATEOFBIRTH_SUBMIT.setAttribute("id", "dateofbirth_submit_edit")
    DATEOFBIRTH_SUBMIT.appendChild(DATEOFBIRTH_SUBMIT_ICON)
    DATEOFBIRTH_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    DATEOFBIRTH_EDIT_CONTAINER.appendChild(DATEOFBIRTH_CANCEL)
    DATEOFBIRTH_EDIT_CONTAINER.appendChild(DATEOFBIRTH_SUBMIT)
    DATEOFBIRTH_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelDateofbirthEdit() {
    var DATEOFBIRTH_INPUT = document.getElementById("dateofbirth_InputField")
    var DATEOFBIRTH_EDIT_CONTAINER = document.getElementById("editDateofBirthContainer")
    var DATEOFBIRTH_SUBMIT = document.getElementById("dateofbirth_submit_edit")
    var DATEOFBIRTH_CANCEL = document.getElementById("dateofbirth_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "dateofbirth_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_DATEOFBIRTH()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    DATEOFBIRTH_INPUT.setAttribute("readonly", "true")

    DATEOFBIRTH_EDIT_CONTAINER.removeChild(DATEOFBIRTH_CANCEL)
    DATEOFBIRTH_EDIT_CONTAINER.removeChild(DATEOFBIRTH_SUBMIT)
    DATEOFBIRTH_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT DATEOFBIRTH BUTTON
function submitDateofbirth(){
    $("#dateofbirthSubmit").trigger("click")
}


// EMAIL
var EDIT = document.getElementById("email_edit")


function EDIT_EMAIL() {
    var EDIT = document.getElementById("email_edit")
    var EMAIL_INPUT = document.getElementById("email_InputField")
    var EMAIL_EDIT_CONTAINER = document.getElementById("editEmailContainer")
    var EMAIL_SUBMIT = document.createElement("span")
    var EMAIL_CANCEL = document.createElement("span")
    var EMAIL_SUBMIT_ICON = document.createElement("i")
    var EMAIL_CANCEL_ICON = document.createElement("i")

    EMAIL_CANCEL.setAttribute("class", "cancelButton")
    EMAIL_CANCEL.setAttribute("id", "email_cancel_edit")
    EMAIL_CANCEL.setAttribute("onclick", "cancelEmailEdit()")
    EMAIL_CANCEL.appendChild(EMAIL_CANCEL_ICON)
    EMAIL_CANCEL_ICON.innerHTML = "&times;"

    EMAIL_INPUT.removeAttribute("readonly")

    EMAIL_SUBMIT.setAttribute("class", "submitButton")
    EMAIL_SUBMIT.setAttribute("onclick", "submitEmail()")

    EMAIL_SUBMIT.setAttribute("id", "email_submit_edit")
    EMAIL_SUBMIT.appendChild(EMAIL_SUBMIT_ICON)
    EMAIL_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    EMAIL_EDIT_CONTAINER.appendChild(EMAIL_CANCEL)
    EMAIL_EDIT_CONTAINER.appendChild(EMAIL_SUBMIT)
    EMAIL_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelEmailEdit() {
    var EMAIL_INPUT = document.getElementById("email_InputField")
    var EMAIL_EDIT_CONTAINER = document.getElementById("editEmailContainer")
    var EMAIL_SUBMIT = document.getElementById("email_submit_edit")
    var EMAIL_CANCEL = document.getElementById("email_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "email_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_EMAIL()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    EMAIL_INPUT.setAttribute("readonly", "true")

    EMAIL_EDIT_CONTAINER.removeChild(EMAIL_CANCEL)
    EMAIL_EDIT_CONTAINER.removeChild(EMAIL_SUBMIT)
    EMAIL_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT EMAIL BUTTON
function submitEmail(){
    $("#emailSubmit").trigger("click")
}


// PHONENUMBER
var EDIT = document.getElementById("phonenumber_edit")


function EDIT_PHONENUMBER() {
    var EDIT = document.getElementById("phonenumber_edit")
    var PHONENUMBER_INPUT = document.getElementById("phonenumber_InputField")
    var PHONENUMBER_EDIT_CONTAINER = document.getElementById("editPhonenumberContainer")
    var PHONENUMBER_SUBMIT = document.createElement("span")
    var PHONENUMBER_CANCEL = document.createElement("span")
    var PHONENUMBER_SUBMIT_ICON = document.createElement("i")
    var PHONENUMBER_CANCEL_ICON = document.createElement("i")

    PHONENUMBER_CANCEL.setAttribute("class", "cancelButton")
    PHONENUMBER_CANCEL.setAttribute("id", "phonenumber_cancel_edit")
    PHONENUMBER_CANCEL.setAttribute("onclick", "cancelPhonenumberEdit()")
    PHONENUMBER_CANCEL.appendChild(PHONENUMBER_CANCEL_ICON)
    PHONENUMBER_CANCEL_ICON.innerHTML = "&times;"

    PHONENUMBER_INPUT.removeAttribute("readonly")

    PHONENUMBER_SUBMIT.setAttribute("class", "submitButton")
    PHONENUMBER_SUBMIT.setAttribute("onclick", "submitPhonenumber()")

    PHONENUMBER_SUBMIT.setAttribute("id", "phonenumber_submit_edit")
    PHONENUMBER_SUBMIT.appendChild(PHONENUMBER_SUBMIT_ICON)
    PHONENUMBER_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    PHONENUMBER_EDIT_CONTAINER.appendChild(PHONENUMBER_CANCEL)
    PHONENUMBER_EDIT_CONTAINER.appendChild(PHONENUMBER_SUBMIT)
    PHONENUMBER_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelPhonenumberEdit() {
    var PHONENUMBER_INPUT = document.getElementById("phonenumber_InputField")
    var PHONENUMBER_EDIT_CONTAINER = document.getElementById("editPhonenumberContainer")
    var PHONENUMBER_SUBMIT = document.getElementById("phonenumber_submit_edit")
    var PHONENUMBER_CANCEL = document.getElementById("phonenumber_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "phonenumber_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_PHONENUMBER()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    PHONENUMBER_INPUT.setAttribute("readonly", "true")

    PHONENUMBER_EDIT_CONTAINER.removeChild(PHONENUMBER_CANCEL)
    PHONENUMBER_EDIT_CONTAINER.removeChild(PHONENUMBER_SUBMIT)
    PHONENUMBER_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT PHONENUMBER BUTTON
function submitPhonenumber(){
    $("#phonenumberSubmit").trigger("click")
}


// NATIONALITY
var EDIT = document.getElementById("nationality_edit")


function EDIT_NATIONALITY() {
    var EDIT = document.getElementById("nationality_edit")
    var NATIONALITY_INPUT = document.getElementById("nationality_InputField")
    var NATIONALITY_EDIT_CONTAINER = document.getElementById("editNationalityContainer")
    var NATIONALITY_SUBMIT = document.createElement("span")
    var NATIONALITY_CANCEL = document.createElement("span")
    var NATIONALITY_SUBMIT_ICON = document.createElement("i")
    var NATIONALITY_CANCEL_ICON = document.createElement("i")

    NATIONALITY_CANCEL.setAttribute("class", "cancelButton")
    NATIONALITY_CANCEL.setAttribute("id", "nationality_cancel_edit")
    NATIONALITY_CANCEL.setAttribute("onclick", "cancelNationalityEdit()")
    NATIONALITY_CANCEL.appendChild(NATIONALITY_CANCEL_ICON)
    NATIONALITY_CANCEL_ICON.innerHTML = "&times;"

    NATIONALITY_INPUT.removeAttribute("readonly")

    NATIONALITY_SUBMIT.setAttribute("class", "submitButton")
    NATIONALITY_SUBMIT.setAttribute("onclick", "submitNationality()")

    NATIONALITY_SUBMIT.setAttribute("id", "nationality_submit_edit")
    NATIONALITY_SUBMIT.appendChild(NATIONALITY_SUBMIT_ICON)
    NATIONALITY_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    NATIONALITY_EDIT_CONTAINER.appendChild(NATIONALITY_CANCEL)
    NATIONALITY_EDIT_CONTAINER.appendChild(NATIONALITY_SUBMIT)
    NATIONALITY_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelNationalityEdit() {
    var NATIONALITY_INPUT = document.getElementById("nationality_InputField")
    var NATIONALITY_EDIT_CONTAINER = document.getElementById("editNationalityContainer")
    var NATIONALITY_SUBMIT = document.getElementById("nationality_submit_edit")
    var NATIONALITY_CANCEL = document.getElementById("nationality_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "nationality_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_NATIONALITY()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    NATIONALITY_INPUT.setAttribute("readonly", "true")

    NATIONALITY_EDIT_CONTAINER.removeChild(NATIONALITY_CANCEL)
    NATIONALITY_EDIT_CONTAINER.removeChild(NATIONALITY_SUBMIT)
    NATIONALITY_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT NATIONALITY BUTTON
function submitNationality(){
    $("#nationalitySubmit").trigger("click")
}

// COURSE
var EDIT = document.getElementById("course_edit")


function EDIT_COURSE() {
    var EDIT = document.getElementById("course_edit")
    var COURSE_INPUT = document.getElementById("course_InputField")
    var COURSE_EDIT_CONTAINER = document.getElementById("editCourseContainer")
    var COURSE_SUBMIT = document.createElement("span")
    var COURSE_CANCEL = document.createElement("span")
    var COURSE_SUBMIT_ICON = document.createElement("i")
    var COURSE_CANCEL_ICON = document.createElement("i")

    COURSE_CANCEL.setAttribute("class", "cancelButton")
    COURSE_CANCEL.setAttribute("id", "course_cancel_edit")
    COURSE_CANCEL.setAttribute("onclick", "cancelCourseEdit()")
    COURSE_CANCEL.appendChild(COURSE_CANCEL_ICON)
    COURSE_CANCEL_ICON.innerHTML = "&times;"

    COURSE_INPUT.removeAttribute("readonly")

    COURSE_SUBMIT.setAttribute("class", "submitButton")
    COURSE_SUBMIT.setAttribute("onclick", "submitCourse()")

    COURSE_SUBMIT.setAttribute("id", "course_submit_edit")
    COURSE_SUBMIT.appendChild(COURSE_SUBMIT_ICON)
    COURSE_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    COURSE_EDIT_CONTAINER.appendChild(COURSE_CANCEL)
    COURSE_EDIT_CONTAINER.appendChild(COURSE_SUBMIT)
    COURSE_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelCourseEdit() {
    var COURSE_INPUT = document.getElementById("course_InputField")
    var COURSE_EDIT_CONTAINER = document.getElementById("editCourseContainer")
    var COURSE_SUBMIT = document.getElementById("course_submit_edit")
    var COURSE_CANCEL = document.getElementById("course_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "course_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_COURSE()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    COURSE_INPUT.setAttribute("readonly", "true")

    COURSE_EDIT_CONTAINER.removeChild(COURSE_CANCEL)
    COURSE_EDIT_CONTAINER.removeChild(COURSE_SUBMIT)
    COURSE_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT COURSE BUTTON
function submitCourse(){
    $("#courseSubmit").trigger("click")
}


// COURSEID
var EDIT = document.getElementById("courseid_edit")


function EDIT_COURSEID() {
    var EDIT = document.getElementById("courseid_edit")
    var COURSEID_INPUT = document.getElementById("courseid_InputField")
    var COURSEID_EDIT_CONTAINER = document.getElementById("editCourseidContainer")
    var COURSEID_SUBMIT = document.createElement("span")
    var COURSEID_CANCEL = document.createElement("span")
    var COURSEID_SUBMIT_ICON = document.createElement("i")
    var COURSEID_CANCEL_ICON = document.createElement("i")

    COURSEID_CANCEL.setAttribute("class", "cancelButton")
    COURSEID_CANCEL.setAttribute("id", "courseid_cancel_edit")
    COURSEID_CANCEL.setAttribute("onclick", "cancelCourseidEdit()")
    COURSEID_CANCEL.appendChild(COURSEID_CANCEL_ICON)
    COURSEID_CANCEL_ICON.innerHTML = "&times;"

    COURSEID_INPUT.removeAttribute("readonly")

    COURSEID_SUBMIT.setAttribute("class", "submitButton")
    COURSEID_SUBMIT.setAttribute("onclick", "submitCourseid()")

    COURSEID_SUBMIT.setAttribute("id", "courseid_submit_edit")
    COURSEID_SUBMIT.appendChild(COURSEID_SUBMIT_ICON)
    COURSEID_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    COURSEID_EDIT_CONTAINER.appendChild(COURSEID_CANCEL)
    COURSEID_EDIT_CONTAINER.appendChild(COURSEID_SUBMIT)
    COURSEID_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelCourseidEdit() {
    var COURSEID_INPUT = document.getElementById("courseid_InputField")
    var COURSEID_EDIT_CONTAINER = document.getElementById("editCourseidContainer")
    var COURSEID_SUBMIT = document.getElementById("courseid_submit_edit")
    var COURSEID_CANCEL = document.getElementById("courseid_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "courseid_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_COURSEID()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    COURSEID_INPUT.setAttribute("readonly", "true")

    COURSEID_EDIT_CONTAINER.removeChild(COURSEID_CANCEL)
    COURSEID_EDIT_CONTAINER.removeChild(COURSEID_SUBMIT)
    COURSEID_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT COURSEID BUTTON
function submitCourseid(){
    $("#courseidSubmit").trigger("click")
}


// YEAROFENTRY
var EDIT = document.getElementById("yearofentry_edit")


function EDIT_YEAROFENTRY() {
    var EDIT = document.getElementById("yearofentry_edit")
    var YEAROFENTRY_INPUT = document.getElementById("yearofentry_InputField")
    var YEAROFENTRY_EDIT_CONTAINER = document.getElementById("editYearofEntryContainer")
    var YEAROFENTRY_SUBMIT = document.createElement("span")
    var YEAROFENTRY_CANCEL = document.createElement("span")
    var YEAROFENTRY_SUBMIT_ICON = document.createElement("i")
    var YEAROFENTRY_CANCEL_ICON = document.createElement("i")

    YEAROFENTRY_CANCEL.setAttribute("class", "cancelButton")
    YEAROFENTRY_CANCEL.setAttribute("id", "yearofentry_cancel_edit")
    YEAROFENTRY_CANCEL.setAttribute("onclick", "cancelYearofentryEdit()")
    YEAROFENTRY_CANCEL.appendChild(YEAROFENTRY_CANCEL_ICON)
    YEAROFENTRY_CANCEL_ICON.innerHTML = "&times;"

    YEAROFENTRY_INPUT.removeAttribute("readonly")

    YEAROFENTRY_SUBMIT.setAttribute("class", "submitButton")
    YEAROFENTRY_SUBMIT.setAttribute("onclick", "submitYearofentry()")

    YEAROFENTRY_SUBMIT.setAttribute("id", "yearofentry_submit_edit")
    YEAROFENTRY_SUBMIT.appendChild(YEAROFENTRY_SUBMIT_ICON)
    YEAROFENTRY_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    YEAROFENTRY_EDIT_CONTAINER.appendChild(YEAROFENTRY_CANCEL)
    YEAROFENTRY_EDIT_CONTAINER.appendChild(YEAROFENTRY_SUBMIT)
    YEAROFENTRY_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelYearofentryEdit() {
    var YEAROFENTRY_INPUT = document.getElementById("yearofentry_InputField")
    var YEAROFENTRY_EDIT_CONTAINER = document.getElementById("editYearofEntryContainer")
    var YEAROFENTRY_SUBMIT = document.getElementById("yearofentry_submit_edit")
    var YEAROFENTRY_CANCEL = document.getElementById("yearofentry_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "yearofentry_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_YEAROFENTRY()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    YEAROFENTRY_INPUT.setAttribute("readonly", "true")

    YEAROFENTRY_EDIT_CONTAINER.removeChild(YEAROFENTRY_CANCEL)
    YEAROFENTRY_EDIT_CONTAINER.removeChild(YEAROFENTRY_SUBMIT)
    YEAROFENTRY_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT YEAROFENTRY BUTTON
function submitYearofentry(){
    $("#yearofentrySubmit").trigger("click")
}

// COURSEDURATION
var EDIT = document.getElementById("courseduration_edit")


function EDIT_COURSEDURATION() {
    var EDIT = document.getElementById("courseduration_edit")
    var COURSEDURATION_INPUT = document.getElementById("courseduration_InputField")
    var COURSEDURATION_EDIT_CONTAINER = document.getElementById("editCoursedurationContainer")
    var COURSEDURATION_SUBMIT = document.createElement("span")
    var COURSEDURATION_CANCEL = document.createElement("span")
    var COURSEDURATION_SUBMIT_ICON = document.createElement("i")
    var COURSEDURATION_CANCEL_ICON = document.createElement("i")

    COURSEDURATION_CANCEL.setAttribute("class", "cancelButton")
    COURSEDURATION_CANCEL.setAttribute("id", "courseduration_cancel_edit")
    COURSEDURATION_CANCEL.setAttribute("onclick", "cancelCoursedurationEdit()")
    COURSEDURATION_CANCEL.appendChild(COURSEDURATION_CANCEL_ICON)
    COURSEDURATION_CANCEL_ICON.innerHTML = "&times;"

    COURSEDURATION_INPUT.removeAttribute("readonly")

    COURSEDURATION_SUBMIT.setAttribute("class", "submitButton")
    COURSEDURATION_SUBMIT.setAttribute("onclick", "submitCourseduration()")

    COURSEDURATION_SUBMIT.setAttribute("id", "courseduration_submit_edit")
    COURSEDURATION_SUBMIT.appendChild(COURSEDURATION_SUBMIT_ICON)
    COURSEDURATION_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    COURSEDURATION_EDIT_CONTAINER.appendChild(COURSEDURATION_CANCEL)
    COURSEDURATION_EDIT_CONTAINER.appendChild(COURSEDURATION_SUBMIT)
    COURSEDURATION_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelCoursedurationEdit() {
    var COURSEDURATION_INPUT = document.getElementById("courseduration_InputField")
    var COURSEDURATION_EDIT_CONTAINER = document.getElementById("editCoursedurationContainer")
    var COURSEDURATION_SUBMIT = document.getElementById("courseduration_submit_edit")
    var COURSEDURATION_CANCEL = document.getElementById("courseduration_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "courseduration_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_COURSEDURATION()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    COURSEDURATION_INPUT.setAttribute("readonly", "true")

    COURSEDURATION_EDIT_CONTAINER.removeChild(COURSEDURATION_CANCEL)
    COURSEDURATION_EDIT_CONTAINER.removeChild(COURSEDURATION_SUBMIT)
    COURSEDURATION_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT COURSEDURATION BUTTON
function submitCourseduration(){
    $("#coursedurationSubmit").trigger("click")
}


// INSTRUCTORS 
// MONTHLYINCOME
var EDIT = document.getElementById("monthlyincome_edit")


function EDIT_MONTHLYINCOME() {
    var EDIT = document.getElementById("monthlyincome_edit")
    var MONTHLYINCOME_INPUT = document.getElementById("monthlyincome_InputField")
    var MONTHLYINCOME_EDIT_CONTAINER = document.getElementById("editMonthlyincomeContainer")
    var MONTHLYINCOME_SUBMIT = document.createElement("span")
    var MONTHLYINCOME_CANCEL = document.createElement("span")
    var MONTHLYINCOME_SUBMIT_ICON = document.createElement("i")
    var MONTHLYINCOME_CANCEL_ICON = document.createElement("i")

    MONTHLYINCOME_CANCEL.setAttribute("class", "cancelButton")
    MONTHLYINCOME_CANCEL.setAttribute("id", "monthlyincome_cancel_edit")
    MONTHLYINCOME_CANCEL.setAttribute("onclick", "cancelMonthlyincomeEdit()")
    MONTHLYINCOME_CANCEL.appendChild(MONTHLYINCOME_CANCEL_ICON)
    MONTHLYINCOME_CANCEL_ICON.innerHTML = "&times;"

    MONTHLYINCOME_INPUT.removeAttribute("readonly")

    MONTHLYINCOME_SUBMIT.setAttribute("class", "submitButton")
    MONTHLYINCOME_SUBMIT.setAttribute("onclick", "submitMonthlyincome()")

    MONTHLYINCOME_SUBMIT.setAttribute("id", "monthlyincome_submit_edit")
    MONTHLYINCOME_SUBMIT.appendChild(MONTHLYINCOME_SUBMIT_ICON)
    MONTHLYINCOME_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    MONTHLYINCOME_EDIT_CONTAINER.appendChild(MONTHLYINCOME_CANCEL)
    MONTHLYINCOME_EDIT_CONTAINER.appendChild(MONTHLYINCOME_SUBMIT)
    MONTHLYINCOME_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelMonthlyincomeEdit() {
    var MONTHLYINCOME_INPUT = document.getElementById("monthlyincome_InputField")
    var MONTHLYINCOME_EDIT_CONTAINER = document.getElementById("editMonthlyincomeContainer")
    var MONTHLYINCOME_SUBMIT = document.getElementById("monthlyincome_submit_edit")
    var MONTHLYINCOME_CANCEL = document.getElementById("monthlyincome_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "monthlyincome_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_MONTHLYINCOME()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    MONTHLYINCOME_INPUT.setAttribute("readonly", "true")

    MONTHLYINCOME_EDIT_CONTAINER.removeChild(MONTHLYINCOME_CANCEL)
    MONTHLYINCOME_EDIT_CONTAINER.removeChild(MONTHLYINCOME_SUBMIT)
    MONTHLYINCOME_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT MONTHLYINCOME BUTTON
function submitMonthlyincome(){
    $("#monthlyincomeSubmit").trigger("click")
}


// ADDRESS
var EDIT = document.getElementById("address_edit")


function EDIT_ADDRESS() {
    var EDIT = document.getElementById("address_edit")
    var ADDRESS_INPUT = document.getElementById("address_InputField")
    var ADDRESS_EDIT_CONTAINER = document.getElementById("editAddressContainer")
    var ADDRESS_SUBMIT = document.createElement("span")
    var ADDRESS_CANCEL = document.createElement("span")
    var ADDRESS_SUBMIT_ICON = document.createElement("i")
    var ADDRESS_CANCEL_ICON = document.createElement("i")

    ADDRESS_CANCEL.setAttribute("class", "cancelButton")
    ADDRESS_CANCEL.setAttribute("id", "address_cancel_edit")
    ADDRESS_CANCEL.setAttribute("onclick", "cancelAddressEdit()")
    ADDRESS_CANCEL.appendChild(ADDRESS_CANCEL_ICON)
    ADDRESS_CANCEL_ICON.innerHTML = "&times;"

    ADDRESS_INPUT.removeAttribute("readonly")

    ADDRESS_SUBMIT.setAttribute("class", "submitButton")
    ADDRESS_SUBMIT.setAttribute("onclick", "submitAddress()")

    ADDRESS_SUBMIT.setAttribute("id", "address_submit_edit")
    ADDRESS_SUBMIT.appendChild(ADDRESS_SUBMIT_ICON)
    ADDRESS_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    ADDRESS_EDIT_CONTAINER.appendChild(ADDRESS_CANCEL)
    ADDRESS_EDIT_CONTAINER.appendChild(ADDRESS_SUBMIT)
    ADDRESS_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelAddressEdit() {
    var ADDRESS_INPUT = document.getElementById("address_InputField")
    var ADDRESS_EDIT_CONTAINER = document.getElementById("editAddressContainer")
    var ADDRESS_SUBMIT = document.getElementById("address_submit_edit")
    var ADDRESS_CANCEL = document.getElementById("address_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "address_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_ADDRESS()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    ADDRESS_INPUT.setAttribute("readonly", "true")

    ADDRESS_EDIT_CONTAINER.removeChild(ADDRESS_CANCEL)
    ADDRESS_EDIT_CONTAINER.removeChild(ADDRESS_SUBMIT)
    ADDRESS_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT ADDRESS BUTTON
function submitAddress(){
    $("#addressSubmit").trigger("click")
}


// LGA
var EDIT = document.getElementById("lga_edit")


function EDIT_LGA() {
    var EDIT = document.getElementById("lga_edit")
    var LGA_INPUT = document.getElementById("lga_InputField")
    var LGA_EDIT_CONTAINER = document.getElementById("editLgaContainer")
    var LGA_SUBMIT = document.createElement("span")
    var LGA_CANCEL = document.createElement("span")
    var LGA_SUBMIT_ICON = document.createElement("i")
    var LGA_CANCEL_ICON = document.createElement("i")

    LGA_CANCEL.setAttribute("class", "cancelButton")
    LGA_CANCEL.setAttribute("id", "lga_cancel_edit")
    LGA_CANCEL.setAttribute("onclick", "cancelLgaEdit()")
    LGA_CANCEL.appendChild(LGA_CANCEL_ICON)
    LGA_CANCEL_ICON.innerHTML = "&times;"

    LGA_INPUT.removeAttribute("readonly")

    LGA_SUBMIT.setAttribute("class", "submitButton")
    LGA_SUBMIT.setAttribute("onclick", "submitLga()")

    LGA_SUBMIT.setAttribute("id", "lga_submit_edit")
    LGA_SUBMIT.appendChild(LGA_SUBMIT_ICON)
    LGA_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    LGA_EDIT_CONTAINER.appendChild(LGA_CANCEL)
    LGA_EDIT_CONTAINER.appendChild(LGA_SUBMIT)
    LGA_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelLgaEdit() {
    var LGA_INPUT = document.getElementById("lga_InputField")
    var LGA_EDIT_CONTAINER = document.getElementById("editLgaContainer")
    var LGA_SUBMIT = document.getElementById("lga_submit_edit")
    var LGA_CANCEL = document.getElementById("lga_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "lga_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_LGA()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    LGA_INPUT.setAttribute("readonly", "true")

    LGA_EDIT_CONTAINER.removeChild(LGA_CANCEL)
    LGA_EDIT_CONTAINER.removeChild(LGA_SUBMIT)
    LGA_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT LGA BUTTON
function submitLga(){
    $("#lgaSubmit").trigger("click")
}


// NEXTOFKIN
var EDIT = document.getElementById("nextofkin_edit")


function EDIT_NEXTOFKIN() {
    var EDIT = document.getElementById("nextofkin_edit")
    var NEXTOFKIN_INPUT = document.getElementById("nextofkin_InputField")
    var NEXTOFKIN_EDIT_CONTAINER = document.getElementById("editNextofkinContainer")
    var NEXTOFKIN_SUBMIT = document.createElement("span")
    var NEXTOFKIN_CANCEL = document.createElement("span")
    var NEXTOFKIN_SUBMIT_ICON = document.createElement("i")
    var NEXTOFKIN_CANCEL_ICON = document.createElement("i")

    NEXTOFKIN_CANCEL.setAttribute("class", "cancelButton")
    NEXTOFKIN_CANCEL.setAttribute("id", "nextofkin_cancel_edit")
    NEXTOFKIN_CANCEL.setAttribute("onclick", "cancelNextofkinEdit()")
    NEXTOFKIN_CANCEL.appendChild(NEXTOFKIN_CANCEL_ICON)
    NEXTOFKIN_CANCEL_ICON.innerHTML = "&times;"

    NEXTOFKIN_INPUT.removeAttribute("readonly")

    NEXTOFKIN_SUBMIT.setAttribute("class", "submitButton")
    NEXTOFKIN_SUBMIT.setAttribute("onclick", "submitNextofkin()")

    NEXTOFKIN_SUBMIT.setAttribute("id", "nextofkin_submit_edit")
    NEXTOFKIN_SUBMIT.appendChild(NEXTOFKIN_SUBMIT_ICON)
    NEXTOFKIN_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    NEXTOFKIN_EDIT_CONTAINER.appendChild(NEXTOFKIN_CANCEL)
    NEXTOFKIN_EDIT_CONTAINER.appendChild(NEXTOFKIN_SUBMIT)
    NEXTOFKIN_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelNextofkinEdit() {
    var NEXTOFKIN_INPUT = document.getElementById("nextofkin_InputField")
    var NEXTOFKIN_EDIT_CONTAINER = document.getElementById("editNextofkinContainer")
    var NEXTOFKIN_SUBMIT = document.getElementById("nextofkin_submit_edit")
    var NEXTOFKIN_CANCEL = document.getElementById("nextofkin_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "nextofkin_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_NEXTOFKIN()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    NEXTOFKIN_INPUT.setAttribute("readonly", "true")

    NEXTOFKIN_EDIT_CONTAINER.removeChild(NEXTOFKIN_CANCEL)
    NEXTOFKIN_EDIT_CONTAINER.removeChild(NEXTOFKIN_SUBMIT)
    NEXTOFKIN_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT NEXTOFKIN BUTTON
function submitNextofkin(){
    $("#nextofkinSubmit").trigger("click")
}


// NOKEMAIL
var EDIT = document.getElementById("nokemail_edit")


function EDIT_NOKEMAIL() {
    var EDIT = document.getElementById("nokemail_edit")
    var NOKEMAIL_INPUT = document.getElementById("nokemail_InputField")
    var NOKEMAIL_EDIT_CONTAINER = document.getElementById("editNokemailContainer")
    var NOKEMAIL_SUBMIT = document.createElement("span")
    var NOKEMAIL_CANCEL = document.createElement("span")
    var NOKEMAIL_SUBMIT_ICON = document.createElement("i")
    var NOKEMAIL_CANCEL_ICON = document.createElement("i")

    NOKEMAIL_CANCEL.setAttribute("class", "cancelButton")
    NOKEMAIL_CANCEL.setAttribute("id", "nokemail_cancel_edit")
    NOKEMAIL_CANCEL.setAttribute("onclick", "cancelNokemailEdit()")
    NOKEMAIL_CANCEL.appendChild(NOKEMAIL_CANCEL_ICON)
    NOKEMAIL_CANCEL_ICON.innerHTML = "&times;"

    NOKEMAIL_INPUT.removeAttribute("readonly")

    NOKEMAIL_SUBMIT.setAttribute("class", "submitButton")
    NOKEMAIL_SUBMIT.setAttribute("onclick", "submitNokemail()")

    NOKEMAIL_SUBMIT.setAttribute("id", "nokemail_submit_edit")
    NOKEMAIL_SUBMIT.appendChild(NOKEMAIL_SUBMIT_ICON)
    NOKEMAIL_SUBMIT_ICON.setAttribute("class", "fa fa-check")

    NOKEMAIL_EDIT_CONTAINER.appendChild(NOKEMAIL_CANCEL)
    NOKEMAIL_EDIT_CONTAINER.appendChild(NOKEMAIL_SUBMIT)
    NOKEMAIL_EDIT_CONTAINER.removeChild(EDIT)

}

// REMOVE THE EDIT BUTTONS CONTENT FROM THE DOM 
function cancelNokemailEdit() {
    var NOKEMAIL_INPUT = document.getElementById("nokemail_InputField")
    var NOKEMAIL_EDIT_CONTAINER = document.getElementById("editNokemailContainer")
    var NOKEMAIL_SUBMIT = document.getElementById("nokemail_submit_edit")
    var NOKEMAIL_CANCEL = document.getElementById("nokemail_cancel_edit")
    var EDIT = document.createElement("span")
    
    EDIT.setAttribute("id", "nokemail_edit")
    EDIT.setAttribute('class', "editButton")
    EDIT.setAttribute("onclick", "EDIT_NOKEMAIL()")

    var EDIT_ICON = document.createElement("i")
    EDIT_ICON.setAttribute("class","fa fa-edit")

    EDIT.appendChild(EDIT_ICON)

    NOKEMAIL_INPUT.setAttribute("readonly", "true")

    NOKEMAIL_EDIT_CONTAINER.removeChild(NOKEMAIL_CANCEL)
    NOKEMAIL_EDIT_CONTAINER.removeChild(NOKEMAIL_SUBMIT)
    NOKEMAIL_EDIT_CONTAINER.appendChild(EDIT)
}

//SUBMIT NOKEMAIL BUTTON
function submitNokemail(){
    $("#nokemailSubmit").trigger("click")
}


// MODAL
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("dis_account");
var btn3 = document.getElementById("dis_account_yes");
var btn4 = document.getElementById("del_record");
var btn5 = document.getElementById("dis_continue");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
// When user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
    modal.style.display = "none";
}
// Button for disable account successful
btn3.onclick = function() {
    modal5.style.display = "block";
    modal2.style.display = "none";
}
// Button for delete security key enquiry modal
btn4.onclick = function() {
    modal3.style.display = "block";
    modal.style.display = "none";
}
// Button for delete successful modal
btn5.onclick = function() {
    modal4.style.display = "block";
    modal3.style.display = "none";
}
// When user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}