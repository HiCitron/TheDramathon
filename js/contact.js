function validateForm() {
  if (document.forms["contactform"]["name"].value == "") {
    document.getElementById("alert").innerHTML = "Please fill out your name";
    return false;
  } else if (document.forms["contactform"]["email"].value == "") {
    document.getElementById("alert").innerHTML = "Please fill out your email";
    return false;
  } else if (document.forms["contactform"]["subject"].value == "") {
    document.getElementById("alert").innerHTML = "Please fill out your subject";
    return false;
  } else {
    document.getElementById("alert").innerHTML = "Thank you, your mail has been sent";
    return true;
  }
}