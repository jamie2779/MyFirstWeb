//firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { 
  getAuth,// authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword,// email 로그인
  createUserWithEmailAndPassword, //email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

var firebaseConfig = {
    apiKey: "AIzaSyD00VknsuruoKYtNqfxW6CXGdPeMBWmUwg",
    authDomain: "myfirstweb-c7ca5.firebaseapp.com",
    databaseURL: "https://myfirstweb-c7ca5-default-rtdb.firebaseio.com",
    projectId: "myfirstweb-c7ca5",
    storageBucket: "myfirstweb-c7ca5.appspot.com",
    messagingSenderId: "1040842988088",
    appId: "1:1040842988088:web:5d88463338eb4cc36f24cd",
    measurementId: "G-HRH0CDRFX2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};