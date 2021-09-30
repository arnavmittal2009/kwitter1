
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkJoatVCFmCdPhXpS5eUwiM2Ev3ZhR0G0",
      authDomain: "kwitter-b149a.firebaseapp.com",
      databaseURL: "https://kwitter-b149a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b149a",
      storageBucket: "kwitter-b149a.appspot.com",
      messagingSenderId: "611980912134",
      appId: "1:611980912134:web:d446e6eca16142e107c587"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

    function add_room()
    {
          room_name=document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name- "+Room_names );
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

