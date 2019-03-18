
function submitClick() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var submitBtn = document.getElementById('submitBtn');
    var userId = 1;

    function write(userId, name, email) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email
      });
      write(userId, name, email);
    }
}
