if (localStorage.getItem("firstVisit") !== nil) {
  alert("Welcome to my website, visitor!");
  localStorage.setItem("firstVisit", false);
  if (confirm("Would you like to set some local settings??") == true) {
    window.location="//dog2puppy-github.tk/settings";
  }else{
    alert("Okay! You can always use the settings button at the top!");
  }
}
