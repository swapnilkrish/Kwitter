var firebaseConfig = {
      apiKey: "AIzaSyC6UDwewPx9IohuNctpZr11SjJJpEhV1Xo",
      authDomain: "kwitter-8e76c.firebaseapp.com",
      databaseURL: "https://kwitter-8e76c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e76c",
      storageBucket: "kwitter-8e76c.appspot.com",
      messagingSenderId: "58737771188",
      appId: "1:58737771188:web:a1b11d30d2f2bbf006cde1"
};

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >0" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
