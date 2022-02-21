//script.js
import { loginEmail, signupEmail } from 'firebase.js';
import { loginEmail, signupEmail } from 'cookie.js';
const buttons = document.getElementById('buttons');


function register(self){
    self.disabled=true;
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var email = document.querySelector("#floatingEmail").value;
    var password = document.querySelector("#floatingPassword").value;
    if(email.match(regExp)!=null){
        if(password.length>5&&password.length<21){
            if(password === document.querySelector("#floatingPasswordCheck").value){
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("회원가입 완료");
                
                location.href = 'index.html'

                // ...
                })
                .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                self.disabled=false;
                // ..
                });
            }else{
                alert('비밀번호가 일치하지 않습니다');
                self.disabled=false;

            }
        }else{
            alert('비밀번호는 6~20자로 설정해주세요');
            self.disabled=false;
        }
    }else{
        alert('올바른 이메일을 입력해주세요');
        self.disabled=false;   
    }
}
    
function join(){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
        