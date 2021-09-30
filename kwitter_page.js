//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like');
 name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
 like_buttton = "<button class='btn btn-success' id="+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
 row = name_with_tag+message_with_tag+like_buttton+span_with_tag;
 document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

function updateLike(message_id)
{
      console.log("Clicked on like btn"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(rom_name).child(message_id).update({
            like:updated_likes
      });
}