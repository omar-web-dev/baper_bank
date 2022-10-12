
document.getElementById('submit').addEventListener('click', function(){
    const emailFiled = document.getElementById('email');
    const passwordFiled = document.getElementById('password');
    let userMail = emailFiled.value
    let userPassword = passwordFiled.value
    if(userMail == '' || userPassword == ''){
        console.log('Pleas Enter you email and password');
    }else if('omar@programmer.com' == userMail && 'OMfa35@o' == userPassword){
        console.log('yeah!');
    }else{
        console.log('Please sing up');
    }
})
