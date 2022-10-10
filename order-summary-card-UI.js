const finish = document.querySelector('#finish')
const goback = document.querySelector('#goback')

finish.addEventListener('click', handleFinish)
goback.addEventListener('click', handleGoback)

function handleFinish(){
    document.querySelector('.overlay').style.left = '0'
}
function handleGoback(){
    document.querySelector('.overlay').style.left = '-100%'
}