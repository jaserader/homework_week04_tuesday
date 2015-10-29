var token = "c26fc95f6713fffafb3d44dd90f91316dc388a64";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
