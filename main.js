function login(){
    console.log("ok")
    user_p1 = document.getElementById("p1").value;
    user_p2 = document.getElementById("p2").value;
    localStorage.setItem("user_p1",user_p1);
    localStorage.setItem("user_p2",user_p2);
    window.location = "game.html";
    console.log("ok2")
}