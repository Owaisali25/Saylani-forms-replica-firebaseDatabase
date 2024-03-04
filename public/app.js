
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {set,ref,push,getDatabase,onValue} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDin8lYxXpMkauFQtkuCJz97bGzr5X7WAQ",
  authDomain: "registration-form-d058d.firebaseapp.com",
  databaseURL: "https://registration-form-d058d-default-rtdb.firebaseio.com",
  projectId: "registration-form-d058d",
  storageBucket: "registration-form-d058d.appspot.com",
  messagingSenderId: "1028900248215",
  appId: "1:1028900248215:web:7d028f9d4d65e16bcfe7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

let stdCountry = document.getElementById("stdCountry");
let stdName = document.getElementById("stdName");
let stdCourse = document.getElementById("stdCourse");
let stdEmail = document.getElementById("stdEmail");
let stdFathername = document.getElementById("stdFathername");
let stdCnic = document.getElementById("stdCnic");
let stdPhone = document.getElementById("stdPhone");
let stddob = document.getElementById("stddob");
let stdFatherCnic = document.getElementById("stdFatherCnic");
let stdGender = document.getElementById("stdGender");
let stdAddrs = document.getElementById("stdAddrs");
let stdQulifi = document.getElementById("stdQulifi");
let stdlaptop = document.getElementById("stdlaptop");
let stdPiture = document.getElementById("stdPiture");

window.sendData = function() {
  let foamObj = {
    fullName: stdName.value,
    fatherName: stdFathername.value,
    email: stdEmail.value,
    phone: stdPhone.value,
    country: stdCountry.value,
    course: stdCourse.value,
    cnic: stdCnic.value,
    fatherCnic: stdFatherCnic.value,
    dob: stddob.value,
    address: stdAddrs.value,
    gender: stdGender.value,
    isLaptop: stdlaptop.value,
    lastQualification: stdQulifi.value,
    picture: stdPiture.value
  };

  let isEmpty = false;

  for (let key in foamObj) {
    if (foamObj.hasOwnProperty(key) && foamObj[key] === "") {
      isEmpty = true;
      break;
    }
  }

  if (isEmpty) {
    console.log("Fill form properly");
  } else {
      foamObj.id = push(ref(database,"studentData/")).key;
      
      let refrence = ref(database ,`studentData/ ${foamObj.id}`);
      set(refrence,foamObj);
  }
};

  function getData(){
      let refrence = ref(database,"studentData/");
      onValue(refrence,function(data){
          console.log(data.val());
      })
  }
  getData();  

function resetVal(){
  stdCountry.value = "";
  stdCourse.value = "";
  stdEmail.value = "";
  stdFathername.value = "";
  stdCnic.value = "";
  stdPhone.value = "";
  stddob.value = "";
  stdFatherCnic.value = "";
  stdGender.value = "";
  stdAddrs.value = "";
  stdQulifi.value = "";
  stdlaptop.value = "";
  stdPiture.value = "";
  stdName.value = "";

}
window.stopresrt = function(e){
  event.preventDefault();
  resetVal();
}