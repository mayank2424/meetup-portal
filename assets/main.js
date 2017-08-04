$(document).ready(function(){
    $("#button").click(function () { 
    var x = $("#url").val();
        $("#frame").attr('src', x);
    });
});

var username= $('.form-input').val();
var password=$('.password').val();

var authServerUri =" https://api.meetup.com/oauth/access/",
authParams = {
  response_type: "GET",
  client_id: this.model.get("70aj8rnkrnqk6i7m3ptal48cps"),
  redirect_uri: this.model.get("https://mayank2424.github.io/meetup-portal/"),
//   scope: this.model.get("scope"),
//   state: this.model.get("state")
};

// Redirect to Authorization page.
var replacementUri = authServerUri + "?" + $.param(authParams);
window.location.replace(replacementUri);