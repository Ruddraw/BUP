function validate(){
    var username = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var popup = document.getElementById("popup");

    if(username == "Mishkat" && password == "2938"){
       alert("Login Successful! Congratulation!")
    }
    else{
        alert("Login failed! check your user name or password")
    }
}