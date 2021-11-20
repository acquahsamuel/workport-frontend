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