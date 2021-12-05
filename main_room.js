var firebaseConfig = {
    apiKey: "AIzaSyAncQUm3inL_ZLfWRx4gQ3C1cbNCEy37Bk",
    authDomain: "kwitter-app-eb293.firebaseapp.com",
    databaseURL: "https://kwitter-app-eb293-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-eb293",
    storageBucket: "kwitter-app-eb293.appspot.com",
    messagingSenderId: "256155681743",
    appId: "1:256155681743:web:4b5c377bd15a12c5dc48ba"
  };

  firebase.initializeApp(firebaseConfig);

function adduser() {
    User_Name = document.getElementById("User_Name").value;
    firebase.database().ref("/").child(User_Name).update({
        Purpose : "adding user"
    });
}