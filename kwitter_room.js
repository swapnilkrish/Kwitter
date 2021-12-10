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

                  //End code
            });
      });
}
getData();
