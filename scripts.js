$(document).ready(function (){
    $('tr').click(function (){
        $('tr td').css({'background-color' : 'white'}); 
        $('td', this).css({'background-color' : 'yellow'});
    }); 
});

$(document).ready(function (){ 
    $('input').on('change', function(){ 
        var date = document.getElementById(start); 
        window.location.href = 'https://localhost:7217/api/salaries/' + ${date};
    }) 
});
