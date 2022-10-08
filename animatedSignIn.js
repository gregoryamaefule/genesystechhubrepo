const signin = document.querySelector('.signin button')
const signup = document.querySelector('.signup button')


signin.addEventListener('click', handleClickSignin)
signup.addEventListener('click', handleClickSignup)

function handleClickSignin(){
    document.querySelector('.signupform').style.left = '100%'
    document.querySelector('.signinform').style.right = '0'
    document.querySelector('.signin').style.left = '100%'
    document.querySelector('.signup').style.right = '31%'
    document.querySelector('.form').style.right = '50%'
    document.querySelector('.SigninCTA').style.left = '50%'
}
function handleClickSignup(){
    document.querySelector('.signupform').style.left = ''
    document.querySelector('.signinform').style.right = ''
    document.querySelector('.signin').style.left = ''
    document.querySelector('.signup').style.right = ''
    document.querySelector('.form').style.right = ''
    document.querySelector('.SigninCTA').style.left = ''
}