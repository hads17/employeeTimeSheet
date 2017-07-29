// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjzDREpWoJdTOOu8Po-VThJunl4tWPwhc",
    authDomain: "employeetimesheet-cd040.firebaseapp.com",
    databaseURL: "https://employeetimesheet-cd040.firebaseio.com",
    projectId: "employeetimesheet-cd040",
    storageBucket: "employeetimesheet-cd040.appspot.com",
    messagingSenderId: "179793583890"
  };
  firebase.initializeApp(config);


$(document).ready(function(){
    $('body').on('click', '#submit', function(){
        var name = $('#name').val().trim();
        var role = $('#role').val().trim();
        var startDate = $('#startDate').val().trim();
        var monthlyRate = $('#monthlyRate').val().trim();
        var monthsWorked;
        var totalBilled;
        console.log('hello');

        $('#table1').append('<tr>' + '<td>'+ name + '</td>' + '</tr');

    });
});