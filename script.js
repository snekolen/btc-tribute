function toggle() {
    var x = document.getElementById("nav-obj"); //Add another class
    if(x.className == "topnav") {
        x.className += "responsive";
    }else{
        x.className = "topnav";
    }
}