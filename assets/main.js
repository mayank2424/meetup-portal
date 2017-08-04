$(document).ready(function(){
    $("#button").click(function () { 
    var x = $("#url").val();
        $("#frame").attr('src', x);
    });
});

var username= 