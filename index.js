const firstName = document.getElementById('firstName')
const firstNameError = document.getElementById('firstName-empty-error')
const lastName = document.getElementById('lastName')
const lastNameError = document.getElementById('lastName-empty-error')
const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const pwd = document.getElementById('pwd')
const pwdError = document.getElementById('pwd-empty-error')
const submit = document.getElementById('submit')

const fnamePlaceholderText = firstName.placeholder
const lnamePlaceholderText = lastName.placeholder
const emailPlaceholderText = email.placeholder
const pwdPlaceholderText   = pwd.placeholder

// parallel arrays populated with the input fields that need to be verified
const placeholderTxtArray = [fnamePlaceholderText, lnamePlaceholderText, emailPlaceholderText, pwdPlaceholderText]
const errorArray = [firstNameError,lastNameError,emailError,pwdError]
const nameArray = [firstName, lastName, email, pwd]


// if email isn't in correct format, an error message is display.
email.addEventListener('blur', checkRegEx)
submit.addEventListener('click', validateInputs)

// if inputs are empty and error message is displayed
function validateInputs(e) {  
    for(let i=0; i< placeholderTxtArray.length; i++) {  
        if (!nameArray[i].value  || nameArray[i].id === 'email' && nameArray[i].value === '') {
            e.preventDefault() //prevents the page from submitting
           
            errorArray[i].innerText = `${placeholderTxtArray[i]} cannot be empty`  
            console.log( `${placeholderTxtArray[i]} cannot be empty`  )
            errorArray[i].style.visibility= 'visible'
            addErrorImg(i)            
        }    else  {
            window.location.reload
            }         
        }  
    } 
    
//after the inputs are filled, the error message is removed 
firstName.addEventListener('change', removeError)
lastName.addEventListener('change', removeError)
pwd.addEventListener('change', removeError)

function removeError() {    
    for(let i=0; i< nameArray.length; i++) {  
        if (nameArray[i].value ){
            errorArray[i].style.visibility= 'hidden'
            nameArray[i].style.backgroundImage = 'none' 
        }
    } 
}

function checkRegEx() {
    const emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z.]+)/ig;
    const regExResult = email.value.match(emailRegEx)  
    const emailErrorIndex = errorArray.indexOf(emailError)  

    if(regExResult === null) {
        emailError.style.visibility= 'visible'
        emailError.innerHTML = `Looks like this is not an email`
        addErrorImg(emailErrorIndex)
    } else {
        emailError.style.visibility = 'hidden'
    }
}

function addErrorImg(value) {   
nameArray[value].style.backgroundImage = 'url(./images/icon-error.svg)'
nameArray[value].style.backgroundRepeat = "no-repeat"
nameArray[value].style.backgroundPosition = "right"
nameArray[value].style.backgroundPositionX = "95%"
} 



