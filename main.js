$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

console.log('get requests');

//jQuery selector

var body = $('body')


//jQuery methods (like for ajax)
function processData(data) {
  //process data
}

$.getJSON('https://api.github.com/users/jaserader').done(function(data) {
  console.log(arguments);

  processData(data)
})

$.getJSON('https://api.github.com/users/jaserader/repos').done(function(data) {
  console.log(arguments);
  //do the work with this data in here
  // var repoList = $(".reposList");
  // var repo = $(".repo")
  //
  //   for(var i = 0; i < array.length; i++){
  //     $(".repoName").append(data.name);
  console.log(data.name);
  // }
  var url = api.github.com/users/jaserader/repos;

  processData(data)
})

$.getJSON('https://api.github.com/users/jaserader').done(function(data) {

  var profilePic = $(".profilePic");
  var name = $("#name");
  var userName = $("#userName");
  var location = $("#location");
  var joined = $("#joined");
  var followers = $(".followers");
  var following = $(".following");

   profilePic.attr('src', data.avatar_url);
   name.append(data.name);
   userName.append(data.login);
   location.append(data.location);
   joined.append(data.joined);
   followers.append(data.followers);
  //  $(".starred").prepend(data.starred_url);
   following.append(data.following);
   $(".orgLogo").attr('src', data.organizations_url);


  processData(data)
})

var contribTab = $("#contrib");
var repoTab = $("#repoTab");
var pubActTab = $('#activityTab');

repoTab.click(function(){
  console.log("poke");



  // repoTab.css("border-left: 1px #DDDDDD solid")
})
