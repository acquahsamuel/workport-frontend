const e = require("cors");

// this is a regular  function 
function UserCtrl() {
    this.user = {
        first: 'Larray',
        last: 'Samuel'
    }

    this.bye = function () {
        alert('bye' + this.user.first);
    }
}


//using this function inside a template 

/*
 ng-controller

 UserCtrl as uCtrl 

 uCtrl.user.first 
 uCtrl.user.bye 

*/


function checkUser(ev) {
    e.preventDefault();
    let status = false;

    let username = document.getElementById('');
    let password = document.getElementById('');

    for (let i = 0; i < userList.length; i++) {
        let user = userList[i];
        console.log(user.username);
        console.log(user.password);

        if (user.username == username && user.password == password) {
            console.log('Logged In');
            localStorage.setItem('currentUser', userList[i]);

            currentUser = userList[i];
            status = true;
            break;
        }
    }

    if (status == true) {
        location.href = "homepagetest.html";
    }

}