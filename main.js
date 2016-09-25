if (window.localStorage.getItem("firstVisit")) {
  window.localStorage.setItem("firstVisit", false);
  alert("Welcome to my website, visitor!");
  if (confirm("Would you like to set some local settings??") == true) {
    window.location="//dog2puppy-github.tk/settings";
  }else{
    alert("Okay! You can always use the settings button at the top!");
  }
}
