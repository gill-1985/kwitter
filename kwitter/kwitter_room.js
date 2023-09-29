const firebaseConfig = {
      apiKey: "AIzaSyCMU5JEhUtGdGN030Igx9CRRChcBkcWHVI",
      authDomain: "class-test-7c487.firebaseapp.com",
      projectId: "class-test-7c487",
      storageBucket: "class-test-7c487.appspot.com",
      messagingSenderId: "1025783998463",
      appId: "1:1025783998463:web:60d1212310cc58431f69ca",
      measurementId: "G-QJKPWENJMG"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
