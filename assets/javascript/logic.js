$(document).ready(function(){
    $('#submit').on('click', function(){
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