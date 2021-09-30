function adduser()
{
   user_name=document.getElementById("user_name").value;
   localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyDOvVTYlLIoq4llvkkn2p82v3WfP40U3bA",
    authDomain: "kwitter-9d489.firebaseapp.com",
    databaseURL: "https://kwitter-9d489-default-rtdb.firebaseio.com",
    projectId: "kwitter-9d489",
    storageBucket: "kwitter-9d489.appspot.com",
    messagingSenderId: "970057297008",
    appId: "1:970057297008:web:81644fccd0682339bb98b5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);