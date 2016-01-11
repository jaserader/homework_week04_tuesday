$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

// console.log('get requests');
//
// //jQuery selector
//
// var body = $('body')
// var repos = $('.repos');
// //
// // var moment = require('moment');
// // moment().format();
//
// $.getJSON('https://api.github.com/users/jaserader').done(function(data) {
//
//   var profilePic = $(".profilePic");
//   var smallProfilePic = $(".smallProfilePic");
//   var name = $("#name");
//   var userName = $("#userName");
//   var location = $("#location");
//   var joined = $("#joined");
//   var followers = $(".followers");
//   var following = $(".following");
//   var organizationsLogo = $(".orgLogo");
//
//    profilePic.attr('src', data.avatar_url);
//    smallProfilePic.attr('src', data.avatar_url);
//    organizationsLogo.attr('src', data.organizations_url);
//
//    name.append(data.name);
//    userName.append(data.login);
//    location.append(data.location);
//    joined.append(data.created_at);
//    followers.append(data.followers);
//    following.append(data.following);
//
// });
//
// $.getJSON('https://api.github.com/users/jaserader/repos').done(function(data) {
//   data.forEach(function(item){
//     var article = $('<article class="repo"></article>');
//     var header = $('<a class="repoName">' + item.name +'</a>');
//     var updated = $('<span class="updated">' + item.updated_at + '</span>');
//     var language = $('<a class="language">' + item.language + '</a>');
//     var starGazers = $('<a class="octicon octicon-star" id="starGazers">' + item.stargazers_count + '</a>');
//     var forks = $('<a class="octicon octicon-git-branch" id="forks">' + item.forks_count + '</a>');
//
//     starGazers.attr('href', item.stargazers_url);
//     header.attr('href', item.url);
//     forks.attr('href', item.forks_url);
//
//     article.append(header);
//     article.append(language);
//     article.append(starGazers);
//     article.append(forks);
//     article.append(updated);
//
//     // add it all to the screen
//     repos.append(article);
//     });
//   });

//////// lodash method ////////////////////////////////////////////////////

var userUrl = 'https://api.github.com/users/jaserader';
var repoUrl = 'https://api.github.com/users/jaserader/repos';

function displayUser(data){
  var detailsContainer = $('#userDetails');
  var templateHtml = detailsContainer.html();
  var template = _.template(templateHtml);

  var date = data.created_at;
  // var momentDateFormatted = moment(date).format("MMM DD HH:mm Z");
  console.log(date);
  // console.log(momentDateFormatted);

  var data = {
    name: data.name,
    username: data.login,
    joined: data.created_at,
    location: data.location,
    followers: data.followers,
    starred: 0,
    following: data.following,
    profilePic: data.avatar_url,
    orgLogo: data.organizations_url
  };

  var html = template(data);

  $('.userDetails').html(html);
};

function getUserInfo(){
  $.ajax(userUrl).done(displayUser);
};


getUserInfo();

/////////////////////repos///////////////////////////

function displayRepo(repos){

  var repoContainer = $('#repoList');
  var templateHtml = repoContainer.html();
  var template = _.template(templateHtml);
  var html = template({
    repos2: repos
  });

  $('.repos').html(html);
};

function getRepoInfo(){
  $.ajax(repoUrl).done(displayRepo);
};

getRepoInfo();
